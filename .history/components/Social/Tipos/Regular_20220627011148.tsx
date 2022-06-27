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
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/4 flex justify-evenly'>
            <FeedAvatar url={avatar_url} large></FeedAvatar>
            <div className='bg-gray-100  border-4  p-2 rounded'>
              <Text>@{username}</Text>
              <Text>{nombre} {apellido}</Text>
            </div>
          </div>
          <Title className='w-full md:w-3/4' >{Titulo}</Title>
        </div>
        <Text className='text-left'>{Texto}</Text>
    </div>
  )
}