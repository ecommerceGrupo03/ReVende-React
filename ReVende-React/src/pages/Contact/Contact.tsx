import ContactCard from "../../components/contactCard/ContactCard"

const Contact = () => {
  return (
    <>
      <div className="my-10 flex content-center bg-lime-600 flex-col items-center justify-center">
        <h1 className="text-8xl text-white">Contato</h1>

        <h3 className="text-4xl text-white">Entre em contato com os desenvolvedores do website:</h3>

        <div className="justify-items-start text-2xl text-white my-12">
          <ContactCard
            nome="Fernando Lopes"
            sobre="Desenvolvedor Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/118869201?v=4"
            linkedin="https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/"
            github="https://github.com/plasmus777"
          />
        </div>
      </div>
    </>
  )
}

export default Contact