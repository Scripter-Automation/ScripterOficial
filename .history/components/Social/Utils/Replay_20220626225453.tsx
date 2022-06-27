import React from 'react'
import Avatar from '../../reciclables/Avatar'
import { Text } from '../../reciclables/Typography'

export default function Replay() {
  return (
    <div className='bg-white rounded flex m-2 border-2 px-2'>
        <Avatar large={false}></Avatar> <Text>Hello world</Text>
    </div>
  )
}
