import { Pencil, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Categoria from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
  exibirBotoes: boolean;
  onClick: () => void;
}

function CardCategoriaPage({
  categoria,
  exibirBotoes,
  onClick,
}: CardCategoriaProps) {
  const { usuario } = useContext(AuthContext);

  return (
    <button onClick={onClick}>
      <div className="bg-white border shadow-xl rounded-2xl overflow-hidden justify-center min-w-[200px]">
        {usuario.email == "root@root.com" && exibirBotoes && (
          <div className="flex gap-4 px-8 mt-6 justify-between">
            <div>
              <Link
                to={`/editarCategoria/${categoria.id}`}
                className=" text-blue-500 hover:text-blue-700"
              >
                <button>
                  <Pencil size={30} />
                </button>
              </Link>
            </div>
            <Link to={`/deletarCategoria/${categoria.id}`}>
              <button className="shadow-sm rounded-full text-red-500 hover:text-red-700 ">
                <Trash size={30} />
              </button>
            </Link>
          </div>
        )}
        {/* <div className="justify-center flex align-center  bg-white box-shadow: 0 1px 2px 0 ">
          <Image size={100} color="gray-900" weight="thin" />
        </div> */}
        <div>
          <div className="container h-full pt-8 pb-6 flex items-center justify-around rounded-lg shadow w-full ">
            <header className="font-semibold text-gray-900 bg-white text-xl">
              {categoria.nome}
            </header>
            {/* <p className="text-sm text-gray-600 bg-white">
            {categoria.descricao}
          </p> */}
          </div>
        </div>
      </div>
    </button>
  );
}

export default CardCategoriaPage;
