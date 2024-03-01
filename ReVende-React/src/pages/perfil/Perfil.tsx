import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import perfilCapa from '../../assets/perfil-capa.jpg';
import { toastAlerta } from '../../util/toastAlerta';
function Perfil() {
	let navigate = useNavigate();

	const { usuario } = useContext(AuthContext);

	const token = usuario.token;

	useEffect(() => {
		if (usuario.token === '') {
			toastAlerta(
				'Erro de autenticação. Verifique as informações de login.',
				'erro'
			);
			navigate('/login');
		}
	}, [usuario.token]);

	return (
		<div className="container mx-auto pb-10 rounded-2xl overflow-hidden">
			<img
				className="w-full h-72 object-cover border-b-8 pt-10 border-white"
				src={perfilCapa}
				alt="Capa do Perfil"
			/>
			<img
				src={usuario.foto}
				alt={`Foto de perfil de ${usuario.nome}`}
				className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
			/>
			<div className="relative mt-[-9rem] h-72 flex flex-col bg-[#308C50] text-white text-2xl items-center text-center justify-center">
				<div className="pt-28">
					<p>Nome: {usuario.nome} </p>
					<p>Email: {usuario.email}</p>
				</div>
			</div>
		</div>
	);
}

export default Perfil;
