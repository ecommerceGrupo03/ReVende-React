import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { toastAlerta } from '../../util/toastAlerta';

function Cadastro() {
	let navigate = useNavigate();

	const [confirmaSenha, setConfirmaSenha] = useState<string>('');

	const [usuario, setUsuario] = useState<Usuario>({
		id: 0,
		nome: '',
		foto: '',
		email: '',
		senha: '',
		cpf: '',
		cnpj: '',
	});
	const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
		id: 0,
		nome: '',
		foto: '',
		email: '',
		senha: '',
		cpf: '',
		cnpj: '',
	});

	useEffect(() => {
		if (usuarioResposta.id !== 0) {
			back();
		}
	}, [usuarioResposta]);

	function back() {
		navigate('/login');
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
				toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
			} catch (error) {
				toastAlerta('Erro ao cadastrar o Usuário', 'erro');
			}
		} else {
			toastAlerta(
				'Dados inconsistentes. Verifique as informações de cadastro.',
				'erro'
			);
			setUsuario({ ...usuario, senha: '' }); // Reinicia o campo de Senha
			setConfirmaSenha(''); // Reinicia o campo de Confirmar Senha
		}
	}

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
				<div className="fundoCadastro hidden lg:block"></div>
				<form
					className="flex justify-center items-center flex-col w-2/3 gap-3"
					onSubmit={cadastrarNovoUsuario}
				>
					<h2 className="text-slate-900 text-5xl">Cadastrar</h2>
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
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="cpf">Cpf</label>
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
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="cnpj">Cnpj</label>
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
					</div>
					<div className="flex justify-around w-full gap-8">
						<button
							className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
							onClick={back}
						>
							Cancelar
						</button>
						<button
							className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2"
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
