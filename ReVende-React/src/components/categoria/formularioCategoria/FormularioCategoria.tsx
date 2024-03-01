import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import {
	atualizar,
	buscar,
	buscarAtravesId,
	cadastrar,
} from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioCategoria() {
	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	const navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	async function buscarPorId(id: string) {
		await buscarAtravesId(`/categorias/${id}`, setCategoria, {
			headers: {
				Authorization: token,
			},
		});
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		});

		console.log(JSON.stringify(categoria));
	}

	async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria, {
					headers: {
						Authorization: token,
					},
				});

				toastAlerta('Categoria atualizado com sucesso', 'sucesso');
				retornar();

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				if (error.toString().includes('403')) {
					toastAlerta('O token expirou, favor logar novamente', 'info');
					handleLogout();
				} else {
					toastAlerta('Erro ao atualizar o Categoria', 'erro');
				}
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria, {
					headers: {
						Authorization: token,
					},
				});

				toastAlerta('Categoria cadastrado com sucesso', 'sucesso');

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				if (error.toString().includes('403')) {
					toastAlerta('O token expirou, favor logar novamente', 'info');
					handleLogout();
				} else {
					toastAlerta('Erro ao cadastrado o Categoria', 'erro');
				}
			}
		}

		retornar();
	}

	function retornar() {
		navigate('/categorias');
	}

	useEffect(() => {
		if (token === '') {
			toastAlerta('Você precisa estar logado', 'info');
			navigate('/login');
		}
	}, [token]);

	return (
		<div className="container flex flex-col items-center justify-center mx-auto">
			<h1 className="text-4xl text-center my-8">
				{id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
			</h1>

			<form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
				<div className="flex flex-col gap-2">
					<label htmlFor="nome">Nome da categoria</label>
					<input
						type="text"
						placeholder="Nome"
						name="nome"
						className="border-2 border-slate-700 rounded p-2"
						value={categoria.nome}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
					<label htmlFor="descricao">Descrição da categoria</label>
					<input
						type="text"
						placeholder="Descrição"
						name="descricao"
						className="border-2 border-slate-700 rounded p-2"
						value={categoria.descricao}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<button
					className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
					type="submit"
				>
					{id === undefined ? 'Cadastrar' : 'Editar'}
				</button>

				<button
					className="rounded text-white-100 bg-yellow-400 hover:bg-yellow-800 w-1/4 py-2 mx-auto block mt-4"
					onClick={retornar}
				>
					Voltar
				</button>
			</form>
		</div>
	);
}

export default FormularioCategoria;
