import { HiArrowLongRight } from "react-icons/hi2";
import Button from './Button';

function HomeProject() {
  return (
    <div className=' lg:mt-[20vh] sm:mt-[60vh] mt-[50vh] w-full lg:h-[60vh] sm:h-[150vh] h-[130vh]  select-none  flex lg:flex-row flex-col-reverse p-1 sm:p-5 gap-1  ' >
        
        {/* left */}
        <div className='  lg:w-[35%] h-[35%] sm:h-[65%] lg:h-full  bg-[#3E3E46] group text-white flex flex-col justify-between rounded-2xl lg:p-3 p-5 ' >

            <div className=" flex flex-col gap-5  group-hover:px-1  transition-all ">

                <div className=" w-full flex justify-between ">
                    <p className=" lg:text-[10px] text-sm "> Up Next: Projects </p> <HiArrowLongRight />
                </div>

                <h2 className=" w-full sm:w-[50%] font-semibold text-2xl lg:text-xl ">Projects and Case Studies</h2>

            </div>

            <div>
                <p className=" text-sm lg:text-[10px] w-[90%] sm:w-[42%] lg:w-[50%] ">From brands to Website , our words speaks for itself</p>
            </div>

        </div>


        {/* right  */}
        <div className=' lg:w-[65%] h-[65%]  sm:h-full bg-[#323238] group hover:bg-[#7443FF]  text-white rounded-2xl lg:p-3 p-5 flex flex-col justify-between '>

            <div className=" flex flex-col gap-5 group-hover:px-1 transition-all ">

                <div className=" w-full flex justify-between ">
                    <p className=" lg:text-[10px] text-sm "> Get In Touch</p> <HiArrowLongRight />
                </div>

                <h2 className=" w-[48%] sm:w-[25%] lg:w-[20%] font-semibold lg:text-xl text-2xl ">Let's get to it, together.</h2>

            </div>

            <div>
                <h1 className=" text-[10vh] leading-[1.2] sm:text-[15vh] font-semibold py-5 sm:my-2 lg:my-0 ">Start a Project</h1>
                <div className=" w-[32%] h-[40px] sm:w-[20%] lg:h-[50px] sm:h-[45px] "> <Button obj={{title:"Contact Us", borderColor:"",link:"",bgColor:"white"}} /> </div>
            </div>

        </div>

    </div>
  )
}

export default HomeProject