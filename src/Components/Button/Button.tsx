import React, { FC } from "react"
import "./Button.scss"

interface IButton  {
   className: string
   text: string;
   type: "button" | "submit" | "reset" | undefined;
   onClick: () => void;
}

const Button:FC<IButton> = ({text, type, onClick, className}) => {

   return  <button className={className}
         type={type}
         onClick={onClick}
      >{text}</button>
}
export default Button