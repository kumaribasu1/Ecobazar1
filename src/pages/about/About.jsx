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
          src="public/images/bannar.jpg"
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
              src="/images/about img.jpg"
              alt="Organic Food"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - FULL WIDTH - Image Left, Features Right */}
      <div className="w-full mt-10 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
          {/* LEFT IMAGE - STARTS FROM PAGE LEFT EDGE */}
          <div className="w-full relative">
            <img
              src="public/images/about img 2.jpg"
              alt="Farmer with vegetables"
              className="w-full h-auto lg:rounded-r-[20px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center max-w-full lg:max-w-[650px] px-4 md:px-6 lg:pl-[60px] lg:pr-[80px] py-8 md:py-[40px]">
            <h2 className="font-poppins font-[700] text-[28px] md:text-[36px] text-[#1A1A1A] leading-[105%] mb-4">
              100% Trusted <br /> Organic Food Store
            </h2>

            <p className="text-[14px] md:text-base text-[#999999] font-[400] leading-[135%] mb-6">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* Features Grid - 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] bg-[#EDF2EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M14 2L16.5 9.5L24 12L16.5 14.5L14 22L11.5 14.5L4 12L11.5 9.5L14 2Z"
                      fill="#00B207"
                      stroke="#00B207"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins font-[600] text-[14px] md:text-[15px] text-[#1A1A1A] leading-[125%] mb-0.5">
                    100% Organic food
                  </h4>
                  <p className="text-[12px] text-[#999999] font-[400] leading-[135%]">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] bg-[#EDF2EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M21 8C21 8 21 6 19 4C17 2 15 2 15 2C15 2 15 4 17 6C19 8 21 8 21 8Z"
                      stroke="#00B207"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="14"
                      cy="18"
                      r="6"
                      stroke="#00B207"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M14 15V18L16 20"
                      stroke="#00B207"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins font-[600] text-[14px] md:text-[15px] text-[#1A1A1A] leading-[125%] mb-0.5">
                    Great Support 24/7
                  </h4>
                  <p className="text-[12px] text-[#999999] font-[400] leading-[135%]">
                    Instant access to Contact
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] bg-[#EDF2EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M14 4L16.5 11L24 13.5L16.5 16L14 24L11.5 16L4 13.5L11.5 11L14 4Z"
                      fill="#00B207"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins font-[600] text-[14px] md:text-[15px] text-[#1A1A1A] leading-[125%] mb-0.5">
                    Customer Feedback
                  </h4>
                  <p className="text-[12px] text-[#999999] font-[400] leading-[135%]">
                    Our happy customer
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] bg-[#EDF2EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M20 12V8C20 7.46957 19.7893 6.96086 19.4142 6.58579C19.0391 6.21071 18.5304 6 18 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H8"
                      stroke="#00B207"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <rect
                      x="10"
                      y="12"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="#00B207"
                      strokeWidth="1.8"
                    />
                    <circle cx="17" cy="17" r="1.5" fill="#00B207" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins font-[600] text-[14px] md:text-[15px] text-[#1A1A1A] leading-[125%] mb-0.5">
                    100% Sucure Payment
                  </h4>
                  <p className="text-[12px] text-[#999999] font-[400] leading-[135%]">
                    We ensure your money is save
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] bg-[#EDF2EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <rect
                      x="4"
                      y="8"
                      width="20"
                      height="14"
                      rx="2"
                      stroke="#00B207"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M4 12H24M8 8V6M20 8V6"
                      stroke="#00B207"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins font-[600] text-[14px] md:text-[15px] text-[#1A1A1A] leading-[125%] mb-0.5">
                    Free Shipping
                  </h4>
                  <p className="text-[12px] text-[#999999] font-[400] leading-[135%]">
                    Free shipping with discount
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] md:min-w-[45px] h-[40px] md:h-[45px] bg-[#EDF2EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M4 12L8 8L12 12L20 4M20 4H16M20 4V8"
                      stroke="#00B207"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="4"
                      y="14"
                      width="20"
                      height="10"
                      rx="2"
                      stroke="#00B207"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins font-[600] text-[14px] md:text-[15px] text-[#1A1A1A] leading-[125%] mb-0.5">
                    100% Organic Food
                  </h4>
                  <p className="text-[12px] text-[#999999] font-[400] leading-[135%]">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
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

              <p className="text-[14px] text-[#808080] font-poppins leading-[150%] mb-6">
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <div className="w-5 h-5 rounded-full bg-[#EAF7E9] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L4.33333 8.33333L11 1.66667"
                        stroke="#00B207"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Sed in metus pellentesque.
                </li>
                <li className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <div className="w-5 h-5 rounded-full bg-[#EAF7E9] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L4.33333 8.33333L11 1.66667"
                        stroke="#00B207"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Fusce et ex commodo, aliquam nulla.
                </li>
                <li className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <div className="w-5 h-5 rounded-full bg-[#EAF7E9] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L4.33333 8.33333L11 1.66667"
                        stroke="#00B207"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Maecenas ut nunc fringilla erat varius.
                </li>
              </ul>

              {/* Button with Arrow Icon */}
              <button className="bg-[#00B207] text-white px-6 md:px-10 py-3 md:py-3.5 rounded-[43px] font-[600] flex items-center gap-3 w-full sm:w-fit hover:bg-[#009206] transition-all justify-center">
                Shop Now
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7.5L1 7.5M16 7.5L10 1.5M16 7.5L10 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7 flex justify-end items-end w-full">
              <img
                src="public/images/about img 3.jpg"
                alt="Delivery Boy"
                className="w-full h-auto object-contain lg:scale-100 origin-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Team Section - Full Width BG with Container Content */}
      <div className="w-full bg-gray-50 py-12 md:py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-poppins font-[600] text-[28px] md:text-[38px] text-[#1A1A1A] mb-3">
              Our Awesome Team
            </h2>
            <p className="text-[14px] text-[#808080] max-w-full md:max-w-[600px] mx-auto px-4">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {/* Team Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="public/images/Team Card.jpg"
                alt="Jenny Wilson"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">
                  Jenny Wilson
                </h4>
                <p className="text-[14px] text-[#999999]">Ceo & Founder</p>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="public/images/Team Card 2.jpg"
                alt="Jane Cooper"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">
                  Jane Cooper
                </h4>
                <p className="text-[14px] text-[#999999]">Worker</p>
              </div>
            </div>

            {/* Team Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="public/images/Team Card 3.jpg"
                alt="Cody Fisher"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">
                  Cody Fisher
                </h4>
                <p className="text-[14px] text-[#999999]">Security Guard</p>
              </div>
            </div>

            {/* Team Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="public/images/Team Card 4.jpg"
                alt="Robert Fox"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="font-poppins font-[600] text-[16px] text-[#1A1A1A] mb-1">
                  Robert Fox
                </h4>
                <p className="text-[14px] text-[#999999]">
                  Senior Farmer Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* important*/}
      <Testimonial/>
      <BrandLogos/>
      <Newsletter/>
    </div>
  );
};

export default About;