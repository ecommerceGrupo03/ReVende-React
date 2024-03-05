import Produto from "./Produto";

export default interface Usuario {
    id: number,
    nome: string,
    foto: string,
    email: string,
    senha: string,
    cpf: string,
    cnpj: string
    produto?: Produto | null;
}