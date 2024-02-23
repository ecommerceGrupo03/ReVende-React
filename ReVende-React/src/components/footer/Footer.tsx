import { GithubLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
function Footer() {

    return ( 
        <>
            <div className="flex justify-center bg-[#308C50] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>ReVende | 2024</p>
                    <p className='text-lg'>Acesse os arquivos do projeto:</p>
                    <div className='flex gap-2'>
                        <Link to="https://github.com/ecommerceGrupo03"><GithubLogo size={48} weight='bold'/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

//import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
//<LinkedinLogo size={48} weight='bold' />