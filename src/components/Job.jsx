
import JobDescription from './JobDescription'

function Job({data}) {

    const {category,jobs} = data ;
   

  return (
    <div className=' w-full  lg:mt-5   border-collapse  border-b border-gray-300 flex flex-col sm:flex-row justify-between '>

        {/* title */}
        <div className=' w-[40%] h-full  flex justify-start items-center lg:p-5 '>
            <h1 className=' text-4xl text-black '> {category} </h1>
        </div>


        {/* description of job(s) */}
        <div className=' w-full sm:w-[60%]  flex flex-col '>
            {
            
              jobs.map((obj)=>(
                  <JobDescription description={obj} />
              ))
            }
        </div>
        
    </div>
  )
}

export default Job