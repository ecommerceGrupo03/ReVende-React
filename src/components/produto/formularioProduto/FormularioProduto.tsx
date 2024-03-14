import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  buscar,
  buscarAtravesId,
  atualizar,
  cadastrar,
} from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";

function FormularioProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState({
    id: 0,
    nome: "",
    descricao: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    quantidade: 0,
    preco: 0,
    foto: "",
    categoria: null,
    usuario: null,
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
    await buscar("/categorias/listar", setCategorias);
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
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
    navigate("/produtos");
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
        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar a Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.nome === "";

  return (
    <div className="container flex flex-col mx-auto items-center pb-16">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

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
            className="border-2 border-[#85A693] rounded p-2"
          />
          {(produto.nome == "" ||
            produto.nome == null ||
            produto.nome.length > 255 ||
            produto.nome.length < 2) && (
            <label className="text-red-500">
              O nome do produto deve ter entre 2 caracteres e 255 caracteres.
            </label>
          )}
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
            className="border-2 border-[#85A693] rounded p-2"
          />
          {(produto.descricao == "" ||
            produto.descricao == null ||
            produto.descricao.length > 255 ||
            produto.descricao.length < 10) && (
            <label className="text-red-500">
              A descrição do produto deve ter entre 10 e 255 caracteres.
            </label>
          )}
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
            className="border-2 border-[#85A693] rounded p-2"
          />
          {(produto.preco == null || produto.preco < 0) && (
            <label className="text-red-500">
              O preço do produto não pode ser menor do que zero.
            </label>
          )}
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
            className="border-2 border-[#85A693] rounded p-2"
          />
          {(produto.quantidade == null || produto.quantidade < 0) && (
            <label className="text-red-500">
              A quantidade em estoque não pode ser menor do que zero.
            </label>
          )}
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
            className="border-2 border-[#85A693] rounded p-2"
          />
          {produto.foto.length > 1000 && (
            <label className="text-red-500">
              O link da foto do produto deve ter no máximo 1000 caracteres.
            </label>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria do produto:</label>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-[#85A693] rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma categoria...
            </option>
            {categorias.map((categoria) => (
              <>
                <option
                  value={categoria.id}
                  selected={categoria.id === produto.categoria.id}
                >
                  {categoria.nome}
                </option>
              </>
            ))}
          </select>
        </div>
        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-blue-200 bg-blue-500 hover:bg-blue-600 text-white font-bold w-1/2 mx-auto block py-2"
        >
          {carregandoCategoria ? (
            <span>Carregando...</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>

        <button
          className="rounded text-white-100 bg-[#85A693] hover:bg-[#568C6D] w-1/4 py-2 mx-auto block mt-4"
          onClick={retornar}
        >
          Voltar
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;
