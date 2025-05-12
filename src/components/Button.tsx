import ReactElement from "react";
import React from "react"
interface ButtonProps{
    variant: "primary" | "secondary" | "tertiary"
    size: "sm" | "md" | "lg"; 
    text: string;
    startIcon?: React.ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}
 
const variants = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-300 text-purple-500 ",
    tertiary: "bg-purple-600 text-white ml-17" 
}

    const defaultStyles = "px-4 py-2 rounded-md font-weight flex items-center cursor-pointer";
        const sizeStyles = {
   sm: "",
   md: "",
   lg: ""
}
  
export function Button (props: ButtonProps) {
  return <button onClick={props.onClick} className={   `${variants[props.variant]} ${sizeStyles[props.size]}
   ${defaultStyles} ${props.fullWidth ? "w-full" : ""} ${props.loading? " disabled opacity-45" : ""}`}>
       {props.startIcon} 
       <div className="ml-2">
       {props.text}     
       </div>   
        </button>
}

