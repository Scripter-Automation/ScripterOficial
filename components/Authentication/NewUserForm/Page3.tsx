import { useRouter } from 'next/router';
import React, { FormEvent } from 'react'
import { useSession } from '../../../utils/useSession';
import { Button, ButtonLink, FormContainer } from '../../reciclables/Forms';
import { Title, Text } from '../../reciclables/Typography';
import type {NewUser} from  "../NewUser"

type Props = {
    data: NewUser
    setData: (e:any)=>void;
    setPage: (e:any)=>void;
}


export default function Page3({data, setData, setPage}:Props) {
 
    const router = useRouter()
    const {LogIn} = useSession()

    function handelSubmit(e:FormEvent){
        e.preventDefault()
        LogIn(data?.Email,data?.Password)
        router.push("/Market")
    }

    return (
    <FormContainer
        onSubmit={(e)=>{handelSubmit(e)}}
        title={
            <Title>Siguientes Pasos</Title>
        }
        sectionLeft={
            <>
                <Title className='text-2xl'>Crear un Negocio</Title>
                <div className='flex w-full justify-center'>
                    <img src="/MiNegocioLogo.png" className='w-2/3'></img>
                </div>
                <Text className='text-sm m-1 text-center'>
                    Administra tus recursos con nuestras herramientas gratuitas.
                    Agrega tu personal a tu negocio para darles acceso y define su roll para
                    dar derechos de editor o limitar esos derechos
                </Text>
                <ButtonLink
                 text='Crear Ahora' color='green' width='full'
                 type='button'
                 href='/'
                 ></ButtonLink>
            </>
        }
        sectionRight={
            <>
                <Title className='text-2xl'>Definir Intereses</Title>
                <div className='flex w-full justify-center mt-4 lg:mt-6'>
                    <img src="/MisInteresesLogo.png" className='w-1/2'></img>
                </div>
                <Text className='text-sm m-1 text-center'>
                    ¿Tienes temas que te interesan ó amigos en la plataforma? Para poder
                    personalizar tu experiencia, buscamos ofrecer el contenido ó
                    servicios y productos que esten diseñados para ti.
                </Text>
                <ButtonLink
                 text='Crear Ahora' color='green' width='full'
                 type='button'
                 href='/'
                 ></ButtonLink>
            </>
        }
        sectionBottom={
            <div className='flex justify-center'>
            <Button
            
             className='mt-2 ml-5 mr-5'
             text='Saltar'
             color='blue'
             type='submit'
             width='full'
             ></Button>
            </div>
        }
    ></FormContainer>
  )
}
