import { Link } from "react-router-dom"

function NavBar() {
 
    return (
      <>
       <div className='w-full bg-[#308C50] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <div className='text-2xl font-bold uppercase'>ReVende</div>
  
              <div className='flex gap-4'>
                <Link to='/home' className='hover:underline'>Home</Link>
                <Link to='/contact' className='hover:underline'>Contact</Link>
                <Link to='/about' className='hover:underline'>About</Link>
                <Link to='/login' className='hover:underline'>Login</Link>
                <div className='hover:underline'>Produtos</div> 
                <div className='hover:underline'>Categorias</div>
                <div className='hover:underline'>Perfil</div>
                <div className='hover:underline'>Sair</div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default NavBar