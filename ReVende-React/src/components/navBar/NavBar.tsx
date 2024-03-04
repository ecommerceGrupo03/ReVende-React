import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import logoRevende from "../../assets/logoRevende-nobg.svg";
import { toastAlerta } from "../../util/toastAlerta";
import {
  ShoppingCart,
  SignIn,
  SignOut,
  UserCircle,
} from "@phosphor-icons/react";
import Carrinho from "../carrinho/Carrinho";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

function NavBar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const [carrinhoOpen, setCarrinhoOpen] = useState(false);

  const ctx = useContext(CarrinhoContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso.", "sucesso");
    navigate("/login");
  }

  function handleCarrinhoOpen() {
    if (carrinhoOpen) {
      setCarrinhoOpen(false);
    } else {
      setCarrinhoOpen(true);
    }
  }

  return (
    <>
      {carrinhoOpen == true && <Carrinho />}

      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gradient-to-b from-[#85A693] to-[#f2f2f2] text-[#1C3240] w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                <img className="h-16" src={logoRevende} alt="logo" />
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold text-lg space-x-12">
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
                    to="/categorias"
                    className="hover:text-black hover:underline"
                  >
                    Categorias
                  </Link>
                </li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex space-x-5 items-center">
                <Link
                  to=""
                  className="flex items-center hover:text-gray-600"
                  onClick={handleCarrinhoOpen}
                >
                  <ShoppingCart size={26} color="#1C3240" weight="bold" />
                  {ctx.carrinhoVazio() == false && (
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>
                  )}
                </Link>
                {/* <!-- Perfil     --> */}

                {usuario.id !== 0 ? (
                  <Link
                    to="/perfil"
                    className="flex items-center hover:text-gray-600"
                  >
                    <UserCircle size={26} color="#1C3240" weight="bold" />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center hover:text-gray-600"
                  >
                    <SignIn size={26} color="#1C3240" weight="bold" />
                  </Link>
                )}

                {usuario.id !== 0 && (
                  <Link to="" onClick={logout} className="hover:text-gray-600">
                    <SignOut size={26} color="#1C3240" weight="bold" />
                  </Link>
                )}
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  );
}

export default NavBar;
