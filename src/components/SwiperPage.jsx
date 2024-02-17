import Button from "./Button"


function SwiperPage({data}) {
    const {title,description,image} = data ;

  return (
    <div className=' h-[95%] w-full bg-[#242424] flex flex-col items-center gap-2 p-5 '>
        <h1 className=" text-3xl font-semibold "> {title} </h1>
        <div className=" w-[100%] h-[80%] rounded-2xl object-cover bg-purple-700 "> <img src={image} alt="" className=" w-full h-full object-cover rounded-2xl " /> </div>
        <p className=" text-sm "> {description} </p>
        <div className=" w-[120px] h-[40px] rounded-full bg-red-500 "> <Button title={"Live website"} /> </div>
    </div>
  )
}

export default SwiperPage