import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({title}) => {
  return (
    <div>
        <button className='flex items-center leading-0 gap-1 py-[12px] px-[40px] rounded-full cursor-pointer bg-[var(--color-branding-success)] text-white hover:bg-transparent hover:outline hover:outline-[var(--color-branding-success)] hover:text-[var(--color-branding-success)]'>
            
            {title}
            <span className='text-3xl mt-1'><IoIosArrowRoundForward /></span>
        </button>
    </div>
  )
}

export default Button