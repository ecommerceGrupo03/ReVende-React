import ContactCard from '../../components/contactCard/ContactCard';
import fotoJaque from '../../assets/fotoJaque.jpeg';
import fotoMarilia from '../../assets/fotoMarilia.png';
import fotoEloisa from '../../assets/fotoEloisa.jpeg';
import fotoMarina from '../../assets/fotoMarina.jpg';
import fotoRafael from '../../assets/fotoRafael.jpg';
import fotoLeonardo from '../../assets/fotoLeonardo.jpg';

const Contact = () => {
  return (
    <>
      <div className="py-16 flex bg-[#F2F2F2] flex-col items-center justify-center">
        <h1 className="text-6xl text-[#1C3240] mb-16">Contato</h1>

        {/* <h3 className="text-2xl text-[#1C3240] mt-10 mb-16 shadow-md">Desenvolvedores</h3> */}

        <div className="flex-col items-center text-2xl text-gray-900 my-5">
          <ContactCard
            nome="Eloisa Marin"
            cargo="Desenvolvedora Java Full-Stack Júnior"
            sobre="Olá, meu nome é Eloisa Marin e sou graduanda em Engenharia de Software. Desenvolvi projetos como sistemas para conta bancária, farmácia, blog pessoal e até mesmo um e-commerce. Isso me proporcionou a oportunidade de trabalhar em todas as fases do desenvolvimento, desde o back-end, banco de dados até o front-end."
            imagem={fotoEloisa}
            linkedin="https://www.linkedin.com/in/eloisamarin/"
            github="https://github.com/eloisamarin"
          />

          <ContactCard
            nome="Fernando Lopes"
            cargo="Desenvolvedor Java Full-Stack Júnior"
            sobre="Interessado em tecnologias desde jovem e com habilidades em banco de dados MySQL, Spring Boot, máquinas virtuais, linguagens de programação como python e c, React e mais, busco um cargo como desenvolvedor fullstack júnior para demonstrar minhas habilidades."
            imagem="https://avatars.githubusercontent.com/u/118869201?v=4"
            linkedin="https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/"
            github="https://github.com/plasmus777"
          />

          <ContactCard
            nome="Jaqueline Paula"
            cargo="Desenvolvedora Java Full-Stack Júnior"
            sobre="Sou Gestora Ambiental, com recebimento de Láureas Acadêmicas. Estou em transição de carreira e estou cursando Desenvolvimento de Sistemas na ETEC.  Já desenvolvi o Front-end e back-end de um Blog Pessoal e o Revende da Generation Brasil. Tenho prazer em aprender novos conteúdos e utilizá-los para a resolução de problemas."
            imagem={fotoJaque}
            linkedin="https://www.linkedin.com/in/jaquelinepaula/"
            github="https://github.com/JaquePaula"
          />

          <ContactCard
            nome="Leonardo Duarte"
            cargo="Desenvolvedor Java Full-Stack Júnior"
            sobre="Há um ano iniciei os estudos de nível técnico no curso de Desenvolvimento de Sistemas pela Etec no período
						noturno, além de estar finalizando atualmente o Bootcamp Full Stack Java Web oferecido pela Generation Brasil.  Amo o que estudo e meu objetivo após o certificado técnico é a faculdade de Engenharia de
						Software ou tecnólogo em Análise e Desenvolvimento de Sistemas."
            imagem={fotoLeonardo}
            linkedin="https://www.linkedin.com/in/leonardo-rodrigues-de-sousa-duarte-714bba260/"
            github="https://github.com/LeoDuarte37"
          />

          <ContactCard
            nome="Marina Pereira"
            cargo="Desenvolvedora Java Full-Stack Júnior"
            sobre="Sou a Marina Pereira e tenho formação em Gestão de Negócios e Inovação e Gestão Financeira pela Fatec Sebrae. Trabalhei na área de políticas públicas de inovação e estou em transição de carreira para Desenvolvedora Full Stack Java React Jr. Como principais projetos, elaborei Blog Pessoal e projeto ReVende como conclusão do Bootcamp da Generation."
            imagem={fotoMarina}
            linkedin="https://www.linkedin.com/in/marina-alexandre-pereira/"
            github="https://github.com/marina-mmap"
          />

          <ContactCard
            nome="Marília Tostes"
            cargo="Desenvolvedora Java Full-Stack Júnior"
            sobre="Olá! Sou a Marília, formada com honras em Comércio Exterior, e pós-graduada em Tradução-Inglês, com 2 anos de experiência. Sou Dev Full Stack em formação desde 2022, e as principais tecnologias que utilizo são HTML/CSS/JS/React, Java/Spring, MySQL, Git e GitHub. Fique à vontade para ver meus projetos no GitHub abaixo, que incluem projetos do Bootcamp Generation, como uma fármacia e o próprio ReVende."
            imagem={fotoMarilia}
            linkedin="https://www.linkedin.com/in/marilia-tostes/"
            github="https://github.com/mariliatostesdev"
          />

          <ContactCard
            nome="Rafael Carmo"
            cargo="Desenvolvedor Java Full-Stack Júnior"
            sobre="Olá sou Rafael Carmo, tenho 26 anos e sou um barista em Transição de carreira para Desenvolvedor Full stack Java Jr, de um cafezinho para o outro. Com um olhar curioso e uma paixão pela resolução de problemas, estou mergulhando fundo na linguagem ,buscando novos desafios e oportunidades de crescimento profissional."
            imagem={fotoRafael}
            linkedin="https://www.linkedin.com/in/rpimentelcarmo"
            github="https://github.com/Rflpmt"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
