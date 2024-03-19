import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscarAtravesId, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import CardProduto from '../cardProduto/CardProduto';

function DeletarProduto() {
	const [produto, setProduto] = useState<Produto>({} as Produto);

	let navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	async function buscarPorId(id: string) {
		try {
			await buscarAtravesId(`/produtos/${id}`, setProduto, {
				headers: {
					Authorization: token,
				},
			});
		} catch (error: any) {
			if (error.toString().includes('403')) {
				toastAlerta('O token expirou, favor logar novamente', 'info');
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === '') {
			toastAlerta('Você precisa estar logado', 'info');
			navigate('/login');
		}
	}, [token]);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function retornar() {
		navigate('/produtos');
	}

	async function deletarProduto() {
		try {
			await deletar(`/produtos/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			toastAlerta('Produto apagado com sucesso', 'sucesso');
		} catch (error) {
			toastAlerta('Erro ao apagar o Produto', 'erro');
		}

		retornar();
	}
	return (
		
		<div className="py-40">
		<div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar produto</h1>

			<p className="text-center font-semibold">
				Você tem certeza de que deseja apagar o produto a seguir?
			</p>
			<div className='flex content-center flex-col items-center justify-center mt-8'>
				<CardProduto produto={produto} exibirBotoes={false}/>

				<div className="flex p-5 space-x-2">
				<button
					className=" text-slate-900 bg-[#85A693] hover:bg-[#568C6D] w-full py-2 font-bold px-8 rounded"
					onClick={retornar}
				>
					Não
				</button>
				<button
					className="w-full text-white bg-[#FF4C4F] hover:bg-[#B91C1C] flex items-center justify-center font-bold px-8 rounded"
					onClick={deletarProduto}
				>
					Sim
				</button>
			</div>
			</div>
		</div>
	</div>
	
	);
}

export default DeletarProduto;
