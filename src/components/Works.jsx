import Work from "./Work"
import {WorkData} from '../assets/data';

function Works() {

  return (

    <div className=" mt-[15vh] hidden  min-h-[300vh] w-full  lg:flex flex-col  ">
      {
          WorkData.map((obj)=>(
            <Work data={obj} />
          ))
      }
    </div>

  )
}

export default Works