import "./GeneralInfo.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectMyProfile } from "../../../../store/selectores/MyProfileSelector";
import { Controller, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GitHubIcon from "../../../../img/github.png";
import SlackIcon from "../../../../img/slack.png";
import { useDispatch } from "react-redux";
import { changeGeneralInfo } from "../../../../store/slices/MyProfile/MyProfileSlice";
import { formatNumberInput } from "../../../../helpers/input";
import React, { FC } from "react";
import { GeneralInfoData } from "../../../../types/GeneralInfo";


const GeneralInfo:FC = () => {
  const {data, error} = useSelector(selectMyProfile);

  const adapter = new AdapterDayjs();
  const dispatch = useDispatch();
  const { register, control, formState:{errors, isDirty }, handleSubmit} = useForm(
    {defaultValues: 
      { ...data,
        firstName: data?.firstName,
        lastName: data?.lastName,
        dateOfBirth: adapter.date(data?.dateOfBirth) ,
        startDate: adapter.date(data?.startDate),
        personalEmail:data?.personalEmail,
        mobilePhone:data?.mobilePhone,
        absences:data?.absences,
        isCoreTeamMember:data?.isCoreTeamMember,
        slackUserName:data?.slackUserName,
        gitHubUserName:data?.gitHubUserName }
    })

  const postUserData = (postData:GeneralInfoData):void => {
    postData = {
      ...postData, 
      dateOfBirth: new Date(postData?.dateOfBirth).toISOString(),
      startDate: new Date(postData?.startDate).toISOString(),
      email: data?.email,
    }
    dispatch(changeGeneralInfo(postData));
  }

  return (
    <form className={error ? "general_info_div_error" : "general_info_div"} 
      onSubmit={handleSubmit(postUserData)}>
    <div className="general_info_left">
      <h3 className="h3_title">General Info</h3>
      <div className="info_left_form">
        <div className="inputs_row">
          <div className="inputs_column">
            <span className="span_text">First name</span>
            <input className={errors.firstName ? "error" : "input_column_1"} type="text"
            {...register("firstName" , {required: true})}/>
          </div>
          <div className="inputs_column">
            <span className="span_text">Last Name</span>
            <input className={errors.lastName ? "error" : "input_column_1"} type="text"
            {...register("lastName" ,{required: true})}/>
          </div>
          <div className="inputs_column">
            <span className="span_text">Date of birth</span>
            <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                className="css-1u3bzj6-MuiFormControl-root-MuiTextField-root" 
                {...field}/>
            </LocalizationProvider>
            )}/>    
          </div>
        </div>
        <div className="inputs_row">
          <div className="inputs_column_2">
            <span className="span_text">Email</span>
            <input className="input_column_2" type="text" readOnly
              placeholder={data?.email}
              {...register("email")}/>
          </div>
          <div className="inputs_column_2">
            <span className="span_text">Personal Email</span>
            <input className={errors.personalEmail ? "error" : "input_column_2"} type="text"
              {...register("personalEmail" ,{required: true})}/>
          </div>
          <input className="input_column_phone" type="text"
            placeholder={errors.mobilePhone ? "error" : "Mobile Phone"}
            {...register("mobilePhone" ,{required: true})}
              onInput={formatNumberInput}/>
        </div>
        <div className="inputs_row">
          <div className="inputs_column">
            <span className="span_text">Start Date</span>
            <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker  className="css-1u3bzj6-MuiFormControl-root-MuiTextField-root" {...field}/>
            </LocalizationProvider>
            )}/>
          </div>
          <div className="input_column_absences">
            <span className="span_text">Absences</span>
            <input className="input_column_1" type="text"
              {...register("absences")}
                onInput={formatNumberInput}/>
          </div>
          <div className="input_column_checkbox">
            <input className="input_checkbox" type="checkbox"
              {...register("isCoreTeamMember")}/>
            <span className="span_text">Core team member</span>
          </div>
          {isDirty && 
          <button  className="button_submit" type="submit">Submit</button>}      
        </div>
      </div>
    </div>
    <div className="general_info_right">
      <h3 className="h3_title">My accounts</h3>
      <div className="accounts" >
        <div className="account">
          <span className="account_span">Slack</span>
          <div className="input_icon">
            <img src={SlackIcon} className="icon" alt="img"/>
            <input className={errors.slackUserName ? "error_account" : "input_account"} type="text" 
              placeholder="Enter you slack user name"
              {...register("slackUserName", {required: true})}/>
          </div>
        </div>
        <div className="account">
          <span className="account_span">Github</span>
          <div className="input_icon">
            <img src={GitHubIcon} className="icon" alt="img"/>
            <input className={errors.gitHubUserName ? "error_account" : "input_account"} type="text" 
              placeholder="Enter your github user name" 
              {...register("gitHubUserName", {required: true})}/>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default GeneralInfo;
