import {ReactComponent as ErrorLogo} from "../../img/icons/ErrorOutline.svg"
import { useNavigate } from "react-router-dom";
import loginimg from "../../img/loginImg.png";
import "./LoginEmail.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginEmail } from "../../store/slices/loginEmail/LoginEmailThunk";
import { useForm } from "react-hook-form";
import { selectEmailData } from "../../store/selectores/EmailSelector";
import { CODE } from "../../constants/router";
import { email } from "../../utils/validation";

const LoginEmail = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "error" });
  const data = useSelector(selectEmailData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const postEmail = (data) => {  
    dispatch(fetchLoginEmail({ ...data, languageID: "1" }))
    .unwrap()
    .then(() => {
      navigate(CODE, { state: { ...data, languageID: "1" }});
      reset();
    })
    .catch(() => {
      reset();
    });
  };

  return (
    <div className="login_page_email">
      <div>
        <img src={loginimg} className="login_img" />
      </div>
      <div className="login_email">
        <form className="login_email_item"
          onSubmit={handleSubmit(!data.loading ? postEmail : ()=>{})}>
          <h2>Login</h2>
          {data.error != null && (
            <div className="error">
              <ErrorLogo className="error_logo"  />
              <p className="error_text">Write your e-mail adress</p>
            </div>
          )}
          {errors?.email && (
            <div className="error">
              <ErrorLogo className="error_logo"  />
              <p className="error_text">{errors?.email.message}</p>
            </div>
          )}
          <div className="input_span_email">
            <span className="span_email">Enter your email</span>
            <input
              className="input_email"
              {...register("email", {
                required: true,
                pattern: {
                  value: email,
                  message: "Fill in the field correctly",
                },
              })}/>
          </div>
          <button type="submit" className="button_email">
            {(data.loading && "Loading...") || "Send Code"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginEmail;
