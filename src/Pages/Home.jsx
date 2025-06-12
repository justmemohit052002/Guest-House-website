import React, { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navbar from '../components/Navbar';
import slide1 from '../assets/king-sukh-hotel.png';
import slide2 from '../assets/slide-2.jpg';
import slide3 from '../assets/slide-3.jpg';


const Slide = memo(
    ({ backgroundColor, backgroundImage, title, subtitle, buttonText }) => (
        <div
            id="home"
            className="h-screen relative overflow-x-hidden bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0" />


            <div className="z-10 text-center px-8 flex flex-col justify-center items-center">
                <h5 className="gilda-display-regular text-white text-md md:text-xl lg:text-xl mb-4 mt-8">
                    {title}
                </h5>
                <h1 className="gilda-display-regular text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                    {subtitle}
                </h1>
                <button className="gilda-display-regular text-white border-white border-2 bg-transparent px-6 py-2 md:px-8 md:py-3 mt-10 md:mt-14 hover:bg-white hover:text-black transition-all">
                    {buttonText}
                </button>
            </div>
        </div>
    )
);

function Home() {
    return (
        <div className="relative w-screen h-screen overflow-x-hidden">

            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>


            <Carousel
                autoPlay
                infiniteLoop
                transitionTime={1000}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={false}
            >
                <Slide
                    backgroundColor="red"
                    backgroundImage={slide1}
                    title="UNIQUE PLACE IN INDIA"
                    subtitle="LIFE ENJOY WITH THE GREAT MOMENTS"
                    buttonText="BOOK ROOMS"
                />
                <Slide
                    backgroundColor="blue"
                    backgroundImage={slide2}
                    title="FEEL THE REAL LUXURY"
                    subtitle="LUXURY IS IN YOUR HAND"
                    buttonText="BOOK ROOMS"
                />
                <Slide
                    backgroundColor="green"
                    backgroundImage={slide3}
                    title="PRIVACY IS OUR PRIORITY"
                    subtitle="PRIVATE PLACE FOR YOU"
                    buttonText="BOOK ROOMS"
                />
            </Carousel>
        </div>
    );
}

export default Home;
