import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
  produto:Produto
}

function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className='border flex flex-col rounded-2xl w-4/5 overflow-hidden justify-center'>
      
      <div key={produto.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={produto.foto}
            alt="Imagem produto"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between p-6">
          <div>
            <h3 className="text-gray-700 font-black text-base">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {produto.nome}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{produto.categoria?.nome}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{produto.preco}</p>
        </div>
      </div>


      {/* <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div> */}
    </div>
  )
}
export default CardProduto