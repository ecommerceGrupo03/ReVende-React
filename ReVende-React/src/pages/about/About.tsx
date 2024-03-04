import encomendaFoto from "../../assets/encomenda.jpg";
import odsObjetivo12 from "../../assets/12ods.png";

const About = () => {
  return (
    <>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Revolucionando o consumo,
                <br className="hidden md:block" />
                sustentando o futuro
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Nossa missão é contribuir para o desenvolvimento sustentável
                global, alinhando nossas operações com o Objetivo 12 da ODS -
                ONU. Através do nosso e-commerce, buscamos promover práticas
                comerciais responsáveis e conscientizar nossos clientes sobre a
                importância da sustentabilidade em suas escolhas de compra,
                troca e reutilização de insumos. Ao escolher ReVende, você está
                apoiando não apenas uma experiência de compra conveniente, mas
                também um futuro mais sustentável para o nosso planeta e para as
                gerações futuras.
              </p>
            </div>
          </div>
        </div>
        <div className="marker: inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute lg:top-12 lg:right-6 xl:px-0">
          <img
            className="object-cover rounded-xl  lg:w-full lg:h-full shadow-lg sm:h-96"
            src={encomendaFoto}
            alt=""
          />
        </div>
      </div>

      <div className="relative flex flex-col pt-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-end w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Assegurar padrões de produção e de consumo sustentáveis
                {/* Consumo e Produção Sustentáveis */}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Aborda a temática da produção e consumo sustentáveis,
                concentrando-se em iniciativas tanto globais quanto locais. Isso
                envolve a promoção do uso eficiente dos recursos naturais, a
                minimização do desperdício de alimentos e a gestão responsável
                de resíduos químicos. Este objetivo também engloba o cuidado com
                os resíduos sólidos e a redução da emissão de poluentes.
                {/* São apresentadas oportunidades para a adoção de práticas sustentáveis tanto por parte das empresas quanto pela administração pública, destacando a importância de realizar compras públicas de forma ambientalmente responsável. */}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center inset-y-0 left-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="container object-scale-down wh-48 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={odsObjetivo12}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <div className="py-10 flex content-center bg-lime-600 flex-col items-center justify-center">
        <h1 className="text-8xl text-white mt-20">Sobre o Projeto</h1>

        <p className="text-4xl text-white mt-16 mx-16">Este projeto é um E-commerce de produtos usados ou sem uso, tendo como inspiração o Objetivo de Desenvolvimento Sustentável (ODS) número 12 da ONU- Consumo e Produção Sustentáveis.</p>

        <p className="text-4xl text-white mt-10 mb-40 mx-16">Nosso objetivo é criar uma plataforma que facilite a conexão entre pessoas que desejam descartar ou vender materiais usados ou sem uso e pessoas interessadas em comprá-los.</p>

        <div className="grid justify-items-start text-2xl text-white">
          
        </div>
      </div> */
}
{
  /* <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Apply Now
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div> */
}
