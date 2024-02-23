import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export interface ContactProps{
    nome:string;
    sobre:string;
    imagem:string;
    linkedin:string;
    github:string;
}

function ContactCard({nome, sobre, imagem, linkedin, github}:ContactProps) {
  return (
    <div className="flex justify-center grid-cols-3 bg-gradient-to-r from-gray-900 to-gray-700 border-2 border-gray-700 rounded-lg items-stretch my-10">
        <div className="flex items-center m-12">
            <img src={imagem} alt={nome} className="rounded-full size-64"/>
        </div>

        <div className="m-8">
            <div className="flex-col justify-center">
                <h4 className="text-6xl flex justify-center my-4 mx-4 text-wrap max-w-xl">{nome}</h4>

                <hr className="border-gray-700 border-2 w-full" />

                <h5 className="text-3xl flex justify-center my-4 mx-4 text-wrap max-w-xl">{sobre}</h5>
            </div>

            <hr className="border-gray-700 border-1 w-full" />

            <div className="flex justify-center gap-2 m-4">
                <Link to={linkedin}><LinkedinLogo size={48} weight='bold' /></Link>
                <Link to={github}><GithubLogo size={48} weight='bold' /></Link>
            </div>
        </div>
    </div>
  )
}

export default ContactCard