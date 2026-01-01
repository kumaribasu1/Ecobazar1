import React from 'react';
import { IoIosArrowRoundForward, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../utills/Button"; 

// Swiper slider imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const OrganicStoreSection = () => {
  const categories = [
    { id: 1, name: "Vegetables", count: "165 Products", icon: "🥦" },
    { id: 2, name: "Fresh Fruit", count: "137 Products", icon: "🍎" },
    { id: 3, name: "Fish", count: "34 Products", icon: "🐟" },
    { id: 4, name: "Meat", count: "165 Products", icon: "🥩" },
    { id: 5, name: "Water and Drinks", count: "48 Products", icon: "🥤" },
    { id: 6, name: "Snacks", count: "165 Products", icon: "🍿" },
    { id: 7, name: "Diets & Nutrition", count: "165 Products", icon: "🥗" }, 
    { id: 8, name: "Dairy & Eggs", count: "165 Products", icon: "🥚" },
    { id: 9, name: "Bakery", count: "165 Products", icon: "🍞" },
    { id: 10, name: "Cooking", count: "165 Products", icon: "🍯" },
    { id: 11, name: "Frozen Foods", count: "165 Products", icon: "❄️" },
    { id: 12, name: "Others", count: "165 Products", icon: "🍱" },
  ];

  return (
    <div 
      className="w-full py-20 relative bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ backgroundColor: "#F2F7F2" }}
    >
      {/* Background vectors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <img src="https://path-to-your-vector-leaf.png" className="absolute top-10 left-[-20px] w-32 md:w-40 rotate-45" alt="" />
         <img src="https://path-to-your-vector-leaf.png" className="absolute bottom-10 right-[-20px] w-32 md:w-40 -rotate-12" alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Categories Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex justify-between items-center mb-8 md:mb-10 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 md:mb-0">Shop by Top Categories</h2>
            <button className="flex items-center text-[#00B207] font-semibold hover:underline text-sm">
              View All <IoIosArrowRoundForward className="text-2xl ml-1" />
            </button>
          </div>

          <div className="relative">
            <button className="cat-prev absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white border p-2 md:p-3 rounded-full shadow-md hover:bg-[#00B207] hover:text-white transition-all">
              <IoIosArrowBack size={18} />
            </button>
            <button className="cat-next absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white border p-2 md:p-3 rounded-full shadow-md hover:bg-[#00B207] hover:text-white transition-all">
              <IoIosArrowForward size={18} />
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={6}
              navigation={{ prevEl: '.cat-prev', nextEl: '.cat-next' }}
              breakpoints={{
                320: { slidesPerView: 2 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div className="flex flex-col items-center justify-center p-4 md:p-6 border border-gray-100 rounded-xl bg-white transition-all duration-300 hover:border-[#00B207] hover:shadow-lg h-[180px] md:h-[210px] cursor-pointer group">
                    <span className="text-4xl md:text-5xl mb-2 md:mb-4 group-hover:scale-105 transition-transform">{cat.icon}</span>
                    <h3 className="text-[#1A1A1A] font-semibold text-center text-xs md:text-sm group-hover:text-[#00B207]">
                      {cat.name}
                    </h3>
                    <p className="text-[#999999] text-[11px] md:text-[13px] mt-1">{cat.count}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Banner Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 lg:pl-16">
          
          {/* Images */}
          <div className="flex-1 flex gap-3 h-[400px] md:h-[500px] w-full items-start">
            <div className="w-[45%] h-[65%] md:h-[70%] rounded-2xl overflow-hidden shadow-sm">
              <img src="/images/man-1.png" className="w-full h-full object-cover" alt="Farmer" />
            </div>

            <div className="w-[60%] h-[70%] md:h-[75%] rounded-2xl overflow-hidden shadow-sm">
              <img src="/images/man-2.png" className="w-full h-full object-cover" alt="Farmer picking fruit" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 pt-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] mb-6 md:mb-8">
              100% Trusted <br /> Organic Food Store
            </h2>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
              <div className="flex items-start gap-3 md:gap-4">
                <FaCheckCircle className="text-[#00B207] text-[20px] md:text-[24px] mt-1 shrink-0" />
                <div>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A]">Healthy & natural food for lovers of healthy food.</h4>
                  <p className="text-[#666666] text-[14px] md:text-[15px] mt-1 md:mt-2 leading-relaxed max-w-[100%] md:max-w-[480px]">
                    Ut quis tempus erat. Phasellus euismod bibendum magna non tristique.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <FaCheckCircle className="text-[#00B207] text-[20px] md:text-[24px] mt-1 shrink-0" />
                <div>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A]">Every day fresh and quality products for you.</h4>
                  <p className="text-[#666666] text-[14px] md:text-[15px] mt-1 md:mt-2 leading-relaxed max-w-[100%] md:max-w-[480px]">
                    Maecenas vehicula a justo quis laoreet. Sed in placerat nibh.
                  </p>
                </div>
              </div>
            </div>

            {/* Shop Now Button */}
            <div className="w-full flex justify-center lg:justify-start">
              <Button title="Shop Now" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrganicStoreSection;
