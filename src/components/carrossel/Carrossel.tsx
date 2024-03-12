import {Carousel,initTWE} from "tw-elements";
initTWE({ Carousel });

import Carrossel1 from "../../assets/Carrossel1.png";
import Carrossel2 from "../../assets/Carrossel2.png";
import Carrossel3 from "../../assets/Carrossel3.png";
function Carrossel() {

  return (
    <div
      id="carouselExampleIndicators"
      className="relative w-full px-28"
      data-twe-carousel-init=""
      data-twe-ride="carousel"
    >
      {/*Carousel indicators*/}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators=""
      >
        <button
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide-to={0}
          data-twe-carousel-active=""
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide-to={1}
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide-to={2}
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        />
      </div>
      {/*Carousel items*/}
      <div className="relative overflow-hidden  after:clear-both after:block after:content-['']">
        {/*First item*/}
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item=""
          data-twe-carousel-active=""
        >
          <img
            src={Carrossel1}
            className="block w-full"
            alt="Wild Landscape"
          />


        </div>

        {/*Second item*/}
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item=""
        >
          <img
            src={Carrossel2}
            className="block w-full"
            alt="Eletrônicos banner"
          />
        </div>

        {/*Third item*/}
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item=""
        >
          <img
            src={Carrossel3}
            className="block w-full"
            alt="Eletrônicos banner"
          />
        </div>
      </div>
      {/*Carousel controls - prev item*/}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[18%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleIndicators"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      {/*Carousel controls - next item*/}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[18%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleIndicators"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}
export default Carrossel;
