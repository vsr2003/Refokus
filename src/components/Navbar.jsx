

import { NavLink } from 'react-router-dom';
import Button from './Button'


function Navbar() {

    let menuData = [
        {
            title:"Home",
            link:"/home",
        },
        {
            title:"Work",
            link:"/work",
        },
        {
            title:"Careers",
            link:"/careers",
        },
        {
            title:"Projects",
            link:"/projects",
        }
    ]

  return (
    <div className=' z-[999] fixed w-full h-[15vh] flex justify-center items-center bg-black  '>
        
        <div className=' w-[95%] flex items-center justify-between  h-full  border-b-[1px] border-gray-600 px-3 py-1  '>

            <div className=' h-[50%] flex gap-[7vw] items-center w-[50%] '>

                {/* div for logo */}
                <div className='  '>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" 
                        className=' lg:h-[17px]  '
                    />
                </div>

                {/* div for menu items */}
                <div className='  lg:flex gap-[5vw] hidden '>
                    {
                        menuData.map((obj,i)=>(
                            <NavLink to={obj.link} key={i} className=' text-xs text-white  '> {obj.title} </NavLink>
                        ))
                    }
                </div>

            </div>

            {/* for button */}
            <div className=' h-[45%] w-[13%]  '>
                    
                <div className=' hidden lg:block h-full w-full md:hidden '>
                    <Button title={"Start a Project"} />
                </div>

                <div className=' lg:hidden w-full h-full  flex justify-end items-center '>
                    <div className=' sm:w-[25%] sm:h-[90%] w-[62%] h-[100%] rounded-full bg-white '></div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Navbar




{/* <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
<span class="relative invisible">Button Text</span>
</a> */}