import { ApiError, Session } from "@supabase/supabase-js"
import React, { useContext, createContext, useMemo } from "react"
import { logout, signin, signup, supabase } from "./supabaseClient"
import client from "../apollo-client"
import {CheckUserExist, GET_USERS_NEGOCIO} from "../graphql/Client/Queries"
import { useQuery } from "@apollo/client"
import { parseString } from "./others"

type LocalSession = string | Session | null | undefined | ApiError
type SessionData = {
    session?: LocalSession
    LogIn?: (email:string, password:string) =>void;
    SignUp?: (email:string, password:string) =>void;
    LogOut?: (email:string, password:string) =>void;

} | undefined

export const CurrentSession = React.createContext<any>(undefined)


type Props ={
    children: JSX.Element[]
}

export function SessionProvider({children}: Props){

    const [sessionProvider, setSession] = React.useState(supabase.auth.session())
    const {data, refetch} = useQuery(CheckUserExist,{
        variables:{
            email:""
          }
    })
    
    const {data:UsersNegocio , refetch: UsersNegocioRefetch} = useQuery(GET_USERS_NEGOCIO,{
        variables:{
            id: sessionProvider?.user?.id
        }
    })

    console.log("UserNegocio",UsersNegocio)
    
    
    React.useEffect(() => {
        
        supabase.auth.onAuthStateChange(() =>{
            setSession(supabase.auth.session())
        })
        
        
    }, [])
    
    React.useMemo(()=>{

        UsersNegocioRefetch({id: sessionProvider?.user?.id})
        const array = parseString(UsersNegocio?.getUsersNegocio.UserIDArray)
        console.log("Parsed string", array)
      
    },[sessionProvider])

    async function LogIn(email: string, password:string){
            const data =  await signin(email , password)

            if(!data.error){
                setSession(data.session)

            }else{
                console.log(data.error)
            }

            return data
    }
    async function SignUp(email: string, password:string){
        const data =  await signup(email , password)
        

        if(!data.error){
        setSession(data.session)
        }
        return data
    }
    async function LogOut(){
        const data =  await logout()

        if(data === null){
            console.log(data)
            setSession(null)
        }else(
            alert(data)
        )

        return data
    }
    async function CheckUser(email:string){

        const data = await refetch({email:email})

        console.log(data)
        
        return data
    }

    const exposed = {
        sessionProvider,
        LogIn,
        SignUp,
        LogOut,
        CheckUser,
        UsersNegocio
    }

    return(
        <CurrentSession.Provider value={exposed}>
                    {children.map(children=> {return children})}   
        </CurrentSession.Provider>
    )
}

// Hooks

export function useSession(){

    return useContext(CurrentSession)
}
