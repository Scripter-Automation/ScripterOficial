import { InformationCircleIcon } from '@heroicons/react/outline';
import React, { FormEvent } from 'react'
import Avatar from '../../reciclables/Avatar';
import { Button, FormContainer, InfoButton, Input, InputBoolean, InputDate, InputSelect } from '../../reciclables/Forms';
import { Title, Text } from '../../reciclables/Typography';
import type {NewUser} from  "../NewUser"


type Props = {
    data: NewUser
    setData: (e:any)=>void;
    setPage: (e:any)=>void;
}

export default function Page2({data, setData, setPage}:Props) {

    function handleSubmit(e:FormEvent){
        e.preventDefault()
        setPage(3)

    }

  return (
    <FormContainer
        onSubmit={(e:FormEvent)=>{handleSubmit(e)}}
        title={<Title>Crea tu Perfil</Title>}
        sectionLeft={
            <>
            <InfoButton icon={<InformationCircleIcon className='icon text-blue-500 hover:text-blue-500'></InformationCircleIcon>}>
                Recolectamos esta información con el proposito de mejorar tu experiencia
            </InfoButton>
            <Title className='text-2xl' >Seleccióna tu imagen de perfil</Title>
            <div className='flex justify-center'><Avatar large={true}></Avatar></div>
            <Button 
            onClick={()=>{}} 
            text="Subir Imagen" 
            type='button'
            ></Button>
            <Text className=' text-center text-sm text-gray-500'>Solo esta permitido archivos jpg y png</Text>
            <InputBoolean
             label='¿Perfil Privado?'
             onChange={(e:boolean)=>{}}
             FalseText="Privado"
             TrueText='Publico'
            />
            <Text className='text-sm text-center text-gray-500'>
                Un perfil privado solo podra ser visto por amigos, pero puedes ajustar tu privacidad en las configuraciones
            </Text>
            </>
        }

        sectionRight={
            <>
                <Input
                onChange={(e:FormEvent)=>{}}
                label='Nombre'
                placeholder='Ingrese su Nombre'
                type="text"
                />
                <Input
                onChange={(e:FormEvent)=>{}}
                label='Apellidos'
                placeholder='Ingrese sus Apellidos'
                type="text"
                />
                <Input
                onChange={(e:FormEvent)=>{}}
                label='Username'
                placeholder='Ingrese su Username'
                type="text"
                />
                <InputDate 
                    label='Fecha de Nacimiento'
                    onChange={(e:FormEvent)=>{}}
                />
                <InputSelect
                    label='Genero'
                    onChange={(e)=>{}}
                    placeholder="Ingrese su genero"

                >
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Otro">Otro</option>
                </InputSelect>
                
            </>
        }

        button={<Button type="submit" text='Continuar'/>}
        
    />


  )
}
