import React from 'react'
import Avatar from '../../reciclables/Avatar'
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
        <div className='p-2 bg-green-400 w-2/5 rounded-2xl m-2 flex justify-around'>
          <Avatar large={false}></Avatar>
          <Text className='ml-2 bg-white rounded w-11/12' >hello</Text>
        </div>
      </div>
    </div>
  )
}
