import React from 'react';

const ServiceFeatures = () => {
  const data = [
    {
      id: 1,
      title: "Free Shipping",
      desc: "Free shipping with discount",
      // Truck Icon (Outline Style)
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.3333 8.33333H5V26.6667H8.33333M28.3333 8.33333V26.6667M28.3333 8.33333H31.6667L36.6667 15V26.6667H33.3333M11.6667 31.6667C13.0474 31.6667 14.1667 30.5474 14.1667 29.1667C14.1667 27.7859 13.0474 26.6667 11.6667 26.6667C10.2859 26.6667 9.16667 27.7859 9.16667 29.1667C9.16667 30.5474 10.2859 31.6667 11.6667 31.6667ZM30.8333 31.6667C32.2141 31.6667 33.3333 30.5474 33.3333 29.1667C33.3333 27.7859 32.2141 26.6667 30.8333 26.6667C29.4526 26.6667 28.3333 27.7859 28.3333 29.1667C28.3333 30.5474 29.4526 31.6667 30.8333 31.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: false,
    },
    {
      id: 2,
      title: "Great Support 24/7",
      desc: "Instant access to Contact",
      // Headphones Icon (Outline Style)
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.6667 18.3333V15C31.6667 8.55667 26.4433 3.33333 20 3.33333C13.5567 3.33333 8.33333 8.55667 8.33333 15V18.3333M5 18.3333H11.6667V28.3333H5V18.3333ZM28.3333 18.3333H35V28.3333H28.3333V18.3333ZM11.6667 28.3333C11.6667 31.0947 9.42807 33.3333 6.66667 33.3333H5M28.3333 28.3333C28.3333 31.0947 30.5719 33.3333 33.3333 33.3333H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: false,
    },
    {
      id: 3,
      title: "100% Secure Payment",
      desc: "We ensure your money is safe",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33333L6.66667 8.33333V18.3333C6.66667 26.5583 12.3583 34.2583 20 36.6667C27.6417 34.2583 33.3333 26.5583 33.3333 18.3333V8.33333L20 3.33333ZM15 20L18.3333 23.3333L25 16.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: true, 
    },
    {
      id: 4,
      title: "Money-Back Guarantee",
      desc: "30 days money-back",
      // Box/Package Icon (Outline Style)
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33333L5 10V30L20 36.6667L35 30V10L20 3.33333ZM20 3.33333V16.6667M20 16.6667L5 10M20 16.6667L35 10M10 23.3333L15 25.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: false,
    },
  ];

  return (
    <div className="w-full bg-white pb-16">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group cursor-default">
              {/* Icon Circle */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 transition-all duration-300 ${
                item.active 
                ? "bg-[#00B207] text-white shadow-lg shadow-green-100" 
                : "bg-[#EDF7EE] text-[#00B207]"
              }`}>
                {item.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-[#1A1A1A] font-bold text-[18px] mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#999999] text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;