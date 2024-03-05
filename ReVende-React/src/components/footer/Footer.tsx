import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="bg-[#1C3240]">
        <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <Link
              to="/about"
              className="px-5 py-2"
              onClick={() => scrollTo(0, 0)}
            >
              <div className="text-base leading-6 text-[#F2F2F2] hover:text-gray-400">
                Sobre
              </div>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2"
              onClick={() => scrollTo(0, 0)}
            >
              <div className="text-base leading-6 text-[#F2F2F2] hover:text-gray-400">
                Contato
              </div>
            </Link>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <Link
              to="https://www.facebook.com/"
              className="text-[#F2F2F2] hover:text-gray-400"
            >
              <FacebookLogo size={26} weight="bold" />
            </Link>

            <Link
              to="https://www.instagram.com/"
              className="text-[#F2F2F2] hover:text-gray-400"
            >
              <InstagramLogo size={26} weight="bold" />
            </Link>

            <Link
              to="https://twitter.com/"
              className="text-[#F2F2F2] hover:text-gray-400"
            >
              <TwitterLogo size={26} weight="bold" />
            </Link>

            <Link
              to="https://github.com/ecommerceGrupo03"
              className="text-[#F2F2F2] hover:text-gray-400"
            >
              <GithubLogo size={26} weight="bold" />
            </Link>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © ReVende | 2024 - Todos os direitos reservados
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;

