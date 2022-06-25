import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { signin, signup, logout } from "./supabaseClient"

type Props = {
    children: JSX.Element
}

const Context = createContext<any>(undefined);

export default function UserProvider({children}:Props){

    const [user, setUser] = useState<any>(supabase.auth.user)

    useEffect(() => {
      
        supabase.auth.onAuthStateChange(() =>{
            setUser(supabase.auth.user)
        })
    

    }, [])

    async function LogIn(email: string, password:string){
        const data =  await signin(email , password)
        setUser(data)
    }
    async function SignUp(email: string, password:string){
        const data =  await signup(email , password)
        setUser(data)
    }
    async function LogOut(email: string, password:string){
        const data =  await logout()
        if(data === null){
            setUser(data)
        }else(
            alert(data)
        )
    }
    
    const exposed = {
        user,

    }

    return (
        <Context.Provider value={exposed}>
            {children}
        </Context.Provider>
    )

}

export const useUser = () => useContext(Context)