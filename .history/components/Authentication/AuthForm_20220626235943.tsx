import { useRouter } from 'next/router'
import React, { FormEvent } from 'react'
import { useSession } from '../../utils/useSession'
import {Button, Input} from '../reciclables/Forms'
import Link from "next/link"
import {Text} from "../reciclables/Typography"


type options = boolean | undefined
type Props ={
    state:options

}
type UserData = {
    email: string
    password: string
}

export default function AuthForm({state}:Props) {

    const router = useRouter()
    const show = state !== undefined && state !== false
    const [userData, setUserData] = React.useState<UserData>({
        email:"",
        password:""
    })
    const {LogIn, session} = useSession()
    const [error, setError] = React.useState<string>()

    async function handleSubmit(e:FormEvent){
        e.preventDefault()
        const result = await LogIn(userData.email, userData.password)
        
        console.log(result)

        if(result.error){
           setError("Correo ó Contraseña incorrecta") 
 
        }else if(!result.error){
            router.push("/")
        }
    }
    

  return (
    <>
    {show &&
        <form onSubmit={(e)=>handleSubmit(e)} className='w-full space-y-2'>
            <Input
                label="Nombre de Usuario" 
                type="text" 
                placeholder='Ingrese su Correo Electronico'
                onChange={(e)=>setUserData({...userData, email: e?.target?.value})}
            />
            <Input 
            label="Contraseña" 
            type="password" 
            placeholder='Ingrese su Contraseña'
            onChange={(e)=>setUserData({...userData, password: e?.target?.value})}
            ></Input>
            <Link href="/Market">
                <a>
                <Text className='text-center text-gray-400 cursor-pointer hover:text-gray-700'>Olvide mi contraseña</Text>
                </a>
            </Link>
            {error !== undefined && <p className='text-lg self-center text-center text-red-500'>{error}</p>}
            <Button 
            className='bg-green-500 w-full py-3 text-xl'
            style={{marginTop: "10px"}} 
            type='submit' 
            text="Iniciar Sessión"
            />
        </form>
    }
    </>
  )
}

