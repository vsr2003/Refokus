
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button({title}) {
  return (
    
    // <button className=' h-full w-full text-gray-600 border border-black bg-white rounded-full text-xs flex justify-center items-center gap-3  '>
    //     {title} <MdSubdirectoryArrowRight className=' inline-block text-black ' size={12} />
    // </button>

    <a href="#_" class="relative h-full w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden  text-black transition duration-300 ease-out border border-black rounded-full shadow-md group">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">{title}</span>
      <span class="relative invisible ">{title}</span>
    </a>

  )
}

export default Button