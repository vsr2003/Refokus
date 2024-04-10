import React from 'react'

function NewsInfo({data}) {
    const {heading,description,date} = data ;
  return (
    <div className=' w-full text-white hover:cursor-pointer select-none  '>

        <h1 className=' font-semibold '> {heading} </h1>
        <p className=' text-xs leading-none mt-1 text-[#888891] '> {description} </p>
        <p className=' text-xs mt-1 text-[#8C8B90] '> {date} </p>

        <hr className=' my-2 opacity-30 ' />

    </div>
  )
}

export default NewsInfo