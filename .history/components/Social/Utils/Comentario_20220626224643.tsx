import React from 'react'

export default function Comentario() {
  return (
    <div className='p-2 bg-green-400 w-2/3 2xl:w-2/5 rounded-2xl m-2 '>
          <div className='flex justify-around'>
            <Avatar large={false}></Avatar>

            <Text className='ml-2 bg-white rounded w-10/12 px-2' >hello</Text>
          </div>
          <div className= 'rounded m-1 ml-2 w-1/2 h-fit'>
            <Button 
              text="Replay"
              color=''
              type='button'
              width='1/2'
              className='bg-white hover:bg-gray-100 text-gray-500 p-0 m-0 text-sm'
              icon={<ChatAltIcon className='icon text-blue-500 text-sm'></ChatAltIcon>}
            />
            <Button 
              text="Like"
              color=''
              type='button'
              width='1/2'
              className='bg-white hover:bg-gray-100 text-gray-500 p-0 m-0 text-sm'
              icon={<CheckIcon className='icon text-blue-500 text-sm'></CheckIcon>}
              count={15}
            />
          </div>
            {showReplay &&
             <div>
              <Replay/>

              </div>
            }   
        </div>
  )
}
