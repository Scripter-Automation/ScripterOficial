import { useRouter } from 'next/router'
import React from 'react'
import { useSession } from '../utils/useSession'

export default function Market() {

    const router = useRouter()
    const  {sessionProvider} = useSession()
    const [session, setSession] = React.useState()

    React.useEffect(()=>{
        setSession(sessionProvider)
        console.log(sessionProvider)


        if(!sessionProvider){
            router.push({
              pathname:  "/auth/Authentication",
              query: {msg: "Favor de iniciar sessión antes de usar nuestra plataforma"}
            })
        }
    }
    ,[sessionProvider])

    return (
        <div>

        </div>
    )
}

export async function getServerSideProps() {


    try{
        const Negocios = await fetch()
    }
    catch(error){

    }


    return {
      props: {}, // will be passed to the page component as props
    }
  }


