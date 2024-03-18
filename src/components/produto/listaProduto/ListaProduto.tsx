import Produto from '../../../models/Produto';
import { useContext, useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../util/toastAlerta';
import { Link } from 'react-router-dom';
import { Plus } from '@phosphor-icons/react';

function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar('/produtos/listar', setProdutos);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <div className='grid justify-items-center'>
        {(usuario.email == 'root@root.com' || usuario.cnpj) != '' && (
          <div className='p-16 max-w-[2000px]'>
            <Link to="/formularioProduto">
              <div className='p-8 justify-center border bg-[#F2F2F2] hover:bg-[#85A693] flex items-center rounded-2xl'>
                <p className='text-3xl m-4  '>Cadastrar um novo produto </p>
                <Plus
                  size={48}
                  weight="bold"
                  color="darkgreen"
                />
              </div>
            </Link>
          </div>
        )}
        <div className=''>
          <div className="py-20 h-fit grid grid-cols-2 gap-y-16 justify-items-center xsm:grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} exibirBotoes={true} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProduto;
