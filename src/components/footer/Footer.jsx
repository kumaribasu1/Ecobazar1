import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#808080] pt-16 font-sans">
      <div className="max-w-[1320px] mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-5 gap-10 pb-16">
      
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="mb-5">
            <img src="/images/ecobazar-2.png" alt="Ecobazar" className="h-8" />
          </div>
          <p className="text-sm leading-[22px] mb-7 pr-2 text-[#999999]">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magn.
          </p>
          <div className="flex gap-2">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#00b207] transition-all duration-300 border border-transparent hover:border-[#00b207]">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#00b207] transition-all duration-300 border border-transparent hover:border-[#00b207]">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#00b207] transition-all duration-300 border border-transparent hover:border-[#00b207]">
              <FaPinterestP size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#00b207] transition-all duration-300 border border-transparent hover:border-[#00b207]">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:contents gap-10">
          <div className="lg:pl-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-medium text-[18px] mb-2">My Account</h3>
            <div className="w-8 h-[2px] bg-[#00b207] mb-6"></div>
            <ul className="space-y-[14px] text-[14px]">
              <li className="hover:text-white cursor-pointer transition">My Account</li>
              <li className="hover:text-white cursor-pointer transition">Order History</li>
              <li className="hover:text-white cursor-pointer transition">Shoping Cart</li>
              <li className="hover:text-white cursor-pointer transition">Wishlist</li>
            </ul>
          </div>

          <div className="lg:pl-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-medium text-[18px] mb-2">Helps</h3>
            <div className="w-8 h-[2px] bg-[#00b207] mb-6"></div>
            <ul className="space-y-[14px] text-[14px]">
              <li className="hover:text-white cursor-pointer transition">Contact</li>
              <li className="hover:text-white cursor-pointer transition">Faqs</li>
              <li className="hover:text-white cursor-pointer transition">Terms & Condition</li>
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

    
          <div className="lg:pl-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-medium text-[18px] mb-2">Proxy</h3>
            <div className="w-8 h-[2px] bg-[#00b207] mb-6"></div>
            <ul className="space-y-[14px] text-[14px]">
              <li className="hover:text-white cursor-pointer transition">About</li>
              <li className="hover:text-white cursor-pointer transition">Shop</li>
              <li className="hover:text-white cursor-pointer transition">Product</li>
              <li className="hover:text-white cursor-pointer transition">Track Order</li>
            </ul>
          </div>

         
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-medium text-[18px] mb-2 whitespace-nowrap">Download App</h3>
            <div className="w-8 h-[2px] bg-[#00b207] mb-6"></div>
            <div className="flex flex-col gap-3 w-full max-w-[160px] lg:max-w-none">
              <div className="bg-[#2c2c2c] py-2 px-4 rounded-md flex items-center gap-3 cursor-pointer h-[54px] hover:bg-[#333] transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" className="w-6 h-6" alt="apple" />
                <div className="leading-tight text-left">
                  <p className="text-[10px] text-gray-400">Download on</p>
                  <p className="text-white text-[13px] font-semibold">App Store</p>
                </div>
              </div>
              <div className="bg-[#2c2c2c] py-2 px-4 rounded-md flex items-center gap-3 cursor-pointer h-[54px] hover:bg-[#333] transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-6 h-6" alt="google" />
                <div className="leading-tight text-left">
                  <p className="text-[10px] text-gray-400">Download on</p>
                  <p className="text-white text-[13px] font-semibold">Google play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full border-t-2 border-[#333333]">
        <div className="max-w-[1320px] mx-auto py-8 px-4 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] text-[#666666]">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex justify-center">
            <img src="/images/pay.png" alt="Payment Methods" className="max-h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;