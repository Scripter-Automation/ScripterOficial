import React from 'react'
import Auth from '../../components/Authentication/Auth'
import NewUser from '../../components/Authentication/NewUser'

export default function Authentication() {

  const [newUser, setNewUser] = React.useState<boolean>(false)

  return (
    <>
    {
      !newUser ?
      <Auth setNewUser={setNewUser} open={true}></Auth>
      :
      <NewUser/>
    }
    </>
  )
}
