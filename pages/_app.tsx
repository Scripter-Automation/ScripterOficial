import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from '../utils/useSession'
import React from "react"
import NavBar from '../components/Navegation/NavBar'
import { ApolloProvider } from '@apollo/client'
import client from "../apollo-client"
import {Toaster} from "react-hot-toast"
import SideBar from '../components/Navegation/SideBar'


function MyApp({ Component, pageProps }: AppProps) {

  const [menu, setMenu] = React.useState<boolean>(false)
  
  return (
  <ApolloProvider client={client}>
  <SessionProvider>
  <Toaster></Toaster>

      <NavBar menu={menu} setMenu={setMenu}></NavBar>
      {menu ?
        <SideBar></SideBar>
        :
      <div className='hidden'></div> }
      
      <Component {...pageProps} />
    

  </SessionProvider>
  </ApolloProvider>
  )
}

export default MyApp
