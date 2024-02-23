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
			<div className="w-full bg-[#FFF] text-white flex py-4 justify-center">
				<div className="w-full container flex justify-between text-lg items-center">
					<div className="text-2xl font-bold uppercase text-[#1C3240]">
						<img src={logoRevende} alt="Logo Revende" className="w-1/2" />
					</div>

					<div className="flex gap-4">
						<Link to="/home" className="hover:underline text-[#1C3240]">
							Home
						</Link>
						<Link to="/contact" className="hover:underline text-[#1C3240]">
							Contact
						</Link>
						<Link to="/about" className="hover:underline text-[#1C3240]">
							About
						</Link>
						<Link to="/login" className="hover:underline text-[#1C3240]">
							Login
						</Link>
						<div className="hover:underline text-[#1C3240]">Produtos</div>
						<div className="hover:underline text-[#1C3240]">Categorias</div>
						<div className="hover:underline text-[#1C3240]">Perfil</div>
						<Link
							to=""
							onClick={logout}
							className="hover:underline text-[#1C3240]"
						>
							Sair
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
