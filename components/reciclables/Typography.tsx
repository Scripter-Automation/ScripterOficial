
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string
    style?: object
}

export function Text({children, className, style}:Props) {
  return (
    <p style={style} className={`text-lg self-center ${className}`}>{children}</p>
  )
}

export function Title({children, className, style}:Props) {
    return (
      <h1 style={style} className={`self-center text-center text-[3em] ${className}`}>{children}</h1>
    )
  }