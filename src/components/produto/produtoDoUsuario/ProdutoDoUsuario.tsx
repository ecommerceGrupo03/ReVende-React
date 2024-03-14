import React, { useContext, useEffect, useState } from 'react';
import CardProduto from '../cardProduto/CardProduto';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import Produto from '../../../models/Produto';

function ProdutoDoUsuario() {
    const { usuario, handleLogout } = useContext(AuthContext);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [numeroProdutos, setNumeroProdutos] = useState<number>(0);

    async function buscarProdutos() {
        await buscar('/produtos/listar', setProdutos);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    useEffect(() => {
        async function buscarUsuario() {
            await buscar('/usuario/listar', handleLogout);
        }
        buscarUsuario();
    }, [usuario.id]);

    // Atualiza o número total de produtos do usuário sempre que o array de produtos é atualizado
    useEffect(() => {
        setNumeroProdutos(produtos.filter(produto => produto.usuario.id === usuario.id).length);
    }, [produtos, usuario.id]);

    return (
        <div className="justify-items-center py-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {produtos.filter(produto => produto.usuario.id === usuario.id).map((produto, index) => (
                <CardProduto key={produto.id} produto={produto} exibirBotoes={true} />
            ))}
            
        </div>
    );
}

export default ProdutoDoUsuario;

