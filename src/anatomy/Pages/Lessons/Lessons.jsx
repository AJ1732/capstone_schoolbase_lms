import lessonF from "../../../assets/Lesson-Frame.png"
import dropdown from "../../../assets/arrow_drop_down.png"
import video from "../../../assets/Video-Frame.png"
import video2 from "../../../assets/Video-Frame2.png"


const Lessons = () => {

  return (
    <>
      <img src={lessonF} alt="" />
      <div className="flex gap-5 w-auto h-10 mt-1">
              <h3 className="font-bold mt-2">Filter:</h3>

            <div className="flex flex-col gap-2 border-solid shadow-lg px-4 py-2">
              <h4>
                Select Terms
                <button className="ml-3"><img src={dropdown} alt="" /></button>
              </h4> 
            </div>

            <div className="flex flex-col gap-2 shadow-lg px-4 py-2">
              <h4>
                Select Title
                <button className="ml-3"><img src={dropdown} alt="" /></button>
              </h4> 
            </div>
        </div>
        <p className="font-bold mt-11 mb-4 ml-2">Recent Lessons</p>

        <div className="grid grid-cols-2 gap-14">

          <div className="ml-2">
            <img src={video} alt="video-class-lessons" className="h-56" />
            <div className="leading-6 mt-3 text-xs">
              <p>Foundations of Geometry</p>
              <p className="font-bold">Mathematics</p>
              <p>Difficulty: Beginner</p>
            </div>
          </div>

          <div className="mr-5">
            <img src={video2} alt="video-class-lessons" />
            <div className="leading-6 mt-3 text-xs">
              <p>Computer System: Dynamic Duo</p>
              <p className="font-bold">Computer Science</p>
              <p>Difficulty: Beginner</p>
            </div>
          </div>
        </div>

    </>
  )
}

export default Lessons