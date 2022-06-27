
import { type } from 'os'
import React, { ButtonHTMLAttributes, FormEvent, ReactNode } from 'react'
import {Text} from "./Typography"

type Input = {
    label?: string
    type: string
    placeholder: string
    onChange: (e:any) => void;
    options?: {
        required?: boolean
        maxLength?: number
        minLength?: number
    }
}

type Button = {
    text: string
    color: string
    width: string
    type: "button" | "reset" | "submit" | undefined
    onClick?: ()=>void;
    href?: string
    style?: object
    className?:string
    icon?: ReactNode
}

type Container={
    button?: ReactNode
    title?: ReactNode
    sectionLeft?: ReactNode
    sectionRight?: ReactNode
    sectionBottom?:ReactNode
    onSubmit: (e:any)=>void;
    variant?: string
    children?: ReactNode
}

type InputDate = {
  label: string
  className?: string
  onChange: (e:FormEvent)=>void
}

type InputSelect = {
  label: string
  className?: string
  onChange:(e:FormEvent)=>void
  placeholder: string
  children: ReactNode
}

type InputBoolean = {
  label?: string
  className?: string
  onChange:(e:boolean)=>void
  FalseText:string
  TrueText:string
}

type InfoHover = {
  icon: ReactNode
  children: ReactNode
}

export function ButtonLink({text, color, width, type, onClick, href, style, className}:Button) {
  return (
    <a style={{width:"auto"}} href={href}>
    <button
    style={style}
    onClick={onClick}
    type={type}
    className={`bg-${color}-500 hover:bg-${color}-600  rounded p-2 w-${width} text-white text-lg ${className}`}
    >{text}</button>
    </a>
    
  )
}

export function Button({text, color, width, type, onClick, style, className, icon}:Button) {
  return (
    <button
    style={style}
    onClick={onClick}
    type={type}
    className={`bg-${color}-500 hover:bg-${color}-600  rounded p-2 w-${width} text-white text-lg ${className}`}
    >
      {icon !== undefined ? 
        <div className='flex items-center justify-center'>
          <div className='w-2/5 sm:flex justify-center hidden'>{icon}</div>
          <div className='w-3/5 text-left'>{text}</div>
        </div>
        :
        <div>{text}</div>
      }
    </button>
    
  )
}




export function Input({label, type, placeholder, onChange, options}:Input) {

  if(label=== undefined){
    return(
    <input
    onChange={(e)=>onChange(e)}
    type={type}
    placeholder={placeholder}
    className='w-full border-2 rounded p-2 text-md'
    required={options?.required}
    maxLength={options?.maxLength}
    minLength={options?.minLength}
    ></input>
    )

  }

  return (
    <div className='p-1'>
    <label>{label}</label>
    <input
    onChange={(e)=>onChange(e)}
    type={type}
    placeholder={placeholder}
    className='w-full border-2 rounded p-2 text-md'
    required={options?.required}
    maxLength={options?.maxLength}
    minLength={options?.minLength}
    ></input>
    <p></p>
    </div>
  )
}





export function FormContainer({button, title, sectionLeft, sectionRight, onSubmit, variant, children, sectionBottom}:Container) {
  
  if(variant === "default" || variant === undefined){
  return (
    <form onSubmit={(e)=>onSubmit(e)} className='p-3  border-2 rounded w-fit  md:w-3/4 '>
        {title}
        <div className='flex flex-col sm:flex-row items-center'>
            <div className='w-full sm:w-1/2 p-5'>
                {sectionLeft}
            </div>
            <div className='w-full sm:w-1/2 sm:border-l-2 p-5'>
                {sectionRight}
                {button}
            </div>
        </div>
        {sectionBottom}
    </form>
  )
  }else if(variant === "Single"){
    return(
      <form onSubmit={(e)=>onSubmit(e)} className='p-3  border-2 rounded w-fit  md:w-3/4 '>
        {title}
        <div className='flex flex-col items-center'>
          {children}
        </div>

      </form>
    )
  }

  return null




}

export function InputDate({label, className, onChange}:InputDate){
  return(
    <div className='w-full flex flex-col p-1'>
      <label>{label}</label>
      <input 
      onChange={(e:FormEvent)=>{onChange(e)}}
      className={`${className} border-2 p-2 rounded`} 
      type="date"
      ></input>
    </div>
  )
}

export function InputSelect({label, className, onChange, children, placeholder}:InputSelect){
  return(
    <div className='w-full flex flex-col p-1'>
      <label>{label}</label>
      <select
       className={`${className} border-2 p-2 rounded`}
       onChange={(e:FormEvent)=>{onChange(e)}}
       >
        {children}
      </select>

    </div>
  )

}

export function InputBoolean({label, className, onChange, FalseText, TrueText}:InputBoolean){
  const [value, setValue] = React.useState<boolean>(false)
  const [side, setSide] = React.useState<string>("start")

  function handleChange(){
    setValue(!value)
    onChange(!value)
    if(!value === true){
      setSide("end")
    }else{
      setSide("start")
    }
  }
  

  return(
    <div className='w-full flex flex-col p-1'>
      <label>{label}</label>
      <div className='flex justify-evenly'>
        <Text>{FalseText}</Text>
          <div className={`m-2 border-4 border-gray-500 bg-gray-200 w-1/3 h-10 rounded-r-full rounded-l-full flex justify-${side}`}>
            <div 
            onClick={handleChange}
            className={`${className} w-3/5 rounded-full bg-blue-500 h-full hover:bg-blue-600`}
            ></div>
          </div>
        <Text>{TrueText}</Text>
      </div>
    </div>
  )
}

export function InfoButton({icon,children}:InfoHover){
  const [show, setShow] = React.useState<boolean>(false)

  function handleClick(){
    setShow(!show)
  }

  return(
    <div className='w-full flex p-1 py-1 items-center'>
      <div onClick={handleClick} className='w-1/5'>{icon}</div>
      {show && 
        <div className='w-4/5 rounded border-2 p-2 text-center'>
          {children}
        </div>
      }
    </div>
  )
}