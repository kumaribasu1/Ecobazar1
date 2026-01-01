import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { FaPinterestP } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-1">
            Subcribe our Newsletter
          </h2>
          <p className="text-[#999999] text-[14px] max-w-[400px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="flex-[1.5] w-full max-w-[500px]">
          <div className="relative flex items-center bg-white rounded-full border border-[#E6E6E6] shadow-sm focus-within:border-[#00B207] transition-all overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent px-6 py-3.5 outline-none text-[#666666] text-[15px]"
            />
            <button className="bg-[#00B207] text-white px-10 py-3.5 rounded-full font-bold text-[16px] hover:bg-[#008A05] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: <Facebook size={18} fill="currentColor" />, key: 'fb' },
            { icon: <Twitter size={18} fill="currentColor" />, key: 'tw' },
            { icon: <FaPinterestP size={18} />, key: 'pt' },
            { icon: <Instagram size={18} />, key: 'ig' }
          ].map((item) => (
            <a
              key={item.key}
              href="#"
              className="w-10 h-10 flex items-center justify-center text-[#4D4D4D] rounded-full hover:bg-[#00B207] hover:text-white transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Newsletter;