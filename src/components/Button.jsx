
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button({obj}) {

  const {title,borderColor,link,bgColor} = obj;



  const [textColor,setTextColor] = useState('white');
  const location = useLocation();

    useEffect(() => {
        
        if(location.pathname === '/careers')
        {
          setTextColor('black');
        }
        else{
          setTextColor('white');
        }
        
    }, [location.pathname]);

  return (
    

    <a href={link} class="relative h-full w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden  text-black transition duration-300 ease-out border rounded-full shadow-md group"
      style={{borderColor:borderColor,}}
    >
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full  group-hover:translate-x-0 ease"
        style={{backgroundColor:bgColor}}
      >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full  transition-all text-[1rem] duration-300 transform group-hover:translate-x-full ease"
        style={{color:textColor}}
      >{title}</span>
      <span class="relative invisible ">{title}</span>
    </a>

  )
}

export default Button