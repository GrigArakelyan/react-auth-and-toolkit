import "./LoginCode.scss";
import loginimg from "../../img/loginImg.png";
import {ReactComponent as CloseLogo} from "../../img/icons/Close.svg"
import {ReactComponent as ErrorLogo} from "../../img/icons/ErrorOutline.svg"
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchLoginCode } from "../../store/slices/loginCode/LoginCodeThunk";
import { selectCodeData } from "../../store/selectores/CodeSelector";
import { DASHBOARD } from "../../constants/router";
import { formatNumberInput } from "../../helpers/input";

const LoginCode = () => {
  const {error, loading} = useSelector(selectCodeData);
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const inputs = ["code1", "code2", "code3", "code4", "code5", "code6"];

  const postCode = (data) => {
    const userLoginObj = {
      ...state,
      code:
        data.code1 +
        data.code2 +
        data.code3 +
        data.code4 +
        data.code5 +
        data.code6,
    };
    dispatch(fetchLoginCode(userLoginObj))
      .unwrap()
      .then(() => {
        navigate(DASHBOARD, {required: true});
      })
      .catch(() => {});
  };

  const resetInputs = () => {
    reset({ code1: "", code2: "", code3: "", code4: "", code5: "", code6: "" });
  };

  return (
      <div className="login_page_code">
        <div>
          <img src={loginimg} className="code_img" />
        </div>
        <div className="login_code-right">
          <div className="login_code">
            <form className="login_code_item" onSubmit={handleSubmit(loading ? ()=>{} : postCode)}>
              <h2 className="h2_code">Login</h2>
                {error != null && (
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
                  {inputs.map((input) => (
                    <input type="text" maxLength="1"
                      className={error? "input_code_error": watch(input) ? "input_code2": "input_code"}
                      key={input}
                      name={input}
                      {...register(input, {
                        required: { value: true }})}
                      onInput={formatNumberInput} />
                    ))}
                  <CloseLogo className="clear_img_button"
                    onClick={resetInputs}
                  />
                </div>
              </div>
              <button type="submit" className="button_code">
                {loading ? "Loading..." : "Submit"}
              </button>
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
