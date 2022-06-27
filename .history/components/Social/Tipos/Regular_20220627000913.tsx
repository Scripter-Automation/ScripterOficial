import React, { ReactNode } from 'react'
import {Title, Text} from "../../reciclables/Typography"




export default function Regular({
    id, UserID, NegocioID, Texto, Titulo, 
     inserted_at, updated_at
}:RegularPost) {

  return (
    <div className='bg-gray-50 rounded border-2 p-2' key={id}>
        <Title>{Titulo}</Title>
        <Text className='text-left'>{Texto}</Text>
    </div>
  )
}