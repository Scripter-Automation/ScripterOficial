type Publicacion = {
    ArticuloID?: string
    NegocioID?: string
    UserID: string
    File_url?: string
    ProductoID?: string
    Texto?: string
    Tipo: string
    Titulo: string
    id: string
    inserted_at: Date
    updated_at: Date
    
}

type PostData = {
    Titulo: undefined | string
    Cuerpo: undefined | string
    Url: undefined | string
    Tipo: undefined | string
}

type RegularPost = {
    id: string
    NegocioID?: string
    UserID: string
    Titulo: string
    Texto?: string
    inserted_at: Date
    updated_at?: Date
    avatar_url: string
    username: string
    nombre: string
    apellido: string
}