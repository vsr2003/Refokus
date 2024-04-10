import { useEffect } from 'react';
import * as THREE from 'three';
import NET from 'vanta/src/vanta.net';
import RINGS from 'vanta/src/vanta.rings';


function Hero() {

  useEffect(() => {
    // const netEffect = NET({
    //     el: "#vanta",
    //     backgroundColor: 'black',
    //     points: 20.00,
    //     maxDistance: 14.00,
    //     spacing: 20.00,
    //     THREE: THREE,
    // });

    const netEffect = RINGS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 100.00,
        minWidth: 100.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color: 0x22ff,
        THREE: THREE,
    });

    // Cleanup effect on component unmount
    return () => {
        if (netEffect) {
            netEffect.destroy();
        }
    };
}, []);


  return (
    <div className=" mb-10 h-screen  w-screen pt-[15vh] flex flex-col justify-end gap-5 lg:flex-row md:gap-y-5  lg:items-end lg:justify-between  md:justify-between lg:p-5  text-white "
      id='vanta'
    >
        
        {/* hero heading */}
        <div className="  lg:py-5  md:px-[5vw] lg:p-0 px-5  ">
            <h1 className=" lg:text-[30vh] md:text-[33vh] text-[12vh] leading-[0.9]  "> Unique Websites</h1>
        </div>

        {/* hero side heading */}
        <div className=" text-right mb-[10vh] lg:mb-0 text-lg px-5 md:mt-[5vh] md:text-lg lg:text-sm leading-[1.2] lg:mt-0 lg:w-[35%]  lg:py-5 md:px-[5vw] lg:p-0  ">
            <p>DRIVEN BY DESIGN</p>
            <p>EMPOWERED BY TECHNOLOGY</p>
            <p>INNOVATIVE BY NATURE</p>
        </div >

    </div>
  )
}

export default Hero