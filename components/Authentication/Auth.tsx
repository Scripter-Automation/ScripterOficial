import React from 'react'
import { useSession } from '../../utils/useSession'
import AuthForm from "./AuthForm"
import {Button} from "../reciclables/Forms"
import {supabase} from "../../utils/supabaseClient"
import { useRouter } from 'next/router'

type Props ={
  open: boolean
  DefaultAction?:options
  setNewUser: (set:boolean)=>void;
}
type options = boolean | undefined

export default function Auth({open, DefaultAction, setNewUser}:Props) {    

  const  {sessionProvider} = useSession()
  const [session, setSession] = React.useState<any>()
  const [error, setError] = React.useState<string | string[] | undefined>()
  const [opened, setOpened] = React.useState<boolean>(open)
  const [action, setAction] = React.useState<options>(undefined)
  const [title, setTitle] = React.useState<string>("Bienvenido")
  const [text, setText] = React.useState<string>("¿Es usted nuevo con nosotros ó ya tiene alguna cuenta existente?")
  const router = useRouter()


  React.useEffect(() => {

    setSession(sessionProvider)
    setOpened(open)
    setAction(DefaultAction)
    setError(router.query.msg)


  }, [])
  
  
  function handleNuevo(){

    setAction(false)
    setTitle("Crea tu cuenta")
    setText(`
    Nos alegra mucho tu interes en formar parte de nuestra comunidad.
    Scripter es una plataforma multiusos, el cual tiene en mente el bien 
    del usuario y de los negocios. Para comenzar a obtener estos beneficios
    gratuitos comience por crear su propia cuenta.     
    `)

  }

  function handleExistente(){

    setAction(true)
    setTitle("Iniciar Sessión")
    setText("En scripter, siempre tenemos su interes en mente.")

  }


  return (
    <>
    {opened &&
    <div className='flex justify-center'>
    {session === null || session === undefined ? 
    
      <div className='flex flex-col p-3  border-2 rounded w-fit  md:w-1/2  absolute  md:left-[25%] top-[10%] lg:w-1/4 lg:left-[37%] '>  
        
        <img src='/Logo_Original.png'  className='mb-5  self-center'></img>

        <h1 className='self-center text-[3em]'>{title}</h1>
        <p className='text-lg self-center text-center'>{text}</p>
        {error !== undefined && <p className='text-lg self-center text-center text-red-500'>{error}</p>}

        { action === undefined &&
        <div className='flex justify-around mt-5'>
          <button 
            onClick={handleNuevo}
            className='bg-green-500 hover:bg-green-600  rounded p-2 w-1/3 text-white text-lg'
            > 
            Nuevo
          </button>
          <button
            onClick={handleExistente}
            className='bg-blue-500 hover:bg-blue-600  rounded p-2 w-1/3 text-white text-lg'
           >
            Existente
          </button>
        </div>
        }
        {action === false && <button onClick={()=>{setNewUser(true)}} className="mt-5 bg-green-500 p-2 text-white text-lg">Crear Cuenta</button>}

        <AuthForm state={action}></AuthForm>
      </div>
      :
      <div className='flex flex-col p-3 text-center border-2 rounded w-1/2  absolute left-[25%] top-[10%] lg:w-1/4 lg:left-[37%]'>
        <h1 className='self-center text-[3em] mb-5'>Usted ya inicio su session</h1>
        <Button width='full' href='/' type={undefined} onClick={()=>setOpened(false)} color="green" text="Continuar"></Button>
      </div>
    }
    </div>
    
    }
  </>
  )
}

