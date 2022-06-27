import React from 'react'
import { Button, Input } from '../../reciclables/Forms'

export default function Comentarios() {
  return (
    <div>
      <form className='flex'>
        <Input 
          type='text'
          onChange={()=>{}}
          placeholder="Comenta tu opinion"
        />
        <Button
          text='Enviar'
          color='blue'
          className='rounded-full'
        />
      </form>
    </div>
  )
}
