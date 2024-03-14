import ListaProduto from '../../components/produto/listaProduto/ListaProduto';
import encomendaFoto from '../../assets/encomenda.jpg';
import banner from '../../assets/banner5.png';
import { Info, Money, Truck } from '@phosphor-icons/react';
import ListaCategoria from '../../components/categoria/listaCategoria/ListaCategoria';
// import Carrossel from '../../components/carrossel/Carrossel';
import Carrossel2 from '../../components/carrossel/Carrossel2';

const Home = () => {
    return (
        <>
            <div className="pt-6 flex content-center bg-[#F2F2F2] flex-col items-center justify-center">
                <>
                    {/* banner */}
                    {/* <div className="top-28 w-full bg-gradient-to-r from-[#20432f] to-[#5A6973]">
						{' '}
						<img
							src={banner}
							alt=""
							className="w-full h-full bg-center object-contain"
						/>
					</div> */}
                    {/* ./banner */}

                    {/* <Carrossel /> */}
                    <Carrossel2 />

                    {/* categories */}
                    <div className="">
                        <h2 className="text-2xl font-medium text-gray-800 uppercase pt-10 px-8">
                            Categorias
                        </h2>
                        <ListaCategoria exibirBotoes={false} />
                    </div>

                    {/* ./product */}
                    <div className="">
                        <h2 className="text-2xl font-medium text-gray-800 uppercase px-8 pt-10">
                            Todos os Produtos
                        </h2>
                        <ListaProduto />
                    </div>
                    {/* ./características */}
                    <div className="container pt-14 pb-24">
                        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-20 mx-auto justify-center">
                            <div className="border border-[#85A693] rounded-sm py-6 flex justify-center items-center gap-5">
                                <Truck size={32} color="#85A693" />

                                <div>
                                    <h4 className="font-medium capitalize text-lg">
                                        Frete Grátis
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        Pedidos acima de R$100
                                    </p>
                                </div>
                            </div>
                            <div className="border border-[#85A693] rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                                <Money size={32} color="#85A693" />

                                <div>
                                    <h4 className="font-medium capitalize text-lg">
                                        Política de Reembolso
                                    </h4>
                                    <p className="text-gray-500 text-sm">Garantia de 30 dias</p>
                                </div>
                            </div>
                            <div className="border border-[#85A693] rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                                <Info size={32} color="#85A693" />

                                <div>
                                    <h4 className="font-medium capitalize text-lg">Suporte</h4>
                                    <p className="text-gray-500 text-sm">Seg-Sex das 9h às 18h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>
    );
};

export default Home;
