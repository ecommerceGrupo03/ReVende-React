import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ListaProduto from './components/produto/listaProduto/ListaProduto'
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria'
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria'

function App() {

  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <div className='bg-lime-600 size-auto'>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produtos" element={<ListaProduto />} />
                <Route path="/categorias" element={<ListaCategoria />} />
                <Route path="/formularioCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
