import React from 'react'
import { Button, Input } from '../../reciclables/Forms'

export default function Comentarios() {
  return (
    <div>
      <form>
        <Input 
          type='text'
          onChange={()=>{}}
          placeholder="Comenta tu opinion"
        />
        <Button
          text='Enviar'
        />
      </form>
    </div>
  )
}
