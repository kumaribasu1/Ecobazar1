
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import Button from '../../utills/Button'
import { Pagination, Autoplay, Navigation as SwiperNavigation } from 'swiper/modules'
import './style.css'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import ServiceFeatures from '../../Features/ServiceFeatures'
import FeaturedProducts from '../../Features/FeaturedProducts'
import OrganicStoreSection from '../../Features/OrganicStoreSection'
import FeatureSection from '../../Features/FeatureSection'
import Count from '../../utills/Count'
import Testimonial from '../../utills/Testimonial'
import BrandLogos from '../../utills/BrandLogos'
import Newsletter from '../../utills/Newsletter'

const Home = () => {
  return (
    <div>
      {/* Slider Section */}
      <div className="relative">
        <Swiper 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, SwiperNavigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper relative"
        >
          {[1,2,3].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-[url(/images/bg.png)] py-12 lg:py-9 pb-20 lg:pb-15 bg-no-repeat bg-center bg-cover relative">
                <div className="container px-5 lg:px-15 mx-auto">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 lg:gap-5">
                    <div className="flex justify-center">
                      <img 
                        src="images/fol-juri.png" 
                        alt="slide" 
                        className="w-full max-w-[280px] lg:max-w-full h-auto" 
                      />
                    </div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <h4 className='font-poppins font-[500] text-[12px] lg:text-[14px] leading-[100%] uppercase text-[var(--color-branding-success)]'>
                          Welcome to shopery
                      </h4>
                      <h2 className='font-poppins font-[600] mt-3 mb-[15px] text-[32px] lg:text-[60px] leading-[1.1] lg:leading-[100%] text-[var(--color-gray-scale-gray--900)]'>
                          Fresh & Healthy Organic Food
                      </h2>
                      <h4 className='font-poppins font-[400] text-[20px] lg:text-[32px] leading-[120%] text-[var(--color-gray-scale-gray--900)]'>
                          Sale up to <span className='text-[var(--color-branding-warning)] font-bold'>30% OFF</span>
                      </h4>
                      <p className='font-poppins font-[400] py-4 text-[14px] leading-[150%] text-[var(--color-gray-scale-gray---500)] max-w-[400px]'>
                          Free shipping on all your order. we deliver, you enjoy
                      </p>
                      <div className="mt-2">
                        <Link to="/shop">
                          <Button title="Shop now" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next-custom hidden lg:flex !z-50 right-10 w-[45px] h-[45px] rounded-full top-[50%] absolute bg-white items-center justify-center cursor-pointer transform -translate-y-1/2 shadow-md">
            <IoIosArrowRoundForward size={24} />
          </div>
          <div className="swiper-button-prev-custom hidden lg:flex !z-50 left-10 w-[45px] h-[45px] rounded-full top-[50%] absolute bg-white items-center justify-center cursor-pointer transform -translate-y-1/2 shadow-md">
            <IoIosArrowRoundBack size={24} />
          </div>
        </Swiper>
      </div>

      {/*baki gula */}
      <ServiceFeatures />
      <FeaturedProducts/>
      <OrganicStoreSection/>
      <FeatureSection/>
      <Count/>
      <Testimonial/>
      <BrandLogos/>
      <Newsletter/>
    </div>
  )
}

export default Home