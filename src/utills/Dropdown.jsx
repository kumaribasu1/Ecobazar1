import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  let menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Shop", path: "/shop" },
    {
      id: 3,
      title: "Pages",
      path: "/pages",
      children: [
        { id: 1, title: "sub menu 1", path: "/one" },
        { id: 2, title: "sub menu 2", path: "/two" },
      ],
    },
    { id: 4, title: "Blog", path: "/blog" },
    { id: 5, title: "About Us", path: "/about-us" },
  ];

  return (
    <div>
      <ul className='flex flex-col lg:flex-row gap-5'>
        {menuItems?.map((menu) => (
          <li key={menu.id} className='relative group'>
            <Link 
              className={`flex items-center gap-1 text-[14px] font-[500] font-Poppins ${menu.title === "Home" ? 'text-[var(--color-gray-scale-gray---900)]' : 'text-[var(--color-gray-scale-gray---500)]'}`} 
              to={menu.path}
            >
              {menu.title}
              {menu.title !== "About Us" && (
                <span className='mt-1'>
                  <IoIosArrowDown />
                </span>
              )}
            </Link>
            {menu.children && menu.children.length > 0 && (
              <ul className='group-hover:mt-0  z-10 group-hover:visible invisible transition-all duration-200 bg-white shadow absolute w-[150px] left-0 top-full mt-5 z-10'>
                {menu.children.map((submenu) => (
                  <li 
                    key={submenu.id} 
                    className='px-5 py-2 text-[14px] font-[500] text-[var(--color-gray-scale-gray---500)] hover:text-white font-Poppins hover:bg-[var(--color-gray-scale-gray---500)]'
                  >
                    <Link to={submenu.path}>{submenu.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
