import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<NavBar />
					<div className="bg-lime-600 size-auto">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/about" element={<About />} />
							<Route path="/home" element={<Home />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
