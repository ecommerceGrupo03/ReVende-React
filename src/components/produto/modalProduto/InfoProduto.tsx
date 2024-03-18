import { useState, useEffect, useContext } from "react";
import { Link, useParams} from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscarAtravesId } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import Produto from "../../../models/Produto";
import "./InfoProduto.css";
import useCart from "../../../hooks/cart";
import { XCircle } from "@phosphor-icons/react";

interface InfoProdutoProps{
  produto: Produto;
  fecharInfo;
}

function InfoProduto({produto, fecharInfo}: InfoProdutoProps) {
  const { AddToCart } = useCart();

  const handleClickAdicionarAoCarrinho = () => {
    AddToCart(produto);
    toastAlerta('Produto adicionado ao carrinho!' , 'sucesso');
  };

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  return (
    <>
      <div className="min-w-screen min-h-screen bg-white-300 flex items-center overflow-hidden relative">
        <div className="xsm:w-5/6 md:w-[90%] max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <XCircle size={30} onClick={fecharInfo} color="#5A6973" className="absolute top-0 right-0 m-4 hover:cursor-pointer"/>
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative overflow-hidden">
                <img
                  src={produto.foto}
                  className="relative z-10 fotoProduto"
                  alt="fotoProduto"
                />

                <div className="border-4 border-gray-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-5">
                <h1 className="font-bold uppercase text-3xl mb-5 xsm:text-xl md:text-2xl">
                  {produto.nome}
                </h1>
                <p className="text-lg xsm:text-sm md:text-base">{produto.descricao}</p>
                <div className="mt-4">
                  <p className="text-xl xsm:text-base md:text-lg">Vendedor: {produto.usuario.nome}</p>
                </div>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5 my-5">
                  <span className="text-2xl leading-none align-baseline">
                    R$
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {produto.preco}
                  </span>
                  {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
                </div>
                <div className="inline-block align-bottom">
                  <Link to="" onClick={handleClickAdicionarAoCarrinho}>
                    <button className="bg-blue-500 opacity-75 hover:opacity-100 text-white rounded-full px-10 py-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2"></i>
                      Adicionar ao carrinho
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProduto;
