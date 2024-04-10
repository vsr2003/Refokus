import ForwardThinking from '../components/ForwardThinking';
import Products from '../components/Products';
import Hero from '../components/Hero';
import HomeProject from '../components/HomeProject';

// locomotive
import '../locomotive.css';
import locomotive from 'locomotive-scroll';
import { useEffect, useRef } from 'react';


import Marquee from "react-fast-marquee";
import MarqueeImages from '../components/MarqueeImages';



function Home() {

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
    <div className=' scroll-container bg-black  ' ref={scrollRef}   >

      <Hero />

      <MarqueeImages direction={"left"} />
      <MarqueeImages direction={"right"} />

      <Products />

      <MarqueeImages direction={"left"}  />
      <MarqueeImages direction={"right"} />

      <ForwardThinking />
      <HomeProject />

    </div>
  )
}

export default Home