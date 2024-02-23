import Categoria from '../models/Categoria';



export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade:number ;
  preco: number;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
  

}