import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
    <div className='bg-lime-600 size-auto'>
      <NavBar/>
      <Home/>
      <Footer/>
      </div>
    </>
  )
}

export default App
