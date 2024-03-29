import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CardCarrinho from "./cardCarrinho/CardCarrinho";
import useCart from "../../hooks/cart";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";

function Carrinho() {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { TotalCart, ClearCart } = useCart();
  const [total, setTotal] = useState(0);

  const { usuario, handleLogout } = useContext(AuthContext);

  const handleClickComprar = () => {
    if (usuario.id === 0) {
      return toastAlerta("Você precisa estar logado para realizar compras.", "info");
    } else {
      ClearCart()
      toastAlerta('Compra efetuada com sucesso!' , 'sucesso');
    }
  };

  async function getTotal() {
    const amount = await TotalCart();
    setTotal(amount);
  }

  function getProducts(){
    setIsLoading(true);
    const hasCart = localStorage.getItem("cart");
    const cart = JSON.parse(hasCart);
    setProducts(cart);
    setIsLoading(false);
  }

  function renderProducts() {
    return products.map((produto) => (
      <CardCarrinho
        id={produto.id}
        nome={produto.nome}
        foto={produto.photo}
        preco={produto.price}
        quantidade={produto.quantidade}
        vendedor={produto.vendedor}
      />
    ));
  }

  useEffect(() => {
    getTotal();
    getProducts()
  }, [products]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-[#1C3240]">
                          Carrinho de compras
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Fechar painel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {isLoading ? <></> : renderProducts()}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-[#1C3240]">
                        <p>Subtotal</p>
                        <p>R$ { isLoading ? 0 : total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-[#1C3240]">
                        Frete e taxas calculadas na compra.
                      </p>
                      <div className="mt-6">
                        <Link
                          to=""
                          className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600"
                          onClick={handleClickComprar}
                        >
                          Comprar
                        </Link>

                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-[#1C3240]">
                        <p>
                          ou{" "}
                          <Link
                            to="/produtos"
                            type="button"
                            className="font-medium text-[#568C6D] hover:text-[#85A693]"
                            onClick={() => setOpen(false)}
                          >
                            Continue Comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Carrinho;
