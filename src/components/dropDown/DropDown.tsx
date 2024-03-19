import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import { Books, House, Package, Question, SignOut, UserCircle } from '@phosphor-icons/react';

function DropDown() {
	const navigate = useNavigate();

	const [isOpen, setOpen] = useState(false);

	const { usuario, handleLogout } = useContext(AuthContext);

	const handleDropDown = () => {
		setOpen(!isOpen);
	};

	function logout() {
		handleLogout();
		toastAlerta("Usuário deslogado com sucesso.", "sucesso");
		navigate("/login");
	}

	return (
		<>
			{/* Dropdown menu */}

			<div className="dropdown">
				<button className="flex-row" onClick={handleDropDown}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 text-[#1C3240] hover:text-[#111f27] font-bold"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							className=""
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<div
					id="dropdown"
					className={`z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 absolute right-9 top-[70px] ${
						isOpen ? 'inline' : 'hidden'
					}`}
				>
					<ul className=" z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 shadow">
						<Link
							to="/home"
							className="block py-2 px-4 hover:bg-gray-100 hover:rounded-t-lg"
						>
							<div className='flex items-center space-x-2'>
								<House/>
								<div>Home</div>
							</div>
						</Link>
						<Link to="/about" className="block py-2 px-4 hover:bg-gray-100">
							<div className='flex items-center space-x-2'>
								<Question/>
								<div>Sobre</div>
							</div>
						</Link>
						<Link to="/produtos" className="block py-2 px-4 hover:bg-gray-100">
						<div className='flex items-center space-x-2'>
								<Package/>
								<div>Produtos</div>
							</div>
						</Link>
						<Link
							to="/pageCategoria"
							className="block py-2 px-4 hover:bg-gray-100"
						>
							<div className='flex items-center space-x-2'>
								<Books/>
								<div>Categorias</div>
							</div>
						</Link>
						{(usuario == null || usuario.token == '')?
							<Link to="/login" className="block py-2 px-4 hover:bg-gray-100">
								<div className='flex items-center space-x-2'>
									<UserCircle/>
									<div>Login</div>
								</div>
							</Link>
						
						:<>
							<Link to="/perfil" className="block py-2 px-4 hover:bg-gray-100">
								<div className='flex items-center space-x-2'>
									<UserCircle/>
									<div>Perfil</div>
								</div>
							</Link>
							<Link to="" onClick={logout} className="block py-2 px-4 hover:bg-gray-100">
								<div className='flex items-center space-x-2'>
									<SignOut/>
									<div>Sair</div>
								</div>
							</Link>
						</>
						}
					</ul>
				</div>
			</div>
		</>
	);
}
export default DropDown;
