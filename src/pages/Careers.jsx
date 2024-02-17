import Jobs from "../components/Jobs"

import '../locomotive.css';
import locomotive from 'locomotive-scroll';
import { useEffect, useRef } from 'react';


function Careers() {

    const scrollRef = useRef(null);
    useEffect(()=>{

    const scroll = new locomotive({
      el:scrollRef.current ,
      smooth:true,
    })

    return ()=>{
      scroll.destroy();
    }

    },[])

  return (
    <div className=" min-h-[100vh] mt-[15vh] p-5 bg-white " ref={scrollRef}>
        
        {/* hero career heading */}
        <div className=" sm:h-[70vh]  lg:h-[40vh] flex justify-end lg:px-10 border-b border-gray-300 ">
            <h1 className=" sm:text-[8rem] lg:text-[6rem] font-semibold ">Careers</h1>
        </div>

        {/* filter buttons */}
        <div className="  flex gap-3 mt-5  ">
            {
                ["All","EU","US"].map((title,i) => (
                    <button key={i} className=" w-[45px] rounded-full bg-white text-xs p-1 border border-black hover:bg-black hover:text-white visited:bg-black  " > {title} </button>
                ))
            }
        </div>

        <Jobs />

    </div>
  )
}

export default Careers