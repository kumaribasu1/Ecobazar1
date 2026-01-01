import React, { useState } from "react";
import Newsletter from "../../utills/Newsletter";

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-green-700">{title}</span>
        <span className="text-gray-500 text-lg">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-3 pt-1 bg-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

const Pages = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* Banner Section */}
      <div className="w-full flex justify-center">
        <img
          className="w-full h-auto object-cover max-h-[350px]"
          src="/images/bannar.jpg"
          alt="Banner"
        />
      </div>

      {/* Welcome Section*/}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px] pt-[80px] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column*/}
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl lg:text-[45px] font-bold text-gray-900 leading-tight mb-2">
              Welcome, Let's Talk<br />About Our Ecobazar
            </h2>
            
            <AccordionItem 
              title="In elementum est a ante sodales iaculis."
              content="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
              defaultOpen={true}
            />
            
            <AccordionItem 
              title="Etiam lobortis massa eu nibh tempor elementum."
              content="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros."
            />
            
            <AccordionItem 
              title="In elementum est a ante sodales iaculis."
              content="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros."
            />
            
            <AccordionItem 
              title="Aenean quis quam nec lacus semper dignissim."
              content="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros."
            />
            
            <AccordionItem 
              title="Nulla tincidunt eros id tempus accumsan."
              content="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros."
            />
          </div>

          {/* Right Column*/}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <img
                src="/images/pages.png"
                alt="Farmer with fresh vegetables"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Newsletter />


    </div>
  );
};

export default Pages;