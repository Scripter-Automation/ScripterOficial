import React from 'react'
import Regular from './Tipos/Regular'
import Comentarios from './Utils/Comentarios'

export default function Post(
  {
    ArticuloID, NegocioID, File_url,
    Texto, Tipo, Titulo, ProductoID,
    UserID, id, inserted_at, updated_at,
    
  }
  :Publicacion) {
  return (
    <div className='w-full md:w-3/4 p-2 bg-gray-100 border-2 rounded-lg mb-5'>
      {Tipo === "POST" && <Regular
        id={id}
        NegocioID={NegocioID}
        UserID={UserID}
        Titulo={Titulo}
        Texto={Texto}
        inserted_at={inserted_at}
        updated_at={updated_at}
      ></Regular>}
      <Comentarios></Comentarios>
    </div>
  )
}
