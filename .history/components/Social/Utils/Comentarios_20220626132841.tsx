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
        <div className='p-2 bg-green-400 w-2/5 rounded-2xl m-2 '>
          <div className='flex justify-around'>
            <Avatar large={false}></Avatar>
            <Text className='ml-2 bg-white rounded w-10/12 px-2' >hello</Text>
          </div>
          <div className='bg-white rounded m-1 ml-2 w-1/2'>
            <Button 
              text="Replay"
              color=''
              type='button'
              width='1/2'
              className='bg-transparent hover:bg-gray-100 text-gray-500 p-1 text-sm'
            />
            <Button 
              text="Like"
              color=''
              type='button'
              width='1/2'
              className='bg-transparent hover:bg-gray-100 text-gray-500 p-1 text-sm'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
