import { useState } from 'react';
import { Link } from 'react-router-dom';

function DropDown() {
	const [isOpen, setOpen] = useState(false);

	const handleDropDown = () => {
		setOpen(!isOpen);
	};
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
					className={`z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 drop-shadow-2xl absolute right-9 top-[70px] ${
						isOpen ? 'inline' : 'hidden'
					}`}
				>
					<ul className=" z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 shadow">
						<Link
							to="/home"
							className="block py-2 px-4 hover:bg-gray-100 hover:rounded-t-lg"
						>
							Home
						</Link>
						<Link to="/about" className="block py-2 px-4 hover:bg-gray-100">
							Sobre
						</Link>
						<Link to="/produtos" className="block py-2 px-4 hover:bg-gray-100">
							Produtos
						</Link>
						<Link
							to="/categorias"
							className="block py-2 px-4 hover:bg-gray-100"
						>
							Categorias
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
}
export default DropDown;
