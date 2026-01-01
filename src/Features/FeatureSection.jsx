import React from "react";

const FeatureSection = () => {
  const stats = [
    { number: "37+", label: "Years of Hard Work" },
    { number: "500k+", label: "Happy Customer" },
    { number: "28", label: "Qualified Team Member" },
    { number: "750k+", label: "Monthly Orders" },
  ];

  return (
    <section className="w-full bg-[#F2F2F2] flex items-center justify-center font-sans mt-2 md:-mt-32 pb-20">
      
      {/* banner*/}
      <div 
        className="relative w-full h-auto min-h-[220px] py-12 md:py-0 md:h-[220px] bg-[#001508] bg-cover bg-center flex items-center justify-center overflow-hidden shadow-md"
        style={{ 
          backgroundImage: `url('/images/Feature.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto max-w-[1000px] px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center text-center rounded-[12px] border border-white/5 h-[130px]"
                style={{
                  background: "rgba(255, 255, 255, 0.05)", 
                  backdropFilter: "blur(5px)", 
                  WebkitBackdropFilter: "blur(5px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[12px]"></div>

                <h2 className="text-[24px] md:text-[28px] font-bold text-[#00b207] mb-1 leading-none relative z-10">
                  {item.number}
                </h2>
        
                <p className="text-white/90 text-[10px] md:text-[11px] font-medium uppercase tracking-wider relative z-10 px-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;