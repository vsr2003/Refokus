import React from 'react'

function LatestSolutions({data}) {

    const {heading,description,image} = data;

  return (
    <div className=' w-full flex  gap-2 text-white hover:cursor-pointer select-none '>
        
        {/* image */}
        <div className=' w-[80px] h-[50px]  '>
            <img src={image} alt="img" className=' w-full h-full object-cover ' />
        </div>

        {/* content */}
        <div className=' w-[85%] h-full '>
            <h1 className=' text-sm font-semibold '> {heading} </h1>
            <p className=' text-xs leading-none text-[#888891] '> {description} </p>
        </div>

    </div>
  )
}

export default LatestSolutions