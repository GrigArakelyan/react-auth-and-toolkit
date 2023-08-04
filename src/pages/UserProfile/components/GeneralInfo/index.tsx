import "./GeneralInfo.scss";
import { selectMyProfile } from "../../../../store/selectores/MyProfileSelector";
import { Controller, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GitHubIcon from "../../../../img/github.png";
import SlackIcon from "../../../../img/slack.png";
import { changeGeneralInfo } from "../../../../store/slices/MyProfile/MyProfileSlice";
import { formatNumberInput } from "../../../../helpers/input";
import React, { FC } from "react";
import { GeneralInfoData } from "../../../../types/GeneralInfo";
import { useAppDispatch } from "../../../../hook/useAppDispatch";
import { useAppSelector } from "../../../../hook/useAppSelector";
import Input from "../../../../Components/Inputs/Input";
import  Button  from "../../../../Components/Button/Button";


const GeneralInfo:FC = () => {
  const {data, error} = useAppSelector(selectMyProfile);

  const adapter = new AdapterDayjs();
  const dispatch = useAppDispatch();
  const { register, control, formState:{errors, isDirty }, handleSubmit} = useForm<GeneralInfoData>(
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

  const postUserData = (postData:GeneralInfoData) => {
    postData = {
      ...postData, 
      dateOfBirth: new Date (postData.dateOfBirth).toISOString(),
      startDate: new Date (postData.startDate).toISOString(),
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
            <Input type={"text"} className={errors.firstName ? "error" : "input_column_1"}
              register={register}
              value={true}
              name={"firstName"}
            />
          </div>
          <div className="inputs_column">
            <span className="span_text">Last Name</span>
            <Input type={"text"} className={errors.lastName ? "error" : "input_column_1"}
              register={register}
              name={"lastName"} 
              required={true}/>
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
            <Input type={"text"} className={"input_column_2"} placeholder={data?.email}
            register={register} name={"email"}/>
          </div>
          <div className="inputs_column_2">
            <span className="span_text">Personal Email</span>
            <Input type={"text"} className={errors.personalEmail ? "error" : "input_column_2"}
              register={register} name={"personalEmail"} required={true} />
          </div>
          <Input type={"text"} className={"input_column_phone"}
            placeholder={errors.mobilePhone ? "error" : "Mobile Phone"}
            onInput={formatNumberInput} required={true}
            register={register} name={"mobilePhone"}/>
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
            <Input type={"text"} className={"input_column_1"}
            onInput={formatNumberInput}
            register={register} name={"absences"}/>
          </div>
          <div className="input_column_checkbox">
            <Input type={"checkbox"} className={"input_checkbox"}
            register={register} name={"isCoreTeamMember"}/>
            <span className="span_text">Core team member</span>
          </div>
          {isDirty && 
          <Button className={"button_submit"} type={"submit"}
            text={"Submit"} 
            onClick={handleSubmit(postUserData)}
          />}      
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
            <Input className={errors.slackUserName ? "error_account" : "input_account"} type={"text"}
            placeholder={"Enter you slack user name"} register={register} name={"slackUserName"}
            required={true}/>
          </div>
        </div>
        <div className="account">
          <span className="account_span">Github</span>
          <div className="input_icon">
            <img src={GitHubIcon} className="icon" alt="img"/>
            <Input className={errors.gitHubUserName ? "error_account" : "input_account"} type={"text"}
            placeholder={"Enter your github user name"} register={register} name={"gitHubUserName"}/>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default GeneralInfo;
