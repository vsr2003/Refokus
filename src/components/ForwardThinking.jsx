

function ForwardThinking() {
  return (
    <div className='  mt-[10vh]  w-screen h-[110vh] md:p-3 p-1 flex-col flex lg:flex-row justify-center gap-[5%] '>

        <div className=' relative  lg:w-[50%] w-full h-full  flex flex-col justify-center gap-20 text-white  '>
            <h1 className=' md:text-[15vh] text-[10vh] leading-[1] font-semibold mt-[5%] sm:ml-[10%] ml-0 lg:ml-0 '>Forward <br /> --Thinking</h1>
            <div className='  flex lg:justify-end md:justify-center justify-end '>
                <p className=' lg:w-[80%] w-[60%]  leading-[1.3]   '>A fully remote team composed of bright, diverse and caring individuals - all focused on building the next generation of world-class brands and websites.</p>
            </div>
        </div>


        <div className=' lg:w-auto  object-contain flex justify-center w-full  '>

            <video src="https://cdn.refokus.com/website/people-short.webm"
                loop={true} autoPlay={true} muted={true}
                className=' w-full h-full hidden lg:block  rounded-lg object-contain '
            ></video>
            
            <a href="" className=' w-full  flex  h-full justify-center lg:hidden   ' >
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63f3a76a6498f43e7aff4227_culture-p-800.webp" alt=""
                    className=' md:w-[50%] w-[100%] mt-[10vh] lg:hidden '
                />
            </a>

        </div>
        
    </div>
  )
}

export default ForwardThinking