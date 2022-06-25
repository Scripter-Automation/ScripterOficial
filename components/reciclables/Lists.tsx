import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { ReactNode } from 'react'
import HoverListItem from './Utilities'

type List = {
    children: ReactNode
}

type CostumList = {
    children: ReactNode
    className: string
}

type ListItem = {
    children: ReactNode
    Icon: ReactNode
    Hover: boolean
    text?:string
    className?:string
    variant?: string
    options?: ReactNode
}

type Option = {
    icon: ReactNode
    children: ReactNode
}

export function List({children}:List) {
  return (
    <div className='border-2 w-2/3 md:w-1/2 lg:w-1/3 rounded m-2 p-2'>
        {children}
    </div>
  )
}
export function CostumList({children, className}:CostumList) {
    return (
      <div className={` ${className}`}>
          {children}
      </div>
    )
  }

export function ListItem({children, Icon, Hover, text, className, variant, options}:ListItem){

    const [open, setOpen] = React.useState<boolean>(false)

    if(Hover && text !== undefined){
        return( 
        <HoverListItem text={text}>
            <div className='w-full flex justify-center p-2 items-center border-2 rounded my-2'>
                
                    <div className='w-1/4 p-2'>{Icon}</div>  <div className='w-3/4 border-l-2 p-2 pl-5'>{children}</div>
            </div>
        </HoverListItem>
           )
    }
    if(variant === "select"){
        return(
        <div
            className='p-2 border-2 rounded bg-white'
        >
            <div onClick={()=>setOpen(!open)} className={`w-full flex justify-center  items-center my-2 ${className}`}>
                <div className='w-1/4 p-2'>{Icon}</div>  
                <div className='w-3/4 border-l-2 p-2 pl-5'>{children}</div>
                <ChevronDownIcon className='icon text-blue-500'></ChevronDownIcon>
            </div>
            {open &&
                <div>
                    {options}
                </div>
            }   
        </div>
        )

    }

   return( 
    <div className={`w-full flex justify-center p-2 items-center border-2 rounded my-2 ${className}`}>
        <div className='w-1/4 p-2'>{Icon}</div>  <div className='w-3/4 border-l-2 p-2 pl-5'>{children}</div>
    </div>
   )
}

export function Option({icon, children}:Option){
    return(
        <div className='flex w-full h-10 p-1 border rounded items-center sidebarButton'>
            <div className='w-1/4 '>{icon}</div>
            <div className='w-3/4 border-l-2 text-sm pl-4'>{children}</div>
        </div>
    )
}
