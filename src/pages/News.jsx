import NewsInfo from "../components/NewsInfo"
import {LatestNews,SolutionsData} from '../assets/data';
import Button from '../components/Button';
import LatestSolutions from "../components/LatestSolutions";


function News() {
  return (
    <div className=" h-[85vh] w-full mt-[15vh] flex  bg-black ">
        
        {/* image */}
        <div className=" w-[25%] h-full flex flex-col gap-3 items-center  p-5 ">

            {/* working as dot */}
            <div className=" w-full border-b py-1 px-1 opacity-30 "> <div className=" h-1 w-1 rounded-full bg-white border-b "></div> </div>

            {/* image */}
            <a href="" >
                <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/648aee409a41d5d78bbc795c_ttr%20-%20nav.png" alt=""
                    className=" h-[95%]  "
                />
            </a>

        </div>

        {/* news */}
        <div className=" w-[75%] h-full p-5 " >

        <div className=" w-full border-b flex gap-1 py-1 px-1 opacity-30 "> <div className=" h-1 w-1 rounded-full bg-white border-b "></div> <div className=" h-1 w-1 rounded-full bg-white border-b "></div> </div>

        <div className=" h-full w-full  flex gap-[2vw] ">

            {/* left */}
            <div className=" w-[60%] h-full  pt-3 flex flex-col gap-3 ">

                <p className=" text-xs text-[#8C8B90] ">Latest News</p>
                {
                    LatestNews.map((obj)=>(
                        <NewsInfo data={obj} />
                    ))
                }

                <div className="  w-[100px] h-[30px] rounded-full ">
                    <Button obj={{title:"Show All", borderColor:"",link:"",bgColor:"white"}} />
                </div>

            </div>

            {/* right */}
            <div className=" w-[40%] h-full pt-3 flex flex-col gap-5 ">

                <p className=" text-xs text-[#8C8B90]">Latest News</p>
                {
                    SolutionsData.map((obj)=>(
                        <LatestSolutions data={obj} />
                    ))
                }

            </div>

        </div>


        </div>


    </div>
  )
}

export default News