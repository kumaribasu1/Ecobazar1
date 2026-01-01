import React, { useState, useEffect } from 'react';
import Button from './Button'; 

const Count = () => {
  const [totalSeconds, setTotalSeconds] = useState(
    2 * 60 * 60 + 18 * 60 + 46
  );

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

  return (
    <section 
      className="relative w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden py-6 sm:py-10"
      style={{ 
        backgroundImage: `url('/images/Best Deal.png')`, 
        backgroundColor: '#f2f2f2',
        minHeight: '300px' 
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4 -mt-6 sm:-mt-8">

        <p className="text-[#00b207] text-[10px] sm:text-[13px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mb-2">
          Best Deals
        </p>

        <h2 className="text-[#002603] text-[20px] sm:text-[36px] font-bold leading-tight mb-4 sm:mb-5 max-w-[280px] sm:max-w-[600px]">
          Our Special Products <br /> Deal of the Month
        </h2>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          {[
            { label: 'DAYS', value: days },
            { label: 'HOURS', value: hours },
            { label: 'MINS', value: minutes },
            { label: 'SECS', value: seconds },
          ].map((unit, index, array) => (
            <React.Fragment key={unit.label}>
              <div className="bg-white rounded shadow-sm w-[60px] h-[70px] sm:w-[75px] sm:h-[90px] flex flex-col items-center justify-center border border-gray-100">
                <span className="text-[22px] sm:text-[28px] font-bold text-[#00b207] leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-[10px] text-gray-400 font-semibold uppercase mt-1">
                  {unit.label}
                </span>
              </div>

              {index < array.length - 1 && (
                <span className="text-gray-800 text-[20px] sm:text-[25px] mb-4 sm:mb-6">:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="w-full flex justify-center scale-90 sm:scale-95">
          <Button title="Shop Now" />
        </div>

      </div>
    </section>
  );
};

export default Count;