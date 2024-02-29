import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logoRevende from '../../assets/logoRevende.svg';

function NavBar() {
	let navigate = useNavigate();

	const { usuario, handleLogout } = useContext(AuthContext);

	function logout() {
		handleLogout();
		alert('Usuário deslogado com sucesso.');
		navigate('/login');
	}

	return (
		<>
			<div className="w-full bg-[#FFF] text-slate-900 flex py-4 justify-center">
				<div className="w-full container flex justify-between text-lg items-center">
					<div className="text-2xl font-bold uppercase text-[#1C3240]">
						<img src={logoRevende} alt="Logo Revende" className="w-1/2" />
					</div>

					<div className="flex gap-4">
						<Link to="/home" className="hover:underline">
							Início
						</Link>
						<Link to="/contact" className="hover:underline">
							Contato
						</Link>
						<Link to="/about" className="hover:underline">
							Sobre
						</Link>
						<Link to="/login" className="hover:underline">
							Login
						</Link>
						<div className="hover:underline cursor-pointer">Produtos</div>
						<div className="hover:underline cursor-pointer">Categorias</div>
						<div className="hover:underline cursor-pointer">Perfil</div>
						<Link to="" onClick={logout} className="hover:underline">
							Sair
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
