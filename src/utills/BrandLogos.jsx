import React from 'react';

const BrandLogos = () => {
  const brands = [
    { id: 1, src: "/images/steps.png", alt: "steps" },
    { id: 2, src: "/images/mango.png", alt: "MANGO" },
    { id: 3, src: "/images/food-1.png", alt: "food network" },
    { id: 4, src: "/images/food-2.png", alt: "FOOD" },
    { id: 5, src: "/images/bookoff.png", alt: "BOOK-OFF" },
    { id: 6, src: "/images/g-series.png", alt: "G Series" },
  ];

  return (
    <section className="w-full bg-white py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
          {brands.map((brand, index) => (
            <React.Fragment key={brand.id}>
              <div className="flex-1 flex justify-center items-center px-4">
                <img 
                  src={brand.src} 
                  alt={brand.alt} 
                  className="h-5 md:h-7 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </div>

              {index < brands.length - 1 && (
                <div className="hidden md:block h-8 w-[1.2px] bg-gray-100"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;