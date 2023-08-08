import React, { FC } from "react";
import "./Input.scss"
import { IFormData } from "../../types/LoginEmail";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { GeneralInfoData } from "../../types/GeneralInfo";

interface Input {
   type: string;
   className:string;
   key?: string;
   register:  UseFormRegisterReturn;
   name?: any;
   onInput?: (e: any) => void ;
   maxLength?: number;
   readonly?: boolean;
   placeholder?: string;
   required?: boolean;
   value?: any;
   message?: any;
   validation?: RegExp;
}

const Input:FC<Input> = ({name, register, value, validation, required, message, onInput, className, maxLength, type, placeholder, readonly}) => {


   return <input type={type} maxLength={maxLength}
      className={className} readOnly={readonly}
      placeholder={placeholder}
      {...register}
      onInput={onInput}/>
}

export default Input