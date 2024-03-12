import { Link} from "react-router-dom";
import Produto from "../../../models/Produto";
import { Pencil, ShoppingCart, Trash } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";
import useCart from "../../../hooks/cart";
import InfoProduto from "../modalProduto/InfoProduto";
import Popup from "reactjs-popup";

interface CardProdutoProps {
  produto: Produto;
  exibirBotoes: boolean;
}

function CardProduto({ produto, exibirBotoes }: CardProdutoProps) {
  const { AddToCart } = useCart();

  const handleClickAdicionarAoCarrinho = () => {
    AddToCart(produto);
    toastAlerta('Produto adicionado ao carrinho!' , 'sucesso');
  };

  const { usuario } = useContext(AuthContext);

  const [exibirInfo, setExibirInfo] = useState(false);

  return (
    <>
      <Popup open={exibirInfo} onClose={() => setExibirInfo(false)} closeOnEscape modal>
        <InfoProduto produto={produto}/>
      </Popup>
      <div className="border shadow-xl flex flex-col rounded-2xl w-4/5 overflow-hidden justify-center">
        <div key={produto.id} className="group relative" onClick={() => setExibirInfo(true)}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img onClick={() => setExibirInfo(true)}
              src={produto.foto}
              alt="Imagem produto"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between p-6">
            <div>
              <h3 className="text-gray-700 font-black text-base">
                <span aria-hidden="true" className="absolute inset-0" />
                {produto.nome}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {produto.categoria?.nome}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              R$ {produto.preco}
            </p>
          </div>
        </div>

        {exibirBotoes && (
          <div>
            <div className="flex">
              {produto.usuario?.cnpj == usuario.cnpj && (
                <Link
                  to={`/editarProduto/${produto.id}`}
                  className="w-full text-slate-100 bg-blue-500 hover:bg-blue-600 flex items-center justify-center py-2 gap-2"
                >
                  <Pencil size={15} /> Editar
                </Link>
              )}

              {produto.usuario?.cnpj == usuario.cnpj && (
                <Link
                  to={`/deletarProduto/${produto.id}`}
                  className="text-slate-100 bg-red-600 hover:bg-red-700 w-full flex items-center justify-center gap-2"
                >
                  {" "}
                  <Trash size={15} /> Deletar{" "}
                </Link>
              )}
            </div>

            <Link
              to=""
              onClick={handleClickAdicionarAoCarrinho}
              className="text-slate-100 bg-green-500 hover:bg-green-600 w-full flex items-center justify-center gap-2 py-2"
            >
              {" "}
              <ShoppingCart size={15} /> Adicionar ao Carrinho{" "}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default CardProduto;
