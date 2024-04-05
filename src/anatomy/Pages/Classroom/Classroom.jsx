import classroom from "../../../assets/Classes-Frame.png"
import sub from "../../../assets/subscriptions.png"
import sync from "../../../assets/sync_saved_locally.png"
import quiz from "../../../assets/quiz.png"
import cal from "../../../assets/calculate.png"
import speaker from "../../../assets/interpreter_mode.png"


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

      <div className="grid grid-cols-3 gap-28 mr-1">

        <div className="border-solid shadow rounded-lg py-2 pl-6 w-[400px] leading-10 pt-5">
          <img src={cal} alt="" className="w-8 p-2 bg-[#d2daef] rounded-md" />
          <p className="font-semibold text-sm my-4">Fundamental Mathematics</p>
          <div className="flex gap-2">
           <button className="bg-blue-600">click me</button>
           <p className="text-xs text-[#b9bac9]"><span className="text-[#6fb5ff]">5/</span>10 Lessons</p>
          </div>
        </div>

        <div className="border-solid shadow rounded-lg py-2 pl-6 w-[400px] ml-10 leading-10 pt-5">
          <img src={speaker} alt="" className="w-8 bg-[#d2daef] p-2 rounded-md" />
          <p className="font-semibold text-sm my-4">Phonetics in English</p>
          <div className="flex gap-2">
          <button className="bg-blue-600">click me</button>
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


      

    </section>
    </>
  )
}

export default Classroom 