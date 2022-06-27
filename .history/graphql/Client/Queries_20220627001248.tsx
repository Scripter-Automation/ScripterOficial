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
            File_url
            NegocioID
            ProductoID
            Texto
            Tipo
            Titulo
            UserID
            Usuario {
                email
                role
                id
            }
        }
        }
    }

`