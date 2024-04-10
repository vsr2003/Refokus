import HomeProject from '../components/HomeProject';
import SwiperSlider from '../components/SwiperSlider';
import WorkHero from '../components/WorkHero';
import Works from '../components/Works';


// import '../locomotive.css';
// import locomotive from 'locomotive-scroll';
// import { useEffect, useRef } from 'react';


function Work() {

  // const scrollRef = useRef(null);
  
  // useEffect(()=>{

  //   const scroll = new locomotive({
  //     el:scrollRef.current ,
  //     smooth:true,
  //   })

  //   return ()=>{
  //     scroll.destroy();
  //   }

  // },[])


  return (
    <div className=" w-full h-auto text-white bg-black "  >

      <WorkHero />

      {/* marquee brands */}
      {/* <div className=' mt-[15vh] h-[15vh] w-full bg-red-600  '></div> */}

      <Works />
      <SwiperSlider />

      <HomeProject />

    </div>
  )
}

export default Work