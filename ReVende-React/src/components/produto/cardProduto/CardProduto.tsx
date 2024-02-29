import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
produto:Produto
}

function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>{produto.nome}</header>
      <img src={produto.foto} alt="foto do produto" />
      <p className='p-8 text-3xl bg-slate-200 h-full'>Preço: R$ {produto.preco}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Vendedor: {produto.usuario?.nome}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Categoria: {produto.categoria?.nome}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.descricao}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Unidades em Estoque: {produto.quantidade}</p>
      <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}
export default CardProduto