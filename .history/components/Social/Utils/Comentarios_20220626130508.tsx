import React from 'react'
import { Button, Input } from '../../reciclables/Forms'
import { Text } from '../../reciclables/Typography'

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
          width=''
          type="submit"
          text='Enviar'
          color='blue'
          className='rounded-full mx-2 w-1/6'
        />
      </form>
      <div className='bg-white rounded border-2 mt-3'>
        <Text className='p-2 bg-green-300 w-1/2 rounded m-2'>hello</Text>
      </div>
    </div>
  )
}
