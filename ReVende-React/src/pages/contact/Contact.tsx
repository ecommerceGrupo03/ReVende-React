import ContactCard from "../../components/contactCard/ContactCard"

const Contact = () => {
  return (
    <>
      <div className="py-10 flex content-center bg-lime-600 flex-col items-center justify-center">
        <h1 className="text-8xl text-white mt-20">Contato</h1>

        <h3 className="text-4xl text-white mt-10 mb-40">Entre em contato com os desenvolvedores do website:</h3>

        <div className="justify-items-start text-2xl text-white my-10">
          <ContactCard
            nome="Eloísa Marin"
            sobre="Desenvolvedora Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/74751076?s=60&v=4"
            linkedin="https://www.linkedin.com/in/eloisamarin/"
            github="https://github.com/eloisamarin"
          />

          <ContactCard
            nome="Fernando Lopes"
            sobre="Desenvolvedor Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/118869201?v=4"
            linkedin="https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/"
            github="https://github.com/plasmus777"
          />

          <ContactCard
            nome="Jaqueline Paula"
            sobre="Desenvolvedora Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/87137086?v=4"
            linkedin="https://www.linkedin.com/in/jaquelinepaula/"
            github="https://github.com/JaquePaula"
          />

          <ContactCard
            nome="Leonardo Duarte"
            sobre="Desenvolvedor Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/133834707?v=4"
            linkedin="https://www.linkedin.com/in/leonardo-rodrigues-de-sousa-duarte-714bba260/"
            github="https://github.com/LeoDuarte37"
          />

          <ContactCard
            nome="Marina Pereira"
            sobre="Desenvolvedora Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/146123948?s=60&v=4"
            linkedin="https://www.linkedin.com/in/marina-alexandre-pereira/"
            github="https://github.com/marina-mmap"
          />

          <ContactCard
            nome="Marília Tostes"
            sobre="Desenvolvedora Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/133540781?v=4"
            linkedin="https://www.linkedin.com/in/marilia-ribeiro-tostes/"
            github="https://github.com/mariliatostesdev"
          />

          <ContactCard
            nome="Rafael Carmo"
            sobre="Desenvolvedor Java Full-Stack Júnior"
            imagem="https://avatars.githubusercontent.com/u/151798963?s=60&v=4"
            linkedin="https://www.linkedin.com"
            github="https://github.com/Rflpmt"
          />
        </div>
      </div>
    </>
  )
}

export default Contact