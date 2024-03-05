import { useState, useEffect, useContext, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthContext';
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
import { buscar } from '../../../services/Service';
import { toastAlerta } from "../../../util/toastAlerta";
import Produto from "../../../models/Produto";
import "./InfoProduto.css";

function InfoProduto() {

    const navigate = useNavigate();

    const [produto, setProduto] = useState<Produto>({} as Produto);

    const { id } = useParams<{ id: string }>();

    // const { usuario, handleLogout } = useContext(AuthContext);
    // const token = usuario.token;

    const ctx = useContext(CarrinhoContext);

    async function buscarPorId(id: string) {
        // try {
            await buscar(`/produtos/${id}`, setProduto);
        // } catch (error: any) {
        //     if (error.toString().includes('403')) {
        //         toastAlerta('O token expirou, favor logar novamente', 'info');
        //         handleLogout();
        //     }
        // }
    }

    // useEffect(() => {
    //     if (token === '') {
    //         toastAlerta('Você precisa estar logado', 'info');
    //         navigate('/login');
    //     }
    // }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    // function retornar() {
    //     navigate('/home');
    // }

    return (
        <>
            <div className="min-w-screen min-h-screen bg-white-300 flex items-center overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative overflow-hidden">
                                <img src={produto.foto} className="relative z-10 fotoProduto" alt="fotoProduto"  />

                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{produto.nome}</h1>
                                <p className="text-sm">
                                    {produto.descricao}
                                </p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">R$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{produto.preco}</span>
                                    {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
                                </div>
                                <div className="inline-block align-bottom">
                                   
                                        <Link 
                                            to='' onClick={() => ctx.adicionarProduto(produto.id)}
                                        >
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