import React from 'react';
import { anisha, ali, richard, shanai } from '../images';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {

    const testimonialList = [
        {
            name: 'Anisha Li',
            image: anisha,
            saying: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'
        },
        {
            name: 'Ali Bravo',
            image: ali,
            saying: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.'
        },
        {
            name: 'Richard Watts',
            image: richard,
            saying: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'
        },
        {
            name: 'Shanai Gough',
            image: shanai,
            saying: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'
        }
    ]

    return (
        <section>
            <div className=' px-5 mx-auto mt-32 text-center'>
                <h2 className='text-4xl font-bold text-center'>
                    What they’ve said
                </h2>

                <div className='flex flex-col mt-16 lg:mt-24 md:flex-row md:space-x-6'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper pt-8 w-full pb-12"
                        breakpoints={{
                            1366 : {
                                "slidesPerView": 3,
                                "spaceBetween" : 30,
                                "centeredSlides" : false
                            }
                        }}
                        >
                        {
                            testimonialList.map(item => {
                                return (

                                    <SwiperSlide key={item.name} className='flex flex-col items-center p-6 space-y-6 rounded-sm bg-veryLightGray md:w-1/3'>
                                        <img src={item.image} className='w-16 -mt-14' alt="person" />
                                        <h5 className='text-lg font-bold'>
                                            {item.name}

                                        </h5>
                                        <p className='text-darkGrayishBlue text-sm'>
                                            "{item.saying}"
                                        </p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
                <div className="mb-16 mt-8">
                    <button className='block p-3 px-6 pt-2 
                    mx-auto text-white bg-brightRed shadow-brightRedLight shadow-md  rounded-full baseline hover:bg-brightRedLight transition-all'>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
