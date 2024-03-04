import ContactCard from '../../components/contactCard/ContactCard';

const Contact = () => {
	return (
		<>
			<div className="py-16 flex content-center bg-[#F2F2F2] flex-col items-center justify-center">
				<h1 className="text-6xl text-[#1C3240]">Contato</h1>

				<h3 className="text-2xl text-[#1C3240] mt-10 mb-20">
					Entre em contato com os desenvolvedores do website:
				</h3>

				<div className="justify-items-start text-2xl text-gray-900 my-5">
					<ContactCard
						nome="Eloisa Marin"
						cargo="Desenvolvedora Java Full-Stack Júnior"
						sobre ="Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende."
						imagem="https://avatars.githubusercontent.com/u/74751076?s=60&v=4"
						linkedin="https://www.linkedin.com/in/eloisamarin/"
						github="https://github.com/eloisamarin"
					/>

					<ContactCard
						nome="Fernando Lopes"
						cargo="Desenvolvedor Java Full-Stack Júnior"
						sobre="Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende"
						imagem="https://avatars.githubusercontent.com/u/118869201?v=4"
						linkedin="https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/"
						github="https://github.com/plasmus777"
					/>

					<ContactCard
						nome="Jaqueline Paula"
						cargo="Desenvolvedora Java Full-Stack Júnior"
						sobre=" Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende"
						imagem="https://avatars.githubusercontent.com/u/87137086?v=4"
						linkedin="https://www.linkedin.com/in/jaquelinepaula/"
						github="https://github.com/JaquePaula"
					/>

					<ContactCard
						nome="Leonardo Duarte"
						cargo="Desenvolvedor Java Full-Stack Júnior"
						sobre="Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende"
						imagem="https://avatars.githubusercontent.com/u/133834707?v=4"
						linkedin="https://www.linkedin.com/in/leonardo-rodrigues-de-sousa-duarte-714bba260/"
						github="https://github.com/LeoDuarte37"
					/>

					<ContactCard
						nome="Marina Pereira"
						cargo="Desenvolvedora Java Full-Stack Júnior"
						sobre="Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende"
						imagem="https://avatars.githubusercontent.com/u/146123948?s=60&v=4"
						linkedin="https://www.linkedin.com/in/marina-alexandre-pereira/"
						github="https://github.com/marina-mmap"
					/>

					<ContactCard
						nome="Marília Tostes"
						cargo="Desenvolvedora Java Full-Stack Júnior"
						sobre="Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende"
						imagem="https://avatars.githubusercontent.com/u/133540781?v=4"
						linkedin="https://www.linkedin.com/in/marilia-tostes/"
						github="https://github.com/mariliatostesdev"
					/>

					<ContactCard
						nome="Rafael Carmo"
						cargo="Desenvolvedor Java Full-Stack Júnior"
						sobre="Olá, meu nome é Jaqueline e tenho 25 anos. Sou graduada em Gestão Ambiental, com recebimento de duas Láureas Acadêmicas. Estou em transição de carreira para Desenvolvedora Full Stack Java Jr. e estou realizando técnico em Desenvolvimento de Sistemas na ETEC.  Já desenvolvi um Projeto de Blog Pessoal Individual e o Revende"
						imagem="https://avatars.githubusercontent.com/u/151798963?s=60&v=4"
						linkedin="https://www.linkedin.com/in/rpimentelcarmo"
						github="https://github.com/Rflpmt"
					/>
				</div>
			</div>
		</>
	);
};

export default Contact;
