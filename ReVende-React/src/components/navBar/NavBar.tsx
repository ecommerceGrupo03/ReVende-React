import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

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
			<div className="w-full bg-[#FFF] text-white flex justify-center py-4">
				<div className="container flex justify-between text-lg">
					<div className="text-2xl font-bold uppercase">ReVende</div>

					<div className="flex gap-4">
						<Link to="/home" className="hover:underline text-[#1C3240]">
							Home
						</Link>
						<Link to="/contact" className="hover:underline">
							Contact
						</Link>
						<Link to="/about" className="hover:underline">
							About
						</Link>
						<Link to="/login" className="hover:underline">
							Login
						</Link>
						<div className="hover:underline">Produtos</div>
						<div className="hover:underline">Categorias</div>
						<div className="hover:underline">Perfil</div>
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
