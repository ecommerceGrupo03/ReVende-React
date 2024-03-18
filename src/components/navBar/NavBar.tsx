import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import logoRevende from "../../assets/logoRevende-nobg.svg";
import { toastAlerta } from "../../util/toastAlerta";
import {ShoppingCart,SignOut,UserCircle,} from '@phosphor-icons/react';
import Carrinho from '../carrinho/Carrinho';
import DropDown from '../dropDown/DropDown';

function NavBar() {
  const navigate = useNavigate();
	const oldcart = JSON.parse(localStorage.getItem("cart"));

  const { usuario, handleLogout } = useContext(AuthContext);

  const [carrinhoOpen, setCarrinhoOpen] = useState(false);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso.", "sucesso");
    navigate("/login");
  }

  function handleCarrinhoOpen() {
    if (usuario.id === 0) {
      return toastAlerta("Você precisa estar logado", "info");
    }
    if (carrinhoOpen) {
      setCarrinhoOpen(false);
    } else {
      setCarrinhoOpen(true);
    }
  }

  return (
    <>
      {carrinhoOpen === true && <Carrinho />}


			<div className="flex flex-wrap place-items-center">
				<section className="relative mx-auto w-full">
					{/* <!-- navbar --> */}
					<nav className="flex justify-between bg-gradient-to-b from-[#85A693] to-[#f2f2f2] text-[#1C3240] ">
						<div className="px-8 xl:px-12 py-6 flex w-full items-center justify-between">
							<Link to="/home" className="text-3xl font-bold font-heading">
								<img className="h-16" src={logoRevende} alt="logo" />
							</Link>
							{/* <!-- Nav Links --> */}
							<ul className="hidden 2md:flex px-4 mx-auto font-semibold text-lg space-x-12">
								<li>
									<Link
										to="/home"
										className=" hover:text-black  hover:underline"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/about"
										className="hover:text-black  hover:underline"
									>
										Sobre
									</Link>
								</li>
								<li>
									<Link
										to="/produtos"
										className="hover:text-black  hover:underline"
									>
										Produtos
									</Link>
								</li>
								<li>
									<Link
										to="/pageCategoria"
										className="hover:text-black hover:underline"
									>
										Categorias
									</Link>
								</li>
							</ul>
							{/* <!-- Header Icons --> */}
							<div className="xsm:flex space-x-5 items-center justify-end">
								<Link
									to=""
									className="flex items-center "
									onClick={handleCarrinhoOpen}
								>
									<ShoppingCart
										size={26}
										weight="bold"
										className="text-[#1C3240] hover:text-[#111f27]"
									/>
									{oldcart !== null && oldcart.length > 0 && (
										<span className="flex absolute -mt-5 ml-4">
											<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
											<span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
										</span>
									)}
								</Link>
								<div className="flex space-x-5 items-center justify-end hidden lg:flex 2md:flex">
									{/* <!-- Perfil     --> */}
									<Link
										to={usuario.id !== 0 ? '/perfil' : '/login'}
										className="flex items-center "
									>
										<UserCircle
											size={26}
											weight="bold"
											className="text-[#1C3240] hover:text-[#111f27]"
										/>
									</Link>

									{usuario.id !== 0 && (
										<Link to="" onClick={logout} className="">
											<SignOut
												size={26}
												weight="bold"
												className="text-[#1C3240] hover:text-[#111f27]"
											/>
										</Link>
									)}
								</div>
							<a className="navbar-burger self-center 2md:hidden" href="#">
								<DropDown />
							</a>
							</div>
							{/* {ícone hamburguer} */}
							{/* <!-- Responsive navbar --> */}
						</div>
					</nav>
				</section>
			</div>
		</>
	);
}

export default NavBar;
