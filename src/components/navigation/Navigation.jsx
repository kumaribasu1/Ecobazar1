import React, { useState } from 'react';
import Header from './Header';
import Dropdown from '../../utills/Dropdown';
import { FiPhoneCall, FiSearch, FiHeart } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import SearchBar from "./SearchBar"; 
import Login from "../../authentication/Login"; 
import Register from "../../authentication/Register"; 

const Navigation = () => {

  const [toggle, setToggle] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const toggleHandler = () => setToggle(!toggle);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  const closeAll = () => {
    setToggle(false);
    closeLogin();
    closeRegister();
    closeSearch();
  };

  return (
    <div className='shadow lg:shadow-none'>
      <Header/>
      <div className="container mx-auto px-4 sm:px-8 lg:px-15 py-3 sm:py-[15px]">
        <div className='grid grid-cols-5 items-center'>
         
          <div className='col-span-2 hidden lg:flex items-center'>
            <Dropdown/>
          </div>
          
          <div className='col-span-3 lg:col-span-1 flex justify-center lg:justify-start'>
            <a href="Home" onClick={closeAll}>
              <img 
                src="images/ecobazar.png" 
                className='w-[180px] sm:w-[130px] md:w-[140px] lg:w-[150px]' 
                alt="Ecobazar Logo" 
              />
            </a>
          </div>
          
          <div className='hidden lg:flex col-span-2 gap-4 xl:gap-6 justify-end items-center'>
            <div className='flex items-center gap-2'>
              <span className='text-lg xl:text-xl text-[var(--color-gray-scale-gray---600)]'>
                <FiPhoneCall />
              </span>
              <span className='font-[500] text-[13px] xl:text-[14px] text-[var(--color-gray-scale-gray---900)] font-Poppins hover:text-[var(--color-branding-success-dark)] transition-colors'>
                (219) 555-0114
              </span>
            </div>
            <div>
              <ul className='flex items-center gap-4 xl:gap-5'>
                <li className='text-lg xl:text-xl cursor-pointer text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors' 
                    onClick={openSearch}>
                  <FiSearch />
                </li>
                <li className='text-lg xl:text-xl cursor-pointer text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors'>
                  <FiHeart />
                </li>
                <li className='text-lg xl:text-xl relative cursor-pointer text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors'>
                  <SlHandbag />
                  <span className='absolute text-[9px] xl:text-[10px] -top-1 -right-[5px] bg-[var(--color-branding-success-dark)] border border-white w-[14px] h-[14px] xl:w-[15px] xl:h-[15px] flex items-center justify-center rounded-full text-white'>
                    2
                  </span>
                </li>
                <li className='text-lg xl:text-xl cursor-pointer text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors' 
                    onClick={openLogin}>
                  <FaRegUser />
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="col-span-2 lg:hidden flex justify-end items-center">
            <div className='flex items-center gap-3 sm:gap-4'>
              <FiSearch 
                className='text-lg sm:text-2xl cursor-pointer text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors' 
                onClick={openSearch} 
              />
              <FaRegUser 
                className='text-lg sm:text-2xl cursor-pointer text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors' 
                onClick={openLogin} 
              />
              <div 
                onClick={toggleHandler} 
                className="cursor-pointer text-xl sm:text-2xl text-[var(--color-gray-scale-gray---600)] hover:text-[var(--color-branding-success-dark)] transition-colors ml-2"
              >
                {toggle ? <IoCloseSharp /> : <IoMenu />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`
        fixed lg:hidden 
        top-0 left-0 
        h-full w-full 
        z-50
        transition-all duration-300
        ${toggle ? 'visible' : 'invisible'}
      `}>

        {toggle && (
          <div 
            onClick={toggleHandler} 
            className='absolute inset-0 bg-black/20 backdrop-blur-sm'
          ></div>
        )}
        
        <div className={`
          absolute top-0 left-0
          h-full w-[85%] sm:w-[80%] max-w-[320px] sm:max-w-[300px]
          bg-[#d0e7ff]
          transform transition-transform duration-300
          ${toggle ? "translate-x-0" : "-translate-x-full"}
          shadow-xl 
          flex flex-col
        `}>
          <div className='p-6 sm:p-8 flex flex-col gap-8'>
            {/* Close Button */}
            <div className='flex justify-end'>
              <button 
                onClick={toggleHandler}
                className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors'
              >
                <IoCloseSharp className='text-2xl text-[var(--color-gray-scale-gray---600)]' />
              </button>
            </div>
            
        
            <div className='flex justify-center'>
              <a href="Home" onClick={closeAll}>
                <img 
                  src="images/ecobazar.png" 
                  className='w-[200px] sm:w-[220px]' 
                  alt="Ecobazar Logo" 
                />
              </a>
            </div>
            
            {/* Dropdown/Menu Items */}
            <div className='flex flex-col gap-4 text-[var(--color-gray-scale-gray---900)] text-xl sm:text-2xl'>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {searchOpen && <SearchBar closeSearch={closeSearch} />}
      {loginOpen && <Login closeLogin={closeLogin} />}
      {registerOpen && <Register closeRegister={closeRegister} />}
    </div>
  )
}

export default Navigation;
