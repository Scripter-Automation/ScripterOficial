import React, { ReactNode } from 'react'
import Avatar, { FeedAvatar } from '../../reciclables/Avatar'
import {Title, Text} from "../../reciclables/Typography"




export default function Regular({
    id, UserID, NegocioID, Texto, Titulo, 
     inserted_at, updated_at, avatar_url,
     username, nombre, apellido
}:RegularPost) {

  return (
    <div className='bg-white rounded border-2 p-2 mb-2' key={id}>
        <div className='flex justify-evenly'>
          <div>
            <FeedAvatar url={""} large></FeedAvatar>
          </div>
          <Title>{Titulo}</Title>
        </div>
        <Text className='text-left'>{Texto}</Text>
    </div>
  )
}