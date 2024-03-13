import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
	const navigate = useNavigate();

	const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
		{} as UsuarioLogin
	);
	const { usuario, handleLogin } = useContext(AuthContext);

	const { isLoading } = useContext(AuthContext);

	useEffect(() => {
		if (usuario.token !== '') {
			navigate('/home');
		}
	}, [usuario]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setUsuarioLogin({
			...usuarioLogin,
			[e.target.name]: e.target.value,
		});
	}

	function login(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		handleLogin(usuarioLogin);
	}

	return (
		<>
			<div className="w-full font-bold flex justify-center  ">
				<form
					className="flex py-40 items-center flex-col w-1/2 gap-4"
					onSubmit={login}
				>
					<h2 className="text-[#1C3240] text-5xl ">Entrar</h2>
					<div className="flex flex-col w-full">
						<label htmlFor="email" className='text-[#1C3240]'>Email</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="Email"
							className="border-2 border-[#1C3240] rounded p-2"
							value={usuarioLogin.email}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								atualizarEstado(e)
							}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="senha" className='text-[#1C3240]'>Senha</label>
						<input
							type="password"
							id="senha"
							name="senha"
							placeholder="Senha"
							className="border-2 border-slate-700 rounded p-2"
							value={usuarioLogin.senha}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								atualizarEstado(e)
							}
						/>
					</div>
					<button
						type="submit"
						className="rounded bg-[#568C6D] hover:bg-[#85A693] text-white w-1/2 py-2 flex justify-center"
					>
						{isLoading ? (
							<RotatingLines
								strokeColor="white"
								strokeWidth="5"
								animationDuration="0.75"
								width="24"
								visible={true}
							/>
						) : (
							<span>Entrar</span>
						)}
					</button>

					<hr className="border-[#1C3240] w-full" />

					<p className='text-[#1C3240]'>
						Ainda não tem uma conta?{' '}
						<Link to="/cadastro" className="text-[#568C6D] hover:underline">
							Cadastre-se
						</Link>
					</p>
				</form>
				<div className="fundoLogin hidden lg:block"></div>
			</div>
		</>
	);
}

export default Login;
