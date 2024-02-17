
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import SwiperPage from './SwiperPage';
import {WorkData} from '../assets/data';

export default function SwiperSlider() {
   
  return (
    <>

      <Swiper pagination={true} modules={[Pagination]} 
      className=" lg:hidden w-full h-[100vh] sm:h-[150vh]  " >

        {
            WorkData.map((obj)=>(
                <SwiperSlide> <SwiperPage data={obj} /> </SwiperSlide>
            ))
        }
      
      </Swiper>

    </>
  );
}
