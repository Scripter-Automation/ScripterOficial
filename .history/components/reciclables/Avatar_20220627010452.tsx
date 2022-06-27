import React from 'react'

type Props = {
    large: boolean
}
type FeedAvatar = {
  url?: string
  large: boolean
}

export default function Avatar({large}:Props) {
  return (
    <div className={`flex items-center overflow-hidden relative h-10 w-10 rounded-full border-gray-300 bg-white ${large && `h-20 w-20`}`}>
        <img src='/Logo_Original.png' className=''></img>
    </div>
  )
}

export function FeedAvatar({url, large}:FeedAvatar){
  return(
    <div className={`flex items-center overflow-hidden  h-10 w-10 rounded-full border-gray-300 bg-white ${large && `h-20 w-20`}`}>
      <img src={url} className=''></img>
    </div>  
  )
}