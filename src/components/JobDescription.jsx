
import { useLocation } from 'react-router';
import Button from './Button'

function JobDescription({description}) {

  console.log(description)
  const {position,location,type,link} = description ;

  const loc = useLocation();
  console.log("Location now ",loc)

  return (
    <div className=' w-full  h-full border-b border-gray-300 flex flex-col gap-5 sm:flex-row justify-between sm:items-center  p-5 '>
        
        {/* Job Description */}
        <div className='  w-full hover:cursor-pointer text-black  flex flex-col gap-3 sm:block '>
            <h3 className=' leading-none text-2xl md:text-sm '> {position} </h3> 
            <p className=' inline-block leading-none text-[15px] sm:text-[10px] text-gray-700 '> {location} </p>  <p className=' text-sm sm:text-[10px] text-gray-700 sm:ml-3 inline-block leading-none '> {type} </p>
        </div>

        <div className=' w-[100px] h-[35px]  rounded-full   '>
            <Button obj={{title:"Start Project", borderColor:"black",link:"",bgColor:"white"}}  />
        </div>

    </div>
  )
}

export default JobDescription