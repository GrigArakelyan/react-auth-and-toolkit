import React, { FC } from "react";
import "./Input.scss"
import { IFormData } from "../../types/LoginEmail";
import { UseFormRegister } from "react-hook-form";
import { GeneralInfoData } from "../../types/GeneralInfo";

interface Input {
   type: string;
   className:string;
   key?: string;
   register:  UseFormRegister<any>;
   name: any;
   onInput?: (e: any) => void ;
   maxLength?: number;
   readonly?: boolean;
   placeholder?: string;
   required?: boolean;
   value?: any;
   message?: any;
   validation?: RegExp;
}

const Input:FC<Input> = ({name, register, value, validation, required, message, onInput, className, maxLength, key, type, placeholder, readonly}) => {


   return <input type={type} maxLength={maxLength} key={key}
      className={className} readOnly={readonly}
      placeholder={placeholder}
      {...register(name, {
         required: required,
         pattern: {
            value: value || validation,
            message: message
         }
      })}
      onInput={onInput}/>
}

export default Input