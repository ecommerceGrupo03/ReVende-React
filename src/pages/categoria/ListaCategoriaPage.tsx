import { useContext, useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { Plus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CardProduto from "../../components/produto/cardProduto/CardProduto";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";
import CardCategorias from "./CardCategoriaPage";


interface ListaProps {
  exibirBotoes: boolean;
}

function ListaCategoriaPage({ exibirBotoes }: ListaProps) {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtos, setProdutos] = useState([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar("/categorias/listar", setCategorias);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 ? (
        <div className="flex justify-center align-middle pt-80">
          <img src="" alt="" />
        </div>
      ) : (
        <div>
          {usuario.email == "root@root.com" && exibirBotoes && (
            <div className="p-16">
              <Link to="/formularioCategoria">
                <div className="p-8 flex items-center justify-center border bg-[#F2F2F2] hover:bg-[#85A693] flex items-center rounded-2xl">
                  <p className="text-3xl m-4">Cadastrar uma nova categoria </p>
                  <Plus size={48} weight="bold" color="darkgreen" />
                </div>
              </Link>
            </div>
          )}
          <div>
            <div
              className={`py-10 grid grid-cols-8
               gap-y-16 content-stretch justify-items-center`}
            >

                {/* ${
                categorias.length > 8 ? 8 : categorias.length */}

              {/* Buscar produtos dentro da categoria */}
              {categorias.map((categoria) => (
                <>
                  <CardCategorias
                    key={categoria.id}
                    categoria={categoria}
                    exibirBotoes={exibirBotoes}
                    onClick={() => setProdutos(categoria.produtos)}
                  />
                </>
              ))}
            </div>
            <div className="justify-items-center py-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {produtos.map((produto) => (
                <CardProduto
                  key={produto.id}
                  produto={produto}
                  exibirBotoes={true}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategoriaPage;
