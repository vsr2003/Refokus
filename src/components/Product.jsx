import Button from "./Button"

function Product({obj}) {
    const {title,img1,img2,video,description,background} = obj ;
   
   
  return (

    <div className={` rounded-2xl mt-[15vh] lg:p-5 lg:flex lg:flex-col lg:gap-[5vh] `}
        style={{backgroundColor:background}}
        
     >

        <div className=' lg:h-[80vh] hidden lg:flex  gap-[2vw] lg:p-3 rounded-2xl '>

            <div className=' relative  h-full lg:w-[50%] rounded-2xl lg:p-3   '>

            <h1 className=' text-2xl text-white font-semibold tracking-wider '> {title} </h1>

                <div className=' absolute bottom-[-3vh] right-0 h-[80%] w-[80%] border-2 rounded-2xl '>
                        <img src={img1} alt="img"
                            className=' object-cover h-full w-full rounded-2xl '
                        />
                </div>

            </div>

            {/* video */}
            <div className=' border-2 h-auto lg:w-[50%] rounded-2xl  '>
                <video
                 autoPlay={true} loop={true} muted={true}
                 className=" h-full w-full rounded-2xl object-cover  "
                 src={video}></video>
            </div>

        </div>

        <div className=' lg:h-[55vh] rounded-2xl lg:flex lg:flex-row flex-col gap-[5vh] p-5  lg:p-0 lg:gap-[5vw] '>
        
            <div className=" lg:hidden ">
                <h1 className=' text-2xl text-white font-semibold tracking-wider '> {title} </h1>
            </div>

            {/* lower img left */}
            <div className=' lg:w-[50%] rounded-2xl lg:ml-5 my-5  bg-red-200 h-auto  '>
                <img src={img2} alt="img"
                    className="  h-full w-full rounded-2xl "
                />
            </div>

            {/* para and button */}
            <div className=' lg:w-[50%]  text-white   flex flex-col lg:gap-10 gap-5 '>
                <p className=" lg:w-[90%] lg:leading-[1.2] leading-[1.2] text-lg font-semibold lg:text-sm ">{description}</p>
                <div className=" lg:w-[35%] md:w-[25%] w-[50%] h-[45px] ">
                    <Button title={"Visit Website"} />
                </div>
            </div>

        </div>
        
    </div>

  )
}

export default Product