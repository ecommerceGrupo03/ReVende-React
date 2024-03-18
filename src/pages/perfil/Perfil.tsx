import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import { Pencil } from '@phosphor-icons/react';
import { buscar } from '../../services/Service';
import ProdutoDoUsuario from '../../components/produto/produtoDoUsuario/ProdutoDoUsuario';
import Produto from '../../models/Produto';
function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  const token = usuario.token;

  const [produtos, setProdutos] = useState<Produto[]>([]);


  const [numeroProdutos, setNumeroProdutos] = useState<number>(0);


  useEffect(() => {
    if (token === '') {
      toastAlerta(
        'Erro de autenticação. Verifique as informações de login.',
        'erro'
      );
      navigate('/login');
    }
  }, [token]);

  async function buscarProdutos() {
    await buscar('/produtos/listar', setProdutos);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  useEffect(() => {
    setNumeroProdutos(produtos.filter(produto => produto.usuario.id === usuario.id).length);
  }, [produtos, usuario.id]);





  return (
    <>
      <main className="pb-20 sm:pt-10 profile-page bg-gradient-to-t from-[#85A693] to-[#f2f2f2] text-[#1C3240]">
        <section className="relative block h-64 sm:mt-14">
          <div className="absolute top-0 w-full h-full bg-center bg-cover"></div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: 'translateZ(0px)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            ></svg>
          </div>
        </section>
        <section className="relative w-full pt-16 pb-16">
          <div className="flex mx-auto px-10 justify-center">
            <div className="relative flex flex-col min-w-0 h-full break-words bg-white shadow-xl rounded-lg -mt-64 w-3/4">
              <div className="flex-col px-6 justify-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={usuario.foto}
                        className="shadow-xl rounded-full object-cover align-middle border-none -m-16 -ml-20 lg:-ml-16 min-w-36 h-36 shrink-0 grow-0"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 lg:order-3 lg:text-right lg:self-center flex lg:justify-end justify-center">
                    <div className="py-0 lg:py-6 px-12 mt-24 lg:mt-0">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none flex gap-2 focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <Pencil size={15} />
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1 pt-0 sm:pt-8 lg:pt-0">
                    <div className="flex justify-center py-4 lg:pt-4 flex-col sm:flex-row">
                      <div className="p-1 text-center sm:p-3">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Compras
                        </span>
                      </div>
                      <div className="p-1 text-center sm:p-3">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {numeroProdutos}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Produtos
                        </span>
                      </div>
                      <div className="p-1 text-center sm:p-3">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          4
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Avaliações
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-4 sm:mb-8 sm:mt-4 lg:mb-0">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {usuario.nome}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="mr-2 text-lg text-blueGray-400" />
                    {usuario.email}
                  </div>
                </div>
                <hr className="my-8 mx-auto lg:block" />

                <div className="flex-col justify-center">
                  <h2 className="text-2xl font-medium text-gray-800 uppercase">Meus Produtos</h2>
                  <ProdutoDoUsuario />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Perfil;
