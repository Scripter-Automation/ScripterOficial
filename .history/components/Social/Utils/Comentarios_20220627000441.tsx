import { ChatAltIcon, CheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { useSession } from '../../../utils/useSession'
import Avatar from '../../reciclables/Avatar'
import { Button, Input } from '../../reciclables/Forms'
import { Text } from '../../reciclables/Typography'
import Comentario from './Comentario'
import Replay from './Replay'

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
          type="submit"
          text='Enviar'
          className='rounded-full mx-2 w-1/6 bg-blue-500'
          
        />
      </form>
      <div className='bg-white rounded border-2 mt-3'>
        <Comentario></Comentario>
      </div>
    </div>
  )
}
