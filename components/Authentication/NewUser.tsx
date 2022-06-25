import React, { ReactNode } from 'react'
import Page0 from './NewUserForm/Page0'
import Page1 from './NewUserForm/Page1'
import Page2 from "./NewUserForm/Page2"
import Page3 from './NewUserForm/Page3'

export type NewUser = undefined | {
  Email: string
  Password: string
  UserID: string
  Username: string
  Nombre: string
  Apellido: string
  Avatar: string
  Cover: string
  Empleado: boolean
  Job: string
}

export default function NewUser():ReactNode {

  const [page, setPage] = React.useState<number>(0)
  const [data, setData] = React.useState<NewUser>({
    Email: "",
    Password: "",
    UserID: "",
    Username: "",
    Nombre: "",
    Apellido: "",
    Avatar: "",
    Cover: "",
    Empleado: false,
    Job: "USER",
  })


  return (
    <div className='flex justify-center mt-2'>
    {page === 0 && <Page0 data={data} setData={setData} setPage={setPage}/>}
    {page === 1 && <Page1 data={data} setData={setData} setPage={setPage}/>}
    {page === 2 && <Page2 data={data} setData={setData} setPage={setPage}/>}
    {page === 3 && <Page3 data={data} setData={setData} setPage={setPage}/>}
    </div>
  )
}
