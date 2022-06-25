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