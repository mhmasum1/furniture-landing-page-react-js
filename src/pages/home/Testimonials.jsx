import React from 'react'
import Rating from '../../components/Rating';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/review';

const Testimonials = () => {
    return (
        <section className='max-w-screen-2xl container mx-auto px-8'>
            <div className='text-center mb-12'>
                <h3 className=' uppercase text-lg font-semibold text-primary mb-4'>Testimonials</h3>
                <h2 className=' capitalize text-4xl font-bold mb-4 '>Our Client Reviews</h2>
            </div>

            {/* Review carts */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(${review.coverImg})` }}>
                            <div className=' md:h-[547px] flex justify-center items-center mb-4 '  >
                                <div className='mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative'>
                                    <img className='size-20 absolute -top-10 ring-2 ring-primary object-cover rounded-full left-1/2 -translate-x-1/2' src={review.image} alt="" />
                                    <div className='text-center mt-16'>
                                        <h3 className=' text-lg font-semibold dark:text-black'> {review.name}</h3>
                                        <p className='mb-3 dark:text-black'>Verified Customer</p>
                                        <p className='text-gray-500 dark:text-black mb-4'>{review.review}</p>
                                        <div className='w-full mx-auto mb-2 flex items-center justify-center text-center'>
                                            <Rating rating={review.rating}></Rating>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </section>
    )
}

export default Testimonials