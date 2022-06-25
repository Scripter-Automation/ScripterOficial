import React from 'react'
import {BriefcaseIcon, ChatAltIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import Avatar from '../reciclables/Avatar'
import NavMenu from './NavMenu'
import {useSession} from "../../utils/useSession"
import {Text} from "../reciclables/Typography"
import { useRouter } from 'next/router'

type Props = {
    menu: boolean
    setMenu: (e:boolean)=>void
}

export default function NavBar({menu, setMenu}:Props) {

    const {sessionProvider} = useSession()
    const [session, setSession] = React.useState()
    

    React.useEffect(()=>{
        setSession(sessionProvider)
    })

    function openMenu(){
      setMenu(!menu)

    }

  return (
    <div className='w-full sticky top-0 z-50 bg-blue-500 flex items-center'>
       {session ? 
        <a onClick={openMenu}>
          <img src="/Logo_White.png" className='w-28 p-2'></img>
        </a>
      :
        <a href='/'>
        <img src="/Logo_White.png" className='w-28 p-2'></img>
        </a>
      } 
       
       
        {session ?
        <div className='hidden sm:flex justify-evenly w-full'>
        <input placeholder='Buscar' className='flex-1 outline-none rounded border-2 h-10 hidden md:block' type="search"></input>
        <div className='md:hidden block w-4/6'></div>
        <BriefcaseIcon className='icon'></BriefcaseIcon>
        <ChatAltIcon className='icon'></ChatAltIcon>
        <ShoppingCartIcon className='icon'></ShoppingCartIcon>
        <NavMenu></NavMenu>
        </div>
        :
        <div className='justify-self-end w-full'>
          <a href="/">
          <Text className='text-white text-right p-2'>Inicio</Text>
          </a>
        </div>
        }


    </div>
  )
}
