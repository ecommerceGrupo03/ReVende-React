/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscarAtravesId, deletar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import { Image } from "@phosphor-icons/react";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscarAtravesId(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a Categoria", "erro");
    }

    retornar();
  }
  return (
    <div className="py-36">
      <div className="container w-1/3 mx-auto">
        <p className="text-center font-semibold pb-6 pt-10">
          Você tem certeza de que deseja apagar a categoria a seguir?
        </p>

        <div className="bg-white">
          <div className="box-shadow: 0 1px 2px 0  justify-center  flex align-center  bg-white box-shadow: 0 1px 2px 0 ">
            <Image size={100} color="#8e3333 " />
          </div>

          <header className="pt-6 pl-6  text-sm text-gray-600 bg-white">
            {categoria.nome}
          </header>
          <p className="pl-6 pb-6 text-base font-semibold text-gray-900 bg-white">
            {categoria.descricao}
          </p>
          <div className="flex p-5">
            <button
              className="text-white bg-blue-500 hover:bg-blue-600  w-full py-2 font-bold"
              onClick={retornar}
            >
              Não
            </button>
            <button
              className="w-full text-white bg-[#FF4C4F] hover:bg-[#B91C1C] flex items-center justify-center font-bold"
              onClick={deletarCategoria}
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
