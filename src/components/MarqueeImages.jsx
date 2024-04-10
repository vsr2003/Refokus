import Marquee from "react-fast-marquee";
import {MarqueeImagesData} from '../assets/data';

function MarqueeImages({direction}) {
  return (
    <div className=" ">
        <Marquee direction={direction} >

            {
                MarqueeImagesData.map((src)=>(
                    <img src={src} alt="img" className=" h-[32px] w-[114px] mx-5 my-5 opacity-50 " />
                ))
            }

        </Marquee>
    </div>
  )
}

export default MarqueeImages