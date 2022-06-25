import React from 'react'
import { Title } from '../components/reciclables/Typography'
import PostBar from '../components/Social/PostBar'
import Feed from '../components/Social/Feed'

export default function Social() {
  return (
    <div className='flex h-full'>
    <div className='w-full lg:w-3/4'>
    <PostBar></PostBar>
    <Feed></Feed>
    </div>
    <div className='hidden lg:block lg:w-1/4 h-screen border-l-4'>
        <Title>Anunciate aqui</Title>
    </div>
    </div>
  )
}
