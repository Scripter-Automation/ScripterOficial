import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_FEED } from '../../graphql/Client/Queries'
import Post from './Post'

export default function Feed() {

    const {data: PublicacionList, error, loading } = useQuery(GET_FEED)

    if(loading) return <>Loading...</>
    if(error) return <>error</>
    console.log(PublicacionList.getPublicacionList)

  return (
    <div className='flex flex-col items-center justify-center w-full py-5'>

        {PublicacionList.getPublicacionList.map((post:Publicacion)=>{
            return(<Post 
                id={post?.id}
                ArticuloID={post?.ArticuloID}
                NegocioID={post?.NegocioID}
                ProductoID={post?.ProductoID}
                UserID={post?.UserID}
                File_url={post?.File_url}
                Texto={post?.Texto}
                Tipo={post?.Tipo}
                Titulo={post?.Titulo}
                inserted_at={post.inserted_at}
                updated_at={post.updated_at}
                Usuario={post.Usuario}
            ></Post>)
        })}
        

    </div>
  )
}
