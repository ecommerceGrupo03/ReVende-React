import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { Image, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  const { usuario } = useContext(AuthContext);

  return (
    <div className="bg-white border shadow-xl flex flex-col rounded-2xl w-4/5 overflow-hidden">
      {usuario.email == "root@root.com" && (
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="bg-white w-full"
        >
          <button className="ml-80 mt-6 shadow-sm">
            <Trash
              size={32}
              color="#c51111"
            />
          </button>
        </Link>
      )}
      <div className="justify-center flex align-center  bg-white box-shadow: 0 1px 2px 0 ">
        <Image size={100} color="gray-900" weight="thin" />
      </div>
      <header className="pl-6 pt-6 text-base font-semibold text-gray-900 bg-white text-xl">
        {categoria.nome}
      </header>
      <p className="pl-6 pb-6  text-sm text-gray-600 bg-white text-lg">
        {categoria.descricao}
      </p>

      {usuario.email == "root@root.com" && (
        <div className="flex border shadow-xl">
          <Link
            to={`/editarCategoria/${categoria.id}`}
            className="w-full text-slate-100 bg-blue-500 hover:bg-blue-600 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CardCategorias;
