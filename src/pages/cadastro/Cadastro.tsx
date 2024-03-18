import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";


function Cadastro() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    foto: "",
    email: "",
    senha: "",
    cpf: "",
    cnpj: "",
  });
  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    foto: "",
    email: "",
    senha: "",
    cpf: "",
    cnpj: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        toastAlerta("Erro ao cadastrar o Usuário", "erro");
      }
    } else {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="w-full font-bold flex justify-center">

        <form
          className="flex py-5 lg:py-20 justify-center items-center flex-col w-1/2 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-[#1C3240] text-2xl lg:text-5xl ">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            {(usuario.nome == '' || usuario.nome == null || usuario.nome.length > 255 || usuario.nome.length < 5) &&
              <label className="text-red-500">O nome deve ter entre 5 e 255 caracteres.</label>
            }
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            {(usuario.email == '' || usuario.email == null || usuario.email.length > 255 || usuario.email.length < 5) &&
              <label className="text-red-500">O e-mail deve ter entre 5 e 255 caracteres.</label>
            }
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            {(usuario.foto.length > 1000) &&
              <label className="text-red-500">O link da foto do usuário deve ter no máximo 1000 caracteres.</label>
            }
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            {(usuario.senha == '' || usuario.senha == null || usuario.senha.length > 255 || usuario.senha.length < 8) &&
              <label className="text-red-500">A senha deve ter entre 8 e 255 caracteres.</label>
            }
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            />
            {(confirmaSenha !== usuario.senha) &&
              <label className="text-red-500">As senhas não são iguais.</label>
            }
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="cpf">CPF</label>
            <input
              type="cpf"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            {(usuario.cpf.length > 14) &&
              <label className="text-red-500">O CPF deve ter no máximo 14 caracteres.</label>
            }
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              type="cnpj"
              id="cnpj"
              name="cnpj"
              placeholder="CNPJ"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.cnpj}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            {(usuario.cnpj.length > 18) &&
              <label className="text-red-500">O CNPJ deve ter no máximo 18 caracteres.</label>
            }
          </div>
          <div className="flex justify-around w-full gap-8 py-6">
            <button
              className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
              onClick={back}
            >
              Cancelar
            </button>
            <button
              className="rounded text-white bg-[#568C6D] hover:bg-[#85A693] w-1/2 py-2"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
