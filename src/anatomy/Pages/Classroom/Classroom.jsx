import classroom1 from "../../../assets/classroom1.svg"
import classroom2 from "../../../assets/classroom2.svg"
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

const statusData = [
  {
    id: 1,
    title: 'Total Enrolled',
    amount: '12',
    img: sub,
  },
  {
    id: 2,
    title: 'Completed',
    amount: '12',
    img: sync,
  },
  {
    id: 3,
    title: 'Quiz Score',
    amount: '12',
    img: quiz,
  },
];

const courseData = [
  {
    id: 1,
    title: 'Geometry',
    timeHour: '2:30',
    lessonAmount: '14',
  },
  {
    id: 2,
    title: 'Civic Education',
    timeHour: '2:30',
    lessonAmount: '14',
  },
];

const Classroom = () => {
  return (
    <>
      <div className='bg-primary-10 py-8 px-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Classroom</h1>
        <figure className="flex justify-center items-center gap-4">
          <img src={classroom1} alt="" />
          <img src={classroom2} alt="" />
        </figure>
      </div>
    
      <section className="space-y-5">
        {/* COURSES STATUS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 gap-5 ">
          {statusData.map(({ id, title, amount, img }) => (
            <div key={id} className="max-w-[340px] w-full bg-white font-bold text-xs leading-8 p-5 pr-10 grid grid-cols-2 place-content-center shadow rounded-md ">
              <p>{title}</p>
              
              <figure className="place-self-end w-5">
                <img src={img} />
              </figure>

              <p>{amount}</p>
            </div>
          ))}
        </div>

        {/* RECENTLY ENROLLED COURSES */}
        <div>
          <h4 className="my-5 text-sm font-semibold ml-1">Recently Enrolled Courses</h4>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_200px] gap-5">
            <div className="w-full p-5 shadow rounded-lg space-y-4">
              <figure  className="w-8 p-2 bg-primary-50 rounded-md">
                <img src={cal} />
              </figure>
              
              <p className="font-semibold text-sm">Fundamental Mathematics</p>
              
              <div className="flex gap-5">
                <ProgressBar/>
                <p className="text-xs text-[#A8AABC]">
                  <span className="text-primary-00">5/</span>
                  10 Lessons
                </p>
              </div>
            </div>

            <div className="w-full p-5 shadow rounded-lg space-y-4">
              <figure  className="w-8 p-2 bg-primary-50 rounded-md">
                <img src={speaker} />
              </figure>
              
              <p className="font-semibold text-sm">Phonetics in English</p>
              
              <div className="flex gap-5">
                <ProgressBar/>
                <p className="text-xs text-[#A8AABC]">
                  <span className="text-primary-00">11/</span>
                  20 Lessons
                </p>
              </div>
            </div>

            <div className="max-w-[200px] h-auto p-5 shadow rounded-lg space-y-4">
              <h4 className="font-semibold text-sm">Daily progress</h4>
              
              <div className="bg-primary-50 font-bold text-primary-900 py-2 px-4 flex justify-start items-center gap-2 rounded-md">
                <img src={speaker} alt=""  className="w-5" />
                <p className="text-xs font-semibold">English</p>
              </div>
              
              <div className="flex gap-2">
                <img src={cal} alt="" className="w-5" /> 
                <p className="text-xs font-semibold mt-1">Mathematics</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-5 mb-10">
          {/* RECENTLY ENROLLED CLASSES */}
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row justify-between items-start gap-2">
              <p className="text-sm font-semibold text-[#484848]">Recently Enrolled Classes</p>

              <div className="flex justify-center items-center gap-2">
                <div className="self-baseline flex justify-center items-center relative">
                  <input type="text" placeholder="All" 
                  className="w-full py-1 px-3 border rounded-2xl 
                  focus:outline-none focus:ring-2 focus:ring-primary-00 focus:border-transparent" />
                  
                  <label className="absolute right-1 bg-primary-50 size-7 p-1 rounded-full">
                    <img src={search} alt="" className="w-5 "/>
                  </label>
                </div>

                <button className="bg-primary-50 w-7 p-0.5 flex justify-center items-center rounded-full">
                  <img src={plus}  />
                </button>
              </div>
            </div>

            {courseData.map(({ id, title, lessonAmount, timeHour }) => (
              <div key={id} className="p-8 shadow rounded-md space-y-4">
                <h4 className="font-bold">{title}</h4>

                <div className="font-medium text-sm flex flex-col md:flex-row justify-between items-start gap-5">
                  <div className="flex justify-center items-center gap-2">
                    <img src={timer} className="w-5" />
                    <p>{timeHour}hr</p>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <img src={lesson} className="w-4 ml-0.5" />
                    <p>{lessonAmount} Lessons</p>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <img src={ok} className="w-5" />
                    <p>Assignment</p>
                  </div>
                </div>
              </div> 
            ))}
          </div>

          {/* UPCOMING CLASSES */}
          <div className="w-full space-y-5">
            <p className="font-semibold text-sm">Upcoming Class</p>

            <div className="bg-[#FFCFDB] p-8 rounded-xl space-y-2">
              <p className="text-sm font-semibold">The Evolution of Computers</p>
              <p className="text-[#1C1D1DCC] text-xs">5:30pm</p>
            </div>

            <div className="bg-[#FFCFDB] p-8 rounded-xl space-y-2">
              <p className="text-sm font-semibold">Comtemporary Art</p>
              <p className="text-[#1C1D1DCC] text-xs">2:00pm</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Classroom 