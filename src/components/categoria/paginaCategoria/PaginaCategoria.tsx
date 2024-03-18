import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardProduto from "../../produto/cardProduto/CardProduto";
import Produto from "../../../models/Produto";
import { currentCategoryId } from "../cardCategoria/CardCategoria";
import { TailSpin } from "react-loader-spinner";

function PaginaCategoria(id) {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [carregando, setCarregando] = useState<boolean>(false);

    async function buscarProdutos() {
        setCarregando(true);
        await buscar('/produtos/listar', setProdutos);
        setCarregando(false);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    async function buscarCategorias() {
        await buscar('/categorias/listar', setCategorias);
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div className="py-10 grid gap-y-16 content-stretch justify-items-center">
            <>
                <div id="teste" className="pt-10 text-2xl font-bold"></div>

                {carregando && (
                    <div className='pt-8'>
                        <TailSpin
                        visible={true}
                        height="150"
                        width="150"
                        color="#568C6D"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        />
                    </div>
                )}

                <div className="justify-items-center py-10 grid gap-y-10 xsl:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full">
                    {produtos.filter((produto) => (
                        produto.categoria.id === currentCategoryId
                    )).map((produto, index) => {
                        if (index === 0) {
                            document.getElementById('teste').innerHTML = produto.categoria.nome;
                        }
                        return <CardProduto key={produto.id} produto={produto} exibirBotoes={true} />;
                    })}
                </div>

            </>
        </div>

    );
}

export default PaginaCategoria;