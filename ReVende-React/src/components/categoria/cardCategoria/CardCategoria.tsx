import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { Image } from '@phosphor-icons/react'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    
    <div className='border shadow-xl flex flex-col rounded-2xl overflow-hidden justify-between'>
      
      <div className="justify-center  flex align-center  bg-white box-shadow: 0 1px 2px 0 ">
      <Image size={100} color="#8e3333 " />
      </div>
      <header className='pt-6 pl-6  text-sm text-gray-600 bg-white  '>{categoria.nome}</header>
      <p className='pl-6 pb-6 text-base font-semibold text-gray-900 bg-white'>{categoria.descricao}</p>
      
      <div className="flex border shadow-xl">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-blue-500 hover:bg-blue-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-600 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>

      </div>
    </div>
  )
}

export default CardCategorias