import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Heart, Eye, Star, MoveRight } from 'lucide-react'; 
import Button from "../../utills/Button";
import Newsletter from "../../utills/Newsletter"; 

const CustomBagIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M6.5 8H4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8H17.5M6.5 8V7C6.5 3.96243 8.96243 1.5 12 1.5C15.0376 1.5 17.5 3.96243 17.5 7V8M6.5 8H17.5" 
      stroke="currentColor" 
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const Shop = () => {
  const [activeId, setActiveId] = useState(null);
  const [totalSeconds, setTotalSeconds] = useState(2 * 60 * 60 + 18 * 60 + 46);


  useEffect(() => {
    if (totalSeconds <= 0) return;
    const timer = setInterval(() => {
      setTotalSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [totalSeconds]);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;


  const products = [
    { id: 1, name: "Green Lettuce", price: "09.00", rating: 4, image: "/images/product-12.png" },
    { id: 2, name: "Red Tomatos", price: "9.00", rating: 4, image: "/images/product-11.png" },
    { id: 3, name: "Chanise Cabbage", price: "14.99", rating: 4, image: "/images/product-2.png" },
    { id: 4, name: "Eggplant", price: "34.00", rating: 4, image: "/images/product-9.png" },
    { id: 5, name: "Green Capsicum", price: "14.99", rating: 4, image: "/images/product -3.png" },
    { id: 6, name: "Okra", price: "14.99", rating: 4, image: "/images/product -4.png" },
    { id: 7, name: "Surjapur Mango", price: "34.00", rating: 5, image: "/images/product-5.png" },
    { id: 8, name: "Fresh Cauliflower", price: "12.00", rating: 4, image: "/images/product-7.png" },
    { id: 9, name: "Fresh Indian Malta", price: "20.00", rating: 5, image: "/images/product-8.png" },
    { id: 10, name: "Big Potatoes", price: "12.00", rating: 4, image: "/images/product-6.png" },
    { id: 11, name: "Corn", price: "12.00", rating: 4, image: "/images/product-10.png" },
    { id: 12, name: "Green Apple", price: "14.99", oldPrice: "20.99", rating: 4, image: "/images/product-1.png" },
    
  ];

  return (
    <div className="font-poppins">
      
      <div className="container mx-auto px-4 lg:px-15 py-10">
        <section 
          className="relative w-full rounded-xl overflow-hidden min-h-[350px] sm:min-h-[310px] flex items-center bg-[#0D0D0D]"
          style={{ 
            backgroundImage: `url('/images/Discount Bannar.png')`, 
            backgroundSize: window.innerWidth < 640 ? 'cover' : 'contain', 
            backgroundPosition: window.innerWidth < 640 ? 'center' : 'right center', 
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40 sm:bg-transparent z-0"></div>
          <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left px-6 sm:px-8 lg:px-20 w-full lg:w-1/2">
            <p className="text-white text-[10px] sm:text-[11px] font-medium uppercase tracking-[2px] mb-1 opacity-90">BEST DEALS</p>
            <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-tight mb-4 sm:mb-5">Sale of the Month</h2>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-5 mb-8">
              {[
                { label: 'DAYS', value: days },
                { label: 'HOURS', value: hours },
                { label: 'MINS', value: minutes },
                { label: 'SECS', value: seconds },
              ].map((unit, index, array) => (
                <React.Fragment key={unit.label}>
                  <div className="flex flex-col items-center">
                    <span className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold text-[#00b207] leading-none">{String(unit.value).padStart(2, '0')}</span>
                    <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-white/60 font-normal uppercase mt-1 tracking-wider">{unit.label}</span>
                  </div>
                  {index < array.length - 1 && <span className="text-white/20 text-[16px] sm:text-[20px] mb-4 font-thin">:</span>}
                </React.Fragment>
              ))}
            </div>
            <Button title="Shop Now" icon={<FaArrowRight />} className="bg-[#00b207] hover:bg-[#009206] text-white px-8 py-2.5 rounded-full font-semibold transition-all text-[13px] sm:text-[14px] flex items-center gap-2 shadow-md" />
          </div>
        </section>
      </div>

      {/*(Select Category) */}
      <div className="container mx-auto px-4 lg:px-15 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">Select Category</h2>
          <button className="flex items-center text-[#2C742F] font-medium hover:gap-2 transition-all group">
            View All <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
          {products.map((product) => {
            const isActive = activeId === product.id;
            return (
              <div
                key={product.id}
                onClick={() => setActiveId(product.id)}
                className={`relative group border rounded-lg p-0 transition-all duration-300 cursor-pointer overflow-hidden
                  ${isActive ? 'border-[#2C742F] shadow-[0px_0px_15px_rgba(44,116,47,0.1)]' : 'border-gray-100 hover:border-[#2C742F] hover:shadow-lg'}
                `}
              >
                <div className={`absolute top-4 right-4 flex flex-col gap-2 z-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <button className="p-2 bg-white rounded-full border border-gray-100 hover:bg-[#2C742F] hover:text-white transition-colors"><Heart size={20} /></button>
                  <button className="p-2 bg-white rounded-full border border-gray-100 hover:bg-[#2C742F] hover:text-white transition-colors"><Eye size={20} /></button>
                </div>
                <div className="p-4 h-64 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className={`text-sm mb-1 transition-colors ${isActive ? 'text-[#2C742F]' : 'text-[#4D4D4D]'}`}>{product.name}</h3>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-base font-bold text-[#1A1A1A]">${product.price}</span>
                      {product.oldPrice && <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < product.rating ? "text-[#FF8A00] fill-[#FF8A00]" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                  <button className={`p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-[#00B207] text-white shadow-md' : 'bg-[#F2F2F2] text-[#1A1A1A] group-hover:bg-[#00B207] group-hover:text-white'}`}>
                    <CustomBagIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Shop;