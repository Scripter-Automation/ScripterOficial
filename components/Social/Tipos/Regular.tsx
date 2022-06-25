import React, { ReactNode } from 'react'
import {Title, Text} from "../../reciclables/Typography"




export default function Regular({
    id, UserID, NegocioID, Texto, Titulo, 
     inserted_at, updated_at
}:RegularPost) {

  return (
    <div key={id}>
        <Title>{Titulo}</Title>
        <Text className='text-left'>{Texto}</Text>
    </div>
  )
}