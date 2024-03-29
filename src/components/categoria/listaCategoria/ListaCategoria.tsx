import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import CardCategorias from '../cardCategoria/CardCategoria';
import { Link } from 'react-router-dom';
import { Plus } from '@phosphor-icons/react';
import { TailSpin } from 'react-loader-spinner';

interface ListaProps {
  exibirBotoes: boolean;
}

function ListaCategoria({ exibirBotoes }: ListaProps) {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [carregando, setCarregando] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      setCarregando(true);
      await buscar('/categorias/listar', setCategorias);
      setCarregando(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      <div className='grid justify-items-center '>
        {carregando ? (
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
        ) : (
          <div className=''>
            {usuario.email == 'root@root.com' && exibirBotoes && (
              <div className='p-16 max-w-[2000px]'>
                <Link to="/formularioCategoria">
                  <div className='p-8 flex items-center justify-center border bg-[#F2F2F2] hover:bg-[#85A693] rounded-2xl'>
                    <p className='text-3xl m-4 text-[#1C3240]'>Cadastrar uma nova categoria </p>
                    <Plus
                      size={48}
                      weight="bold"
                      color="darkgreen"
                    />
                  </div>
                </Link>
              </div>
            )}
            <div className='flex justify-center'>
              <div className="py-20 h-fit grid grid-cols-2 gap-y-16 justify-items-center xsm:grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4">
                {categorias.map((categoria) => (
                  <>
                    <CardCategorias
                      key={categoria.id}
                      categoria={categoria}
                      exibirBotoes={exibirBotoes}
                    />
                  </>
                ))}
              </div>
            </div></div>
        )}
      </div>
    </>
  );
}

export default ListaCategoria;
