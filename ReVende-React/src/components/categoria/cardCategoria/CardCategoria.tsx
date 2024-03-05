import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { Image, Pencil, Trash } from '@phosphor-icons/react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardCategoriaProps {
	categoria: Categoria;
	exibirBotoes:  boolean;
}

function CardCategorias({ categoria, exibirBotoes }: CardCategoriaProps) {
	const { usuario } = useContext(AuthContext);

	return (
		<div className="bg-white border shadow-xl flex flex-col rounded-2xl w-4/5 overflow-hidden">
			{usuario.email == 'root@root.com' && (
				<div className="flex w-full justify-end items-center gap-4 px-6 mt-6">
					<div className="flex rounded-full">
						<Link
							to={`/editarCategoria/${categoria.id}`}
							className=" text-blue-500 hover:text-blue-700"
						>
							<button className="w-full shadow-sm rounded-full ">
								{' '}
								<Pencil size={30} />{' '}
							</button>
						</Link>
					</div>
					<Link to={`/deletarCategoria/${categoria.id}`} className="bg-white">
						<button className="shadow-sm rounded-full text-red-500 hover:text-red-700 ">
							<Trash size={30} />
						</button>
					</Link>
				</div>
			)}
			<div className="justify-center flex align-center  bg-white box-shadow: 0 1px 2px 0 ">
				<Image size={100} color="gray-900" weight="thin" />
			</div>
			<div className="p-6">
				<header className="font-semibold text-gray-900 bg-white text-xl">
					{categoria.nome}
				</header>
				<p className="text-sm text-gray-600 bg-white">{categoria.descricao}</p>
			</div>

			{/* {usuario.email == "root@root.com" && (
        <div className="flex border shadow-xl">
          <Link
            to={`/editarCategoria/${categoria.id}`}
            className="w-full text-slate-100 bg-blue-500 hover:bg-blue-600 flex items-center justify-center py-2"
          >
            <button>
              {" "}
               <Pencil size={15} />{" "}
            </button>
          </Link>
        </div> */}
			{/* )} */}
		</div>
	);
}

export default CardCategorias;
