import { useState } from "react"
import lesson from "../../../assets/lessonDiagram.svg"
import video from "../../../assets/Video-Frame.png"
import video2 from "../../../assets/Video-Frame2.png"


const Lessons = () => {
  const [term, setTerm] = useState("Select Term");
  const [title, setTitle] = useState("Title");
  const terms = ['Select Term', '1st Term', '2nd Term', '3rd Term']
  const titles = ['Select Title', 'Mathematics', 'English Language', 'Civic Education', 'Chemistry', 'Computer Science', 'Fine Arts']

  return (
    <section className="grid gap-5">
      <div className='bg-primary-10 py-8 px-5 md:px-12 h-[220px] rounded-md | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Lessons</h1>
        <img src={lesson} alt="" />
      </div>

      
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-5 w-auto">
        <h3 className="font-bold">Filter:</h3>

        <div className="flex gap-2">
          <select 
            value={term} 
            onChange={(e) => setTerm(e.target.value)}
            className='bg-white text text-sm border px-2.5 py-3 rounded-md shadow-sm'
          > 
            {terms.map( term => (
              <option key={term} value={term}>{term}</option> 
            ))}
          </select>

          <select 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className='bg-white text text-sm border px-2.5 py-3 rounded-md shadow-sm'
          > 
            {titles.map( title => (
              <option key={title} value={title}>{title}</option> 
            ))}
          </select> 
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-4">
        <p className="font-bold">Recent Lessons</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14">
          {/* VIDEO 1 */}
          <div>
            <img src={video} alt="video-class-lessons" />
            <div className="leading-6 mt-3 text-xs">
              <p>Foundations of Geometry</p>
              <p className="font-bold">Mathematics</p>
              <p className="text-primary-900">Difficulty: Beginner</p>
            </div>
          </div>

          {/* VIDEO 2 */}
          <div>
            <img src={video2} alt="video-class-lessons" />
            <div className="leading-6 mt-3 text-xs">
              <p>Computer System: Dynamic Duo</p>
              <p className="font-bold">Computer Science</p>
              <p className="text-primary-900">Difficulty: Beginner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lessons