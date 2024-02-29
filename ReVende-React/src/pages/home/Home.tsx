import ListaProduto from "../../components/produto/listaProduto/ListaProduto"

const Home = () => {
  return (
    <>
    <div className="py-10 flex content-center bg-lime-600 flex-col items-center justify-center">
      <h1 className="text-8xl text-white">Home</h1>

      <h3 className="text-4xl text-white">Bem-vindo ao Projeto ReVende!</h3>
      </div>

      <ListaProduto/>
</>
  )
}

export default Home