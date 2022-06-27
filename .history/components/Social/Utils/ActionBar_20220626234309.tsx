import { ShareIcon } from '@heroicons/react/outline'
import { ChatAltIcon, CheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { Button } from "../../reciclables/Forms"

export default function ActionBar() {


//falta agregarle los counts

  return (
    <div className='rounded-l-full rounded-r-full bg-gray-50 border-2'>
        <Button
            text="Like"
            color=""
            type='button'
            className='bg-transparent hover:bg-gray-200 text-black rounded-l-full w-1/3 md:w-1/5'
            icon={<CheckIcon className='icon text-blue-500'></CheckIcon>}

        ></Button>
        <Button
            text="Comentarios"
            color=""
            type='button'
            className='bg-transparent hover:bg-gray-200 text-black rounded w-1/3 md:w-1/4 lg:w-1/5'
            icon={<ChatAltIcon className='icon text-blue-500'></ChatAltIcon>}

        ></Button>
        <Button
            text="Compartir"
            color=""
            type='button'
            className='bg-transparent hover:bg-gray-300 text-black rounded-r-full rounded w-1/3 md:w-1/4 lg:w-1/5'
            icon={<ShareIcon className='icon text-blue-500'></ShareIcon>}

        ></Button>

    </div>
  )
}
