import Button from "./Button";


function Work({data}) {
    const {video,title,description} = data ;

    

  return (
    <div className="  relative  h-[30vh] group hover:h-[40vh] hover:bg-gray-600  w-full  flex justify-between items-center transition-all duration-500 "
      // onMouseEnter={(e)=>{e.target.style.backgroundColor = "red"}}
      // onMouseLeave={(e)=>{e.target.style.backgroundColor = ""}}
    >


        <div className=" w-[20%] h-full  flex p-5 items-center  ">
          <h1 className=" text-3xl font-semibold ">{title}</h1>
        </div>


        <div className=" w-[25%] mr-[10vw] p-5 h-full flex flex-col justify-center gap-2 ">
          <p className=" text-sm  "> {description} </p>
          
          <div className=" w-[150px] h-[35px] hidden group-hover:block ">
              <Button title={"Live Website"} />
          </div>
        </div>



        {/* for video overlay */}
        <div className=" absolute hidden z-[999] group-hover:block left-[30%] top-[-15%] rounded-2xl h-auto w-[35vw] transition-all delay-200 ">
            <video src={video} 
              muted={true} autoPlay={true} loop={true}
              className=" w-full h-full rounded-2xl object-contain "
             ></video>
        </div>
        
    </div>
  )
}

export default Work