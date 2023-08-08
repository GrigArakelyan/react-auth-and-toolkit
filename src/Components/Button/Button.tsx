import React, { FC } from "react"
import "./Button.scss"

interface IButton  {
   className: string
   text: string;
   type: "button" | "submit" | "reset" ;
   onClick?: () => void;
   disabled?: boolean
}

const Button:FC<IButton> = ({text, type, onClick, className, disabled}) => {

   return  <button className={className}
         type={type}
         onClick={onClick}
         disabled={disabled}
      >{text}</button>
}
export default Button