import { gql } from "@apollo/client";

export const CREATE_POST = gql`
mutation MyMutation(
    $Texto: String
    $Tipo: String!
    $Titulo: String!
    $UserID: String!
){
createPost(
    Texto: $Texto
    Tipo: $Tipo
    Titulo: $Titulo
    UserID: $UserID 
) {
    UserID
    Titulo
    Tipo
    Texto
  }
}
`