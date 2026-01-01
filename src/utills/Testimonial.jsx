import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  const testimonials = [
    { id: 1, name: "Robert Fox", role: "Customer", image: "https://randomuser.me/api/portraits/men/1.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 2, name: "Dianne Russell", role: "Customer", image: "https://randomuser.me/api/portraits/women/2.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 3, name: "Eleanor Pena", role: "Customer", image: "https://randomuser.me/api/portraits/men/3.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 4, name: "Guy Hawkins", role: "Customer", image: "https://randomuser.me/api/portraits/men/4.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 5, name: "Brooklyn Simmons", role: "Customer", image: "https://randomuser.me/api/portraits/women/5.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 6, name: "Jane Cooper", role: "Customer", image: "https://randomuser.me/api/portraits/women/6.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 7, name: "Leslie Alexander", role: "Customer", image: "https://randomuser.me/api/portraits/men/7.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 8, name: "Jenny Wilson", role: "Customer", image: "https://randomuser.me/api/portraits/women/8.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 9, name: "Cameron Williamson", role: "Customer", image: "https://randomuser.me/api/portraits/men/9.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 },
    { id: 10, name: "Kristin Watson", role: "Customer", image: "https://randomuser.me/api/portraits/women/10.jpg", text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.", rating: 5 }
  ];

  return (
    <section className="bg-[#E4E0E8] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#1A1A1A]">
            Client Testimonial
          </h2>
          
          <div className="flex gap-3">
            <button className="testimonial-prev w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00b207] flex items-center justify-center text-white shadow-md hover:bg-white hover:text-[#00b207] hover:border hover:border-[#00b207] transition-all cursor-pointer">
              <ArrowLeft size={22} />
            </button>
            <button className="testimonial-next w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00b207] flex items-center justify-center text-white shadow-md hover:bg-white hover:text-[#00b207] hover:border hover:border-[#00b207] transition-all cursor-pointer">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm h-[280px] flex flex-col border border-gray-50">
                <div className="mb-4">
                  <Quote size={30} className="text-[#00b207] opacity-25" fill="currentColor" />
                </div>

                <p className="text-[#4D4D4D] text-[14px] leading-relaxed mb-6 flex-grow italic">
                  "{item.text}"
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-11 h-11 rounded-full border border-gray-100 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-[15px]">{item.name}</h4>
                      <p className="text-gray-400 text-[12px]">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-[#FF8A00] text-[16px]">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;