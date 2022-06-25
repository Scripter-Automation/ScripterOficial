import { CogIcon, LogoutIcon } from '@heroicons/react/outline'
import React from 'react'
import { useSession } from '../../utils/useSession'
import Avatar from '../reciclables/Avatar'
import Item from './Item'
import FaceIcon from '@mui/icons-material/Face';

export default function NavMenu() {

    const [open, setopen] = React.useState(false)

    const {LogOut} = useSession()

    var display:string

    if (open){
        display = "block"
    }else{
        display = "hidden"
    }

  return (
    <div className='relative'>
        <div onClick={()=>setopen(!open)}>
        <Avatar large={false}></Avatar>
        </div>
        
        <div className={`w-64 px-2 absolute -right-2 top-12 ${display} bg-blue-500 rounded`}>
            <Item color="gray" onClick={()=>{}} icon={<Avatar large={false}></Avatar>}>Perfil</Item>
            <Item color='gray' onClick={()=>{}} icon={<CogIcon className='icon text-gray-500'></CogIcon>}>Configuraciones</Item>
            <Item color="red" icon={<LogoutIcon className='icon text-red-500'></LogoutIcon>} onClick={LogOut}>Cerrar Sesión</Item>
        </div>
    </div>
  )
}
