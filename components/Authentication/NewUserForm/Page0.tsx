import React from 'react'
import toast from 'react-hot-toast'
import { useSession } from '../../../utils/useSession'
import {Input, FormContainer, Button} from '../../reciclables/Forms'
import {Title, Text} from '../../reciclables/Typography'
import type {NewUser} from "../NewUser"

type Props = {
    data: NewUser
    setData: (e:any)=>void;
    setPage: (e:any)=>void;
}

export default function Page0({data, setData, setPage}:Props) {

    const {SignUp, CheckUser} = useSession()
    const [error, setError] = React.useState<string | undefined>(undefined)

    async function handleSubmit(e:any){

        const userExist = await CheckUser(e.email)

        if(userExist?.data?.getUserByEmail){
            setError("Ya existe un usuario con este correo")
        }else{
            const newUser = await SignUp(e.email, e.password)
            
            if(newUser.error){
             toast.error(newUser.error)
            }else{
             toast.success("Tu cuenta ha sido creada exitosamente")
             setPage(1)
     
            }

        }




       
    }

  return (
    <FormContainer
        onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit({email:data?.Email, password:data?.Password})
        }}

        title={<Title>Es un gusto conocerte</Title>}
        sectionLeft={ 
            <Text>
                Scripter tiene tu crecimiento en mente, aprovecha nuestros recursos para asi administrar tu negocio ó aprovecha nuestra biblioteca 
                de negocios para realizar compras seguras de empresas legitimas y verificadas
            </Text>
        }
        sectionRight={  
            <>
            <Input  type='text' placeholder='Ingrese su correo electronico'  label='Correo Electronico'
                onChange={(e)=>{setData({...data, Email: e.target.value})}}
            />
            <Input type='password' placeholder='Ingrese su contraseña' label='Contraseña'
                onChange={(e)=>{setData({...data, Password: e.target.value})}}
            ></Input>

            <Text className='text-red-500'>{error}</Text>
            </>
        }
        button={
            <Button 
                text='Crear Cuenta'
                color='blue'
                width='full'
                type='submit'
            
            />
        }

    />
  )
}
