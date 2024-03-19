import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import CarrosselImg1 from "../../assets/Carrossel1.png";
import CarrosselImg2 from "../../assets/Carrossel2.png";
import CarrosselImg3 from "../../assets/Carrossel3.png";

function Carrossel2() {
    const slides = [CarrosselImg1, CarrosselImg2, CarrosselImg3];

    const [currentIndex, setCurrentIndex] = useState(0);

    const [shouldUpdate, setShouldUpdate] = useState(false);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        if(!shouldUpdate){
            setShouldUpdate(true);
            setInterval(() => {
                nextSlide();
                setShouldUpdate(false);
            }, 5000);
        }
    }, [shouldUpdate]);

    return (
        <div className='h-[276px] w-full m-auto pb-16 px-4 relative group sm:h-[376px] md:h-[376px] lg:h-[476px] xl:h-[476px] 2xl:h-[576px]'>
            <div
                data-hs-carousel='{
                    "loadingClasses": "opacity-0",
                    "isAutoPlay": true
                  }'
                onClick={prevSlide}
                style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                className='hs-carousel-slide w-full h-full bg-center bg-contain bg-no-repeat duration-500 auto'
            >
                {/* Left Arrow */}
                <div className='hidden group-hover:hidden h-full absolute top-[45%] -translate-x-0 translate-y-[-45%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={25} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:hidden absolute top-[45%] -translate-x-0 translate-y-[-45%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={25} />
                </div></div>

            <div className='flex top-4 justify-center pt-4'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrossel2;