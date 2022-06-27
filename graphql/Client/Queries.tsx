import { gql } from "@apollo/client";

export const CheckUserExist =  gql`
    query MyQuery($email:String!){
    getUsersByEmail(email: $email) {
        email
        id
        role
    }
    }
`

export const GET_USERS_NEGOCIO = gql`
    query MyQuery($id:ID!){
        getUsersNegocio(id:$id){
            Bio
            Nombre
            Slogan
            avatar_url
            cover_url
            id
            industria
            inserted_at
            sitioweb
            teir
            updated_at
            verificado
            UserIDArray
        }
    }
`

export const GET_FEED = gql`
    query MyQuery {
        getPublicacionList {
            ArticuloID
            UserID
            id
            updated_at
            inserted_at
            Titulo
            Tipo
            Texto
        }
    }

`