import { useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/cart";

export interface CardCarrinhoProps {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  quantidade: number;
  vendedor: string;
}

function CardCarrinho({
  id,
  nome,
  foto,
  preco,
  quantidade,
  vendedor,
}: CardCarrinhoProps) {
  const { RemoveToCart } = useCart();

  return (
    <li key={id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={foto}
          alt="Imagem do Produto"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/editarProduto/${id}`}>{nome}</Link>
            </h3>
            <p className="ml-4">{preco}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Vendedor: {vendedor}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qtd {quantidade}</p>

          <div className="flex">
            <button
              type="button"
              onClick={() => RemoveToCart(id)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardCarrinho;
