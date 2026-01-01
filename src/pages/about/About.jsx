import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Newsletter from "../../utills/Newsletter";
import Testimonial from "../../utills/Testimonial";
import BrandLogos from "../../utills/BrandLogos";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Banner */}
      <div className="mb-6 md:mb-[40px] w-full flex justify-center">
        <img
          className="w-full h-auto object-cover"
          src="/images/bannar.jpg" // public/ সরানো হয়েছে
          alt="Banner"
        />
      </div>

      <div className="container space-y-10 md:space-y-16">
        {/* Section 1 - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-[40px] mb-6 md:mb-[10px]">
          <div className="lg:ml-[120px] w-full lg:w-[500px] px-4 lg:px-0">
            <h2 className="font-poppins font-[600] text-[32px] md:text-[40px] lg:text-[56px] text-[var(--color-gray-scale-gray---900)] leading-[120%] mb-4">
              100% Trusted <br /> Organic Food Store
            </h2>

            <p className="text-[16px] md:text-[18px] font-poppins font-[400] text-[var(--color-gray-scale-gray---600)] leading-[150%] mb-4">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>

          <div className="w-full lg:w-[500px] px-4 lg:px-0">
            <img
              src="/images/about img.jpg" // public/ সরানো হয়েছে
              alt="Organic Food"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - FULL WIDTH - Image Left, Features Right */}
      <div className="w-full mt-10 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
          {/* LEFT IMAGE */}
          <div className="w-full relative">
            <img
              src="/images/about img 2.jpg" // public/ সরানো হয়েছে
              alt="Farmer with vegetables"
              className="w-full h-auto lg:rounded-r-[20px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center max-w-full lg:max-w-[650px] px-4 md:px-6 lg:pl-[60px] lg:pr-[80px] py-8 md:py-[40px]">
            <h2 className="font-poppins font-[700] text-[28px] md:text-[36px] text-[#1A1A1A] leading-[105%] mb-4">
              100% Trusted <br /> Organic Food Store
            </h2>
            {/* বাকি কোড আগের মতোই থাকবে... */}
            <p className="text-[14px] md:text-base text-[#999999] font-[400] leading-[135%] mb-6">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            </p>
            {/* Features Grid... (SVG Icons logic unchanged) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
                {/* Feature list items... */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section 3 */}
        <div className="overflow-hidden mt-10 md:mt-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="lg:col-span-5 lg:ml-[120px] pb-6 md:pb-10 px-4 lg:px-0">
              <h2 className="font-poppins font-[600] text-[28px] md:text-[32px] lg:text-[40px] text-[#1A1A1A] leading-[115%] mb-4">
                We Delivered, You <br /> Enjoy Your Order
              </h2>
              <button className="bg-[#00B207] text-white px-6 md:px-10 py-3 md:py-3.5 rounded-[43px] font-[600] flex items-center gap-3 w-full sm:w-fit hover:bg-[#009206] transition-all justify-center">
                Shop Now
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7 flex justify-end items-end w-full">
              <img
                src="/images/about img 3.jpg" // public/ সরানো হয়েছে
                alt="Delivery Boy"
                className="w-full h-auto object-contain lg:scale-100 origin-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Team Section */}
      <div className="w-full bg-gray-50 py-12 md:py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-poppins font-[600] text-[28px] md:text-[38px] text-[#1A1A1A] mb-3">
              Our Awesome Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {/* Team Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/Team Card.jpg" // public/ সরানো হয়েছে
                alt="Jenny Wilson"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">Jenny Wilson</h4>
                <p className="text-[14px] text-[#999999]">Ceo & Founder</p>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/Team Card 2.jpg" // public/ সরানো হয়েছে
                alt="Jane Cooper"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">Jane Cooper</h4>
                <p className="text-[14px] text-[#999999]">Worker</p>
              </div>
            </div>

            {/* Team Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/Team Card 3.jpg" 
                alt="Cody Fisher"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">Cody Fisher</h4>
                <p className="text-[14px] text-[#999999]">Security Guard</p>
              </div>
            </div>

            {/* Team Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/Team Card 4.jpg" 
                alt="Robert Fox"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">Robert Fox</h4>
                <p className="text-[14px] text-[#999999]">Senior Farmer Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial/>
      <BrandLogos/>
      <Newsletter/>
    </div>
  );
};

export default About;