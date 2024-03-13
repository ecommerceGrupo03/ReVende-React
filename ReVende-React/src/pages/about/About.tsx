import encomendaFoto from '../../assets/encomenda.jpg';
import odsObjetivo12 from '../../assets/12ods.png';

const About = () => {
	return (
		<>
			<div className="relative flex pt-10 pb-5 justify-center lg:pb-10 lg:pt-16 w-full">
				<div className="flex flex-col px-4 lg:px-8 justify-center items-center w-full max-w-xl lg:max-w-screen-xl lg:flex-row lg:justify-between">
					<div className="max-w-xl lg:px-8 py-10 lg:py-0">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Revolucionando o consumo,
							<br className="hidden md:block" />
							sustentando o futuro
						</h2>
						<p className="text-base text-gray-700 md:text-lg">
							Nossa missão é contribuir para o desenvolvimento sustentável
							global, alinhando nossas operações com o Objetivo 12 da ODS - ONU.
							Através do nosso e-commerce, buscamos promover práticas comerciais
							responsáveis e conscientizar nossos clientes sobre a importância
							da sustentabilidade em suas escolhas de compra, troca e
							reutilização de insumos. Ao escolher ReVende, você está apoiando
							não apenas uma experiência de compra conveniente, mas também um
							futuro mais sustentável para o nosso planeta e para as gerações
							futuras.
						</p>
					</div>
					<div className="lg:w-1/2">
						<img
							className="object-cover rounded-xl lg:w-full lg:h-full shadow-lg sm:h-96"
							src={encomendaFoto}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="relative flex pb-10 pt-5 justify-center lg:pt-5">
				<div className="flex flex-col justify-center items-center w-full max-w-xl px-4 lg:px-8 lg:max-w-screen-xl  lg:flex-row lg:justify-between">
					<div className="max-w-xl mb-10">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Assegurar padrões de produção e de consumo sustentáveis
							{/* Consumo e Produção Sustentáveis */}
						</h2>
						<p className="text-base text-gray-700 md:text-lg">
							Aborda a temática da produção e consumo sustentáveis,
							concentrando-se em iniciativas tanto globais quanto locais. Isso
							envolve a promoção do uso eficiente dos recursos naturais, a
							minimização do desperdício de alimentos e a gestão responsável de
							resíduos químicos. Este objetivo também engloba o cuidado com os
							resíduos sólidos e a redução da emissão de poluentes.
							{/* São apresentadas oportunidades para a adoção de práticas sustentáveis tanto por parte das empresas quanto pela administração pública, destacando a importância de realizar compras públicas de forma ambientalmente responsável. */}
						</p>
					</div>
					<div className="px-8">
    					<a href="https://brasil.un.org/pt-br/sdgs/12" target="_blank" rel="noopener noreferrer">
							<img
								className="container object-scale-down h-48 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
								src={odsObjetivo12}
								alt="Imagem ODS 12"
							/>
						</a>
					</div>
					{/* <div className="flex justify-center inset-y-0 w-full max-w-xl px-4 pb-16 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0"> */}
				</div>
			</div>
		</>
	);
};

export default About;
