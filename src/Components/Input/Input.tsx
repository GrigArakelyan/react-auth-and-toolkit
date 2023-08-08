import React, { FormEventHandler, FC } from "react";
import "./Input.scss"
import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
   className:string;
   type: string;
   register:  UseFormRegisterReturn;
   onInput?: FormEventHandler<HTMLInputElement> | undefined;
   maxLength?: number;
   readonly?: boolean;
   placeholder?: string;
}

const Input:FC<Input> = ({type, register, onInput, className, maxLength, readonly, placeholder}) => {


   return (
      <input className={className} type={type}
         placeholder={placeholder}
         maxLength={maxLength}
         readOnly={readonly}
         {...register}
         onInput={onInput}
      />)
}

export default Input