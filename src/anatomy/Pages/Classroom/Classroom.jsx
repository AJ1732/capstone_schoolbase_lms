import classroom from "../../../assets/Classes-Frame.png"
import sub from "../../../assets/subscriptions.png"
import sync from "../../../assets/sync_saved_locally.png"
import quiz from "../../../assets/quiz.png"
import cal from "../../../assets/calculate.png"
import speaker from "../../../assets/interpreter_mode.png"
import ProgressBar from "./ProgressBar"
import search from "../../../assets/Vector.png"
import plus from "../../../assets/Add.png"
import timer from "../../../assets/timer.png"
import lesson from "../../../assets/lesson-note.png"
import ok from "../../../assets/okay.png"

const Classroom = () => {

  return (
    <>
    <img src={classroom} alt="" />
    <section>

      <div className="grid lg:grid-cols-3 mt-7 gap-5 sm:md:grid-cols-1">

        <div className="grid grid-cols-2 leading-8 text-xs font-bold bg-white  border-solid shadow rounded-md py-2 pl-5 pr-0 w-[340px]">
          <p>Total Enrolled</p>
          <img src={sub} alt="" className="w-5 mt-3 ml-20" />
          <p>12</p>
        </div>

        <div className="grid grid-cols-2 leading-8 text-xs font-bold bg-white  border-solid shadow rounded-md py-2 pl-5 pr-0 w-[340px]">
          <p>Completed</p>
          <img src={sync} alt="" className="w-5 mt-3 ml-20" />
          <p>12</p>
        </div>

        <div className="grid grid-cols-2 leading-8 text-xs font-bold bg-white  border-solid shadow rounded-md py-2 pl-5 pr-0 w-[340px]">
          <p>Quiz Score</p>
          <img src={quiz} alt="" className="w-5 mt-3 ml-20" />
          <p>12</p>
        </div>

      </div>

      <p className="my-5 text-sm font-semibold ml-1">Recently Enrolled Courses</p>

      <div className="grid lg:grid-cols-3 sm:md:grid-cols-1 lg:gap-28 mr-1">

        <div className="border-solid shadow rounded-lg py-2 pl-6 w-[400px] leading-10 pt-5">
          <img src={cal} alt="" className="w-8 p-2 bg-[#d2daef] rounded-md" />
          <p className="font-semibold text-sm my-4">Fundamental Mathematics</p>
          <div className="flex gap-5">

          <ProgressBar/>
          
           <p className="text-xs text-[#b9bac9]"><span className="text-[#6fb5ff]">5/</span>10 Lessons</p>
          </div>
        </div>

        <div className="border-solid shadow rounded-lg py-2 pl-6 w-[400px] ml-10 leading-10 pt-5">
          <img src={speaker} alt="" className="w-8 bg-[#d2daef] p-2 rounded-md" />
          <p className="font-semibold text-sm my-4">Phonetics in English</p>
          <div className="flex gap-5">
          
          <ProgressBar />

            <p className="text-xs text-[#b9bac9]"><span className="text-[#6fb5ff]">11/</span>20 Lessons</p>
          </div>
        </div>

        <div className="border-solid shadow rounded-lg py-5 pl-9 w-[190px] h-auto ml-[5.5rem]">
          <p className="font-semibold text-sm">Daily progress</p>
          <div className="flex gap-2 text-[#1e4b8c] bg-[#d2daef] font-bold rounded-md w-24 my-4 py-1 pl-2">
          <img src={speaker} alt=""  className="w-5" />
          <p className="text-xs font-semibold">English</p>
          </div>
          <div className="flex gap-2">
          <img src={cal} alt="" className="w-5" /> 
          <p className="text-xs font-semibold mt-1">Mathematics</p>
          </div>
        </div>

      </div>
     
     <div className="grid lg:grid-cols-2 sm:md:grid-cols-1 gap-5 mb-10">

      <div className="mt-3">

        <div className="grid grid-cols-3">
          <p className="text-sm font-semibold mt-5 text-[#484848]">Recently Enrolled Classes</p>

          <div className="flex items-center mt-5 relative">
            <input type="text" placeholder="All" className="py-1 pl-3 ml-40 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent" />
            <button className="bg-[#eff1fe] rounded-xl w-7 h-7 absolute left-72 top-1 p-1">
              <img src={search} alt="" className="w-5 "/>
            </button>
          </div>

          <div>
          <button><img src={plus} alt="" className="w-5 ml-48 mt-7" /></button>
          </div>
        </div>

        <div className="bg-white  border-solid shadow rounded-md py-5 px-7 w-[555px] mt-5">
          <p className="text-md font-bold">Geometry</p>

          <div className="flex justify-between text-sm font-medium mt-5">
            <div className="grid grid-cols-2">
              <img src={timer} alt="" className="w-5 ml-2" />
              <p>2:30hr</p>
            </div>

            <div className="grid grid-cols-2">
              <img src={lesson} alt=""  className="w-4 ml-10 " />
              <p className="">14 Lessons</p>
            </div>

            <div className="grid grid-cols-2">
            <img src={ok} alt=""  className="w-5 ml-11" />
              <p>Assignment</p>
            </div>
          </div>

          </div>
        
          <div className="bg-white  border-solid shadow rounded-md py-6 px-7 w-[555px] mt-7">
          <p className="text-md font-bold">Geometry</p>

          <div className="flex justify-between text-sm font-medium mt-5">
            <div className="grid grid-cols-2">
              <img src={timer} alt="" className="w-5 ml-2" />
              <p>2:30hr</p>
            </div>

            <div className="grid grid-cols-2">
              <img src={lesson} alt=""  className="w-4 ml-10 " />
              <p className="">14 Lessons</p>
            </div>

            <div className="grid grid-cols-2">
            <img src={ok} alt=""  className="w-5 ml-11" />
              <p>Assignment</p>
            </div>
          </div>

          </div>
        
      </div>


      <div className="-mr-72 ml-10 mt-4">
        <p className="text-sm font-semibold mt-5">Upcoming Class</p>
        <div className="bg-[#ffcfdb] mt-7 pl-8 rounded-xl h-[105px] w-[62%] pt-7">
          <p className="text-sm font-semibold">The Evolution of Computers</p>
          <p className="text-[#605356] text-xs mt-2">5:30pm</p>
        </div>

        <div className="bg-[#ffcfdb] mt-7 pl-8 rounded-xl h-[105px] w-[62%] pt-7">
          <p className="text-sm font-semibold">The Evolution of Computers</p>
          <p className="text-[#605356] text-xs mt-2">5:30pm</p>
        </div>
      </div>

     </div>

      

    </section>
    </>
  )
}

export default Classroom 