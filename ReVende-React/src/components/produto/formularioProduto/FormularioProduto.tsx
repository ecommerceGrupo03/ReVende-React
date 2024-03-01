import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, buscarAtravesId, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';


function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: ''
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    quantidade: 0,
    preco: 0,
    foto: '',
    categoria: null,
    usuario: null
  });

  async function buscarProdutoPorId(id: string) {
    await buscarAtravesId(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscarAtravesId(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias/listar', setCategorias);
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Produto', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Produto cadastrado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar o Produto', 'erro');
        }
      }
    }
  }

  const carregandoCategoria = categoria.nome === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do produto:</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome..."
            name="nome"
            required
            className="border-2 border-green-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do produto:</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição..."
            name="descricao"
            required
            className="border-2 border-green-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço da unidade:</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="0"
            name="preco"
            required
            className="border-2 border-green-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantidade">Unidades em estoque:</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="0"
            name="quantidade"
            required
            className="border-2 border-green-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto do produto:</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="URL da foto..."
            name="foto"
            required
            className="border-2 border-green-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="categoria">Categoria do produto:</label>
          <select name="categoria" id="categoria" className='border p-2 border-green-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria...</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-green-200 bg-green-400 hover:bg-green-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando...</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>

        <button className="rounded text-white-100 bg-yellow-400 hover:bg-yellow-800 w-1/4 py-2 mx-auto block mt-4" onClick={retornar}>Voltar</button>
      </form>
    </div>
  );
}

export default FormularioProduto;