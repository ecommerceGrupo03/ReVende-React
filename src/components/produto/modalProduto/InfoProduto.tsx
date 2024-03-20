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

  const disponivel = (produto.quantidade > 0);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-white-300 flex items-center overflow-hidden relative">
        <div className="xsm:w-5/6 md:w-[90%] max-w-6xl rounded bg-white shadow-xl px-8 pt-8 pb-4 sm:pb-8 md:p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <XCircle size={30} onClick={fecharInfo} color="#5A6973" className="absolute top-0 right-0 m-1 md:m-4 hover:cursor-pointer"/>
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-5 md:mb-0">
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
              <div className="">
                <h1 className="font-bold uppercase text-5xl mb-2 xsm:text-xl md:text-2xl">
                  {produto.nome}
                </h1>
                <p className="text-2xl xsm:text-sm md:text-base mb-5 md:mb-10">{produto.descricao}</p>
                <div className="mt-0 sm:mt-4">
                  <p className="text-xl xsm:text-base md:text-lg">Vendedor: {produto.usuario.nome}</p>
                </div>
                <div className="mt-2 md:mt-4">
                  <p className="text-lg xsm:text-base md:text-lg">Em Estoque: {produto.quantidade}</p>
                </div>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5 my-5">
                  <span className="text-2xl leading-none align-baseline">
                    R$
                  </span>
                  <span className="px-2 font-bold text-3xl leading-none align-baseline">
                    {produto.preco}
                  </span>
                  {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
                </div>
                <div className="inline-block align-bottom w-full">
                  {(disponivel) ? (
                    <Link to="" onClick={handleClickAdicionarAoCarrinho}>
                      <button className="bg-blue-500 opacity-75 hover:opacity-100 text-white rounded-full px-5 md:px-10 py-2 font-semibold w-full">
                        <i className="mdi mdi-cart mx-2"/>
                        Adicionar ao carrinho
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-red-500 text-white rounded-full px-10 py-2 font-semibold">
                        <i className="mdi mdi-cart-off mx-2"/>
                        Fora de Estoque
                      </button>
                  )}
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
