/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscarAtravesId, deletar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import { Image } from "@phosphor-icons/react";
import CardCategoria from "../cardCategoria/CardCategoria";

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
    navigate("/pageCategoria");
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
    <div className="py-40">
		<div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar categoria</h1>

			<p className="text-center font-semibold">
        Você tem certeza de que deseja apagar a categoria a seguir?
			</p>
			<div className='flex content-center flex-col items-center justify-center mt-8'>
				<CardCategoria categoria={categoria} exibirBotoes={false}/>

				<div className="flex p-5 space-x-2">
				<button
					className=" text-slate-900 bg-[#85A693] hover:bg-[#568C6D] w-full py-2 font-bold px-8 rounded"
					onClick={retornar}
				>
					Não
				</button>
				<button
					className="w-full text-white bg-[#FF4C4F] hover:bg-[#B91C1C] flex items-center justify-center font-bold px-8 rounded"
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
