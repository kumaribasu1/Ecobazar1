import React from 'react'

const Select = ({lan}) => {
    console.log();
    
  return (
    <div>
        <select name="" id="" className='text-[var(--color-gren-gray-scale-700)] font-Poppins text-[12px]'>
            {
                lan?.map((language,index) =>{
                    return(
                        <option key={index} value="">{language}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default Select;