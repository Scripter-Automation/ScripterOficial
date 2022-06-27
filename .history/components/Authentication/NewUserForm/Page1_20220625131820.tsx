import { BriefcaseIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/solid';
import React, { FormEvent } from 'react'
import { Button, FormContainer } from '../../reciclables/Forms';
import { List, ListItem } from '../../reciclables/Lists';
import { Title, Text } from '../../reciclables/Typography';
import type {NewUser} from "../NewUser"

type Props = {
    data: NewUser
    setData: (e:any)=>void;
    setPage: (e:any)=>void;
}

export default function Page1({data, setData, setPage}:Props) {

    function handleSubmit(e:FormEvent){

    }

    return (
        <FormContainer
        onSubmit={(e)=>{handleSubmit(e)}}
        variant='Single'
        title={<Title>Bienvenido a Scripter</Title>}
        >
        <Text className='text-center'>
            Es un placer tener a un nuevo usuario, pero antes de que puedas comenzar a usar nuestra plataforma,
            Pero antes de que puedas ingresar, tenemos acompletar algunos pasos. Comience por verificar su correo,
            al inscribirse, automaticamente recibe un correo con una liga para verificarse. Despues de eso, haga click en el boton de abajo
        </Text>
        <List>
            <ListItem Icon={<CheckCircleIcon className='icon text-green-500'></CheckCircleIcon>} Hover={true} text="El correo que ingreso anteriormente recibio un correo para confirmar su cuenta, esto es obligatorio antes de continuar">Verificar tu correo</ListItem>
            <ListItem Icon={<InformationCircleIcon className='icon text-green-500'></InformationCircleIcon>} Hover={true} text="Este paso consiste de llenar información acerca de ti para así poder brindarte una mejor experiencia">Crear tu perfil</ListItem>
            <ListItem Icon={<BriefcaseIcon className='icon text-green-500'></BriefcaseIcon>} Hover={true} text="Pensamos en todos nuestros clientes, tanto compradores como emprendedores, aqui hay beneficios para todos">Crear tu negocio (opcional)</ListItem>
        </List>
        <Button onClick={()=>setPage(2)} text='Continuar' type='button' color='blue' width='full md:w-1/3'/>


        </FormContainer>
  )
}
