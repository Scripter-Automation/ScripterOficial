import { useMutation } from '@apollo/client'
import { MusicNoteIcon } from '@heroicons/react/outline'
import { CameraIcon, PencilIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React, { FormEvent } from 'react'
import { CREATE_POST } from '../../graphql/Client/Mutations'
import { useSession } from '../../utils/useSession'
import { Button, Input } from '../reciclables/Forms'



export default function PostBar() {

    const [createPost] = useMutation(CREATE_POST)
    const {sessionProvider} = useSession()
    const [data , setData] = React.useState<PostData>({
        Titulo: undefined,
        Cuerpo: undefined,
        Url: undefined,
        Tipo: undefined

    })

    async function handelSubmit(e:FormEvent){
        e.preventDefault()
        if(data.Tipo === undefined){
            setData({...data, Tipo:"POST"})
        }
        console.log(data)
        try {
            const {data: Publicacion, errors} = await createPost({
                variables:{
                    Titulo: data?.Titulo,
                    Texto: data?.Cuerpo,
                    Tipo: data?.Tipo,
                    UserID: sessionProvider?.user?.id
                }
            })
            if(errors){
                throw(errors)
            }
            
        } catch (error) {

            console.log(error)
            
        }
    }

  return (
    <form onSubmit={(e)=>handelSubmit(e)} className='flex justify-center w-full pt-10'>
        <div className='w-full md:w-3/4 p-2 bg-gray-100 border-2 rounded-lg'>
            <Input 
             onChange={(e)=>{setData({...data, Titulo:e?.target?.value})}}
             type="text"
             placeholder='¿Que nos quieres contar?'
             ></Input>
             <br></br>
            {  data.Titulo &&
                <Input
                onChange={(e)=>{setData({...data, Cuerpo: e?.target?.value})}}
                type="text"
                placeholder='Escribe el cuerpo de tu publicación'
            ></Input>
            }
            <div className='mt-1 flex justify-end space-x-2'>
                <Button 
                    type='button'
                    text="Editor"
                    onClick={()=>{}}
                    className='justify-self-start rounded bg-transparent hover:bg-gray-300 text-black'
                    icon={<PencilIcon className='icon text-blue-500'></PencilIcon>}

                />
                <Button 
                    type='button'
                    text="Musica"
                    onClick={()=>{}}
                    className='justify-self-start rounded bg-transparent hover:bg-gray-300 text-black'
                    icon={<MusicNoteIcon className='icon text-blue-500'></MusicNoteIcon>}
                />
                <Button 
                    type='button'
                    text="Photo"
                    onClick={()=>{}}
                    className='rounded bg-transparent hover:bg-gray-300 text-black'
                    icon={<CameraIcon className='icon text-blue-500'></CameraIcon>}

                />
                <Button 
                    type='button'
                    text="Video"
                    className='rounded bg-transparent hover:bg-gray-300 text-black'
                    onClick={()=>{}}
                    icon={<VideoCameraIcon className='icon text-blue-500'></VideoCameraIcon>}

                />
                <Button
                    className='rounded-full'
                    type='submit'
                    text='Publicar'
                />
            </div>
        </div>

    </form>
  )
}
