
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';

import logo1 from "../assets/Client-First - IMAGES/Logo 1.svg";
import logo2 from "../assets/Client-First - IMAGES/Logo 2.svg";
import logo3 from "../assets/Client-First - IMAGES/Logo 3.svg";
import logo4 from "../assets/Client-First - IMAGES/Logo 4.svg";
import logo5 from "../assets/Client-First - IMAGES/Logo 5.svg";
import testi1 from "../assets/Client-First - IMAGES/Image.svg";
import testi2 from "../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import JoinTeam from './JoinTeam';
import ArrowButton from './button';



const Testimonials = () => {
    const [buttonVisible, setButtonVisible] = useState(true);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const handleClick = (direction) => {
        setButtonVisible(false);
        setTimeout(() => {
            if (direction === 'left') {
                prevRef.current.click();
            } else {
                nextRef.current.click();
            }
            setButtonVisible(true);
        }, 300);
    };
    useEffect(() => {
       
        if (prevRef.current && nextRef.current) {
            prevRef.current.classList.add('swiper-button-prev');
            nextRef.current.classList.add('swiper-button-next');
        }
    }, []);

    const logos = [logo5, logo1, logo2, logo3, logo4, logo5];

    return (
        <div className="">
        
            <div className="container mx-auto py-10 px-6 lg:px-16 text-center">
                <div className="flex justify-between items-center my-4 gap-6 flex-wrap">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-8 w-auto" />
                    ))}
                </div>
            </div>

            
            <div className="py-16">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-yellow-50 p-4 md:p-6 lg:p-20">
                     
                        <div className="space-y-4 md:w-2/3">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase">Testimonials</h3>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                What people say about our blog
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                        </div>

                       
                        <div className="relative">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onSwiper={(swiper) => {
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                        swiper.navigation.update();
                                    });
                                }}
                            >
                              
                                <SwiperSlide>
                                    <div className="flex flex-col gap-4 md:p-6 rounded-lg shadow-md">
                                        <p className="text-gray-800">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="flex items-center gap-4 mt-4">
                                            <img
                                                src={testi1}
                                                alt="User"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-800">Jonathan Vallem</p>
                                                <p className="text-sm text-gray-500">New York, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                              
                                <SwiperSlide>
                                    <div className="flex flex-col gap-4 md:p-6 rounded-lg">
                                        <p className="text-gray-800">
                                            This blog has truly been an inspiration for me. I’ve learned so much and
                                            improved my skills!
                                        </p>
                                        <div className="flex items-center gap-4 mt-4">
                                            <img
                                                src={testi2}
                                                alt="User"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-800">Sarah Lee</p>
                                                <p className="text-sm text-gray-500">California, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className='absolute top-[103%] left-[10%] md:top-[88%] md:left-[65%] my-20 md:my-0'>
                                <div ref={prevRef} className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10">
                                    <ArrowButton direction="left" onClick={() => handleClick('left')}
                                        visible={buttonVisible} />
                                </div>
                                <div ref={nextRef} className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                                    <ArrowButton direction="right" onClick={() => handleClick('right')}
                                        visible={buttonVisible} />
                                </div>
                           </div>
                          
                        </div>
                    </div>
                </div>
            </div>

           
            <JoinTeam />
        </div>
    );
};

export default Testimonials;
