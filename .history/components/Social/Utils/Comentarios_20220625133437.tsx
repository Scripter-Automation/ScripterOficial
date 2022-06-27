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
          width='2/6'
          type="submit"
          text='Enviar'
          color='blue'
          className='rounded-full mx-2'
        />
      </form>
    </div>
  )
}
