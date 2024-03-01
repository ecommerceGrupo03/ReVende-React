import ListaProduto from "../../components/produto/listaProduto/ListaProduto"

const Home = () => {
  return (
    <>
    <div className="py-10 flex content-center bg-[#F2F2F2] flex-col items-center justify-center">
      <h1 className="text-8xl text-black">Home</h1>

      <h3 className="text-4xl text-black">Bem-vindo ao Projeto ReVende!</h3>
      </div>

      <ListaProduto/>
</>
  )
}

export default Home