import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import React from "react" 
import { CurrentSession, useSession } from '../utils/useSession'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const {sessionProvider} = useSession()
  const [session, setSession] = React.useState<any>(undefined)
  const router = useRouter()

  if(session !== undefined){
    router.push("/Market")
  }

  React.useEffect(()=>{
    setSession(sessionProvider)
  },[sessionProvider])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
     {session?.user?.email}
    </div>
  )
}

export default Home
