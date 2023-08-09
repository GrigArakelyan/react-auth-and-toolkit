import "./LoginCode.scss";
import loginimg from "../../img/loginImg.png";
import {ReactComponent as CloseLogo} from "../../img/icons/Close.svg"
import {ReactComponent as ErrorLogo} from "../../img/icons/ErrorOutline.svg"
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import React, { FC, useEffect } from "react";
import { fetchLoginCode } from "../../store/slices/loginCode/LoginCodeThunk";
import { selectCodeData } from "../../store/selectores/CodeSelector";
import { DASHBOARD } from "../../constants/router";
import { formatNumberInput } from "../../helpers/input";
import { LoginCodeInputsChange, LoginCodePostData } from "../../types/LoginCode";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const LoginCode:FC = () => {
  const {error, loading} = useAppSelector(selectCodeData);
  const { register, handleSubmit, watch, formState: { errors, isValid }, setFocus, reset } = useForm<FieldValues>({
    mode: "onChange",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const inputs: string[] = ["code1", "code2", "code3", "code4", "code5", "code6"];


  
  useEffect(() => {
    setFocus(inputs[0]);
  }, []);

    let index = 0;
    while(index < inputs.length){
      if(watch(inputs[index])){
        setFocus(inputs[index + 1]) 
      }
      index++;
    }

  const postCode = (data: LoginCodeInputsChange):void => {
    const userLoginObj:LoginCodePostData = {
      ...state,
      code:
        data.code1 +
        data.code2 +
        data.code3 +
        data.code4 +
        data.code5 +
        data.code6,
    };
    if(userLoginObj.code && userLoginObj.email && userLoginObj.languageID){
      dispatch(fetchLoginCode(userLoginObj))
      .unwrap()
      .then(() => {
        navigate(DASHBOARD);
      })
      .catch(() => {});
    }
  };

  const resetInputs = ():void => {
    reset();
  };
  
  return (
      <div className="login_page_code">
        <div>
          <img src={loginimg} className="code_img" alt="img"/>
        </div>
        <div className="login_code-right">
          <div className="login_code">
            <form className="login_code_item" onSubmit={handleSubmit((postCode) as any)}>
              <h2 className="h2_code">Login</h2>
                {error && (
                  <div className="error">
                    <ErrorLogo className="error_logo" />
                    <p className="error_text">Please enter a valid code</p>
                  </div>
                )}
                {Object.keys(errors).length > 0 && (
                  <div className="error">
                    <ErrorLogo className="error_logo" />
                    <p className="error_text">Pleace fill in all fields !</p>
                  </div> 
                )}
              <div className="input_span_code">
                <span className="span_code">
                  To finalize your verification, please enter the code that has
                  been sent to your email address / SMS
                </span>
                <div className="input_code_div">
                  {inputs.map((inputName) => (
                    <Input key={inputName}
                      className={error? "input_code_error": (watch<string>(inputName) ? "input_code2": "input_code")}
                      type="text"
                      onInput={formatNumberInput}
                      maxLength={1}
                      register={register(inputName, {
                        required: 'Field is required',
                     })}/>
                    ))}
                  <CloseLogo className="clear_img_button"
                    onClick={resetInputs}
                  />
                </div>
              </div>
              <Button className={"button"}
                text={loading ? "Loading..." : "Submit"}
                type="submit"
                disabled={!isValid || loading}
              />
            </form>
          </div>
          <span className="span">
            If you do not receive the confirmation message within a few minutes,
            please check your Spam or Bulk E-Mail folder
          </span>
        </div>
      </div>
  );
};
export default LoginCode;
