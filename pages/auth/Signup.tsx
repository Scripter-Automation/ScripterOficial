import { Session } from '@supabase/supabase-js'
import React from 'react'
import {useSession } from '../../utils/useSession'
import { Mysession, signin, signup } from '../../utils/supabaseClient'

export default function Signup() {

    type AuthData = {
        email: string
        password:string
    }
    

    const [data, setData] = React.useState<AuthData>({email:"", password:""})
    const [dataSignIn, setDataSignIn] = React.useState<AuthData>({email:"", password:""})

    const {session, LogIn, SignUp, SignOut} = useSession()
  

    async function onSubmit(e: React.FormEvent<HTMLFormElement> , email:string, password:string){
        e.preventDefault()
       SignUp(email,password)

    }

    async function SignIn(e: React.FormEvent<HTMLFormElement> , email:string, password:string){
        e.preventDefault()
        LogIn(email, password)

    }

    async function checkSession(e: React.FormEvent) {
        e.preventDefault()
        alert(session?.user?.email)
    }

  return (
    <>
    <form onSubmit={(e)=>onSubmit(e ,data?.email , data?.password)}>
        <input type="text" onChange={(e)=>setData({...data, email:e.target.value})} placeholder="email"></input>
        <input type="password" onChange={(e)=>setData({...data, password:e.target.value})} placeholder="password"></input>
        <button type='submit'>Submit</button>
    </form>

    <form onSubmit={(e)=>checkSession(e)}>
        <button>check session</button>
        <div>{session?.user?.email}</div>
    </form>

    <form onSubmit={(e)=>SignIn(e ,data?.email , data?.password)}>
        <input type="text" onChange={(e)=>setDataSignIn({...dataSignIn, email:e.target.value})} placeholder="email"></input>
        <input type="password" onChange={(e)=>setDataSignIn({...dataSignIn, password:e.target.value})} placeholder="password"></input>
        <button type='submit'>Submit</button>
    </form>
    </>

    
  )
}
