export interface Recette {
    id: string;
    name: string;
    categorie: string;
    description:string;
    popular: boolean;
}

export interface User{
    id: string;
    name: string;
    email: string;
    password: string;
}