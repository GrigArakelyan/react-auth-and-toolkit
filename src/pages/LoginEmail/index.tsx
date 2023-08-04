import React, { FC } from "react";
import {ReactComponent as ErrorLogo} from "../../img/icons/ErrorOutline.svg"
import { useNavigate } from "react-router-dom";
import loginimg from "../../img/loginImg.png";
import "./LoginEmail.scss";
import { fetchLoginEmail } from "../../store/slices/loginEmail/LoginEmailThunk";
import { useForm } from "react-hook-form";
import { selectEmailData } from "../../store/selectores/EmailSelector";
import { CODE } from "../../constants/router";
import { email } from "../../utils/validation";
import { LoginEmailPostData, DataLoginEmail, IFormData } from "../../types/LoginEmail";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";


const LoginEmail:FC = () => {
  const { register, formState: { errors }, handleSubmit, reset,} = useForm<IFormData>({mode: 'onChange'});
  const data:DataLoginEmail = useAppSelector(selectEmailData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputName: string = "email";
    
  const postEmail = (data:LoginEmailPostData):void => {  
    data = {
      email: data.email,
      languageID: "1",
    }
    if(data.email){      
      dispatch(fetchLoginEmail(data))
      .unwrap()
      .then(() => {
        navigate(CODE, { state: data, replace:true });
        reset();
      })
      .catch(() => {
        reset();
      });
    }
  };

  return (
    <div className="login_page_email">
      <div>
        <img src={loginimg} className="login_img" alt="img"/>
      </div>
      <div className="login_email">
        <form className="login_email_item"
          onSubmit={handleSubmit(!data.loading ? postEmail : () => {})}>
          <h2>Login</h2>
          {data.error && (
            <div className="error">
              <ErrorLogo className="error_logo"  />
              <p className="error_text">Write your e-mail adress</p>
            </div>
          )}
          {errors?.email && (
            <div className="error">
              <ErrorLogo className="error_logo"  />
              <p className="error_text">{errors.email.message }</p>
            </div>
          )}
          <div className="input_span_email">
            <span className="span_email">Enter your email</span>
            <Input 
              type={"text"}
              className={"input"}
              register={register}
              name={inputName}
              validation={email}
              message={"Fill in the field correctly"}             
              />
          </div>
          <Button className={"button"}
            text={(data.loading && "Loading...") || "Send Code"}
            onClick={handleSubmit(!data.loading ? postEmail : () => {})}
            type={"button"}
            />
        </form>
      </div>
    </div>
  );
};
export default LoginEmail;
