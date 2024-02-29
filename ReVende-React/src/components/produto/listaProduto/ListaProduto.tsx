
import Produto from "../../../models/Produto";
import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProduto/CardProduto";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";
import { Link } from "react-router-dom";
import { Plus } from "@phosphor-icons/react";

function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);



  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar("/produtos/listar", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);
  return (
    <>
      {produtos.length === 0 && (
        <div className="flex justify-center align-middle pt-80">
          <img src="" alt="" />
        </div>
      )}
      <div className="container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}

        <Link to='/formularioProduto'><Plus size={100} weight='bold' color='lightgreen' className="border bg-green-600 hover:bg-green-800 flex items-center justify-center rounded-2xl" /></Link>
      </div>
    </>
  );
}

export default ListaProduto;
