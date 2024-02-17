
import Job from './Job'
import {JobData} from '../assets/data' ;



function Jobs() {
  return (
    <div className=' mt-[15vh]  h-auto  text-white  '>

      {
          JobData.map((obj)=>(
              <Job data={obj} />
          ))
      }

    </div>
  )
}

export default Jobs