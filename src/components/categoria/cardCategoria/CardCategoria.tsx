import { Link, useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { Image, Pencil, Trash } from '@phosphor-icons/react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
interface CardCategoriaProps {
    categoria: Categoria;
    exibirBotoes: boolean;
}


export let currentCategoryId = -1;

function CardCategorias({ categoria, exibirBotoes }: CardCategoriaProps) {
    const { usuario } = useContext(AuthContext);
    const navigate = useNavigate();

    function byCategories(id, nome) {
        console.log(categoria.nome);
        currentCategoryId = id;
        navigate(`/produtos/categoria/${nome}`);
        return id;
    };

    return (
        <div className="min-h-[150px] min-w-[200px] sm:min-w-[200px] bg-white border shadow-xl flex flex-col rounded-2xl w-4/5 overflow-hidden justify-center categoriaSelecionada">
            {usuario.email == 'root@root.com' && exibirBotoes && (
                <div className="flex w-full justify-end items-center gap-4 px-6 mt-6">
                    <div className="flex rounded-full">
                        <Link
                            to={`/editarCategoria/${categoria.id}`}
                            className=" text-blue-500 hover:text-blue-700"
                        >
                            <button className="w-full shadow-sm rounded-full ">
                                {' '}
                                <Pencil size={30} />{' '}
                            </button>
                        </Link>
                    </div>
                    <Link to={`/deletarCategoria/${categoria.id}`} className="bg-white">
                        <button className="shadow-sm rounded-full text-red-500 hover:text-red-700 ">
                            <Trash size={30} />
                        </button>
                    </Link>
                </div>
            )}
            {/* <div className="justify-center flex align-center  bg-white box-shadow: 0 1px 2px 0 ">
                <Image size={100} color="gray-900" weight="thin" />
            </div> */}
            <div className="min-h-[150px] min-w-[200px] flex flex-col py-5 px-4 justify-start">
                <header onClick={() => byCategories(categoria.id, categoria.nome)} className="pb-2 font-semibold text-gray-900 bg-white text-xl cursor-pointer hover:text-[#568C6D] hover:underline">
                    {categoria.nome}
                </header>
                <p className="text-sm text-gray-600 bg-white flex pt-2 w-fit">{categoria.descricao}</p>
            </div>
        </div>
    );
}

export default CardCategorias;
