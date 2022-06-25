import React from 'react'

type Props ={
    icon: JSX.Element
    onClick: ()=>void;
    children: string
    color: string
}

export default function Item({icon, onClick, children, color}:Props) {
  return (
    <div onClick={onClick} className='p-4 w-full flex items-center space-x-2 bg-white rounded border-cyan-300 my-1 hover:bg-gray-100'>
        {icon}
        <p className={`text-${color}-500 text-lg`}>{children}</p>
    </div>
  )
}
