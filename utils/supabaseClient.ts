import { createClient } from '@supabase/supabase-js'

const supabaseUrl : string = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey : string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const signup = async (email:string, password:string) =>{
    const {user, session, error} = await supabase.auth.signUp({
        email: email,
        password: password
    })

    if(error){
        return {user:null ,session: null, error:error.message}
    }else{
        return {user:user, session: session, error: null}
    }

}

export const Mysession = async () =>{
    return await supabase.auth.session()
}

export const signin = async (email:string, password:string) =>{
    const {user, session, error} = await supabase.auth.signIn({
        email: email,
        password: password
    })

    if(error){
        return {session:null, error: error}
    }else{
        return {session:session, error: null}
    }

}

export const logout = async () =>{
    const { error } = await supabase.auth.signOut()
    if(error){
        return error.message
    }else return null
}
