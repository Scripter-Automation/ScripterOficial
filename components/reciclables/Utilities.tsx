import React from 'react'
import type { ReactNode } from 'react'

type Props ={
    children: ReactNode
    text:string
}

export default function HoverListItem({children, text}:Props) {
  return (
    <div className='relative'>
        <div 
        className='p-2 absolute bg-transparent text-transparent z-50 h-full w-full text-center  hover:bg-white hover:text-black rounded border-2 flex items-center justify-center'>
        {text}
        </div>
        {children}
    </div>
  )
}
