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
    Usuario: User
    
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

type User = {
    id: string
    email: string
    role: string
    Profile: Profile
    Negocio?: Negocio
}

type Profile = {
    UserID: string
    apellido: string
    avatar_url?: string
    cover_url?:string
    empleado?: boolean
    id: string
    inserted_at: Date
    job?: string
    nombre: string
    updated_at?: Date
    username: string

}