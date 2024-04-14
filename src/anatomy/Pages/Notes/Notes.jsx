import { useState } from "react"
import notes from "../../../assets/notes.svg"
import TodoList from "../../../components/TodoList/TodoList"
import { WeekCalender } from "../../../components/Calender/Calender"

const Notes = () => {
  const [term, setTerm] = useState("Select Term");
  const [title, setTitle] = useState("Title");
  const terms = ['Select Term', '1st Term', '2nd Term', '3rd Term']
  const titles = ['Select Title', 'Mathematics', 'English Language', 'Civic Education', 'Chemistry', 'Computer Science', 'Fine Arts']
  const noteItems = [];

  return (
    <section className="grid gap-5">
      <div className='bg-primary-50 py-8 px-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Notes</h1>
        <img src={notes} alt="" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_18rem]">
        <div className="md:col-start-1 | flex flex-col justify-between gap-10">   
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
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

          <div className="min-h-80 flex justify-center items-start">
            {noteItems.length > 0
            ? 
            <h2 className="font-bold text-center p-20">Saved Notes Here</h2>
            :
            <h2 className="font-bold text-center p-20">No Saved Notes</h2>
            }
          </div>
        </div>
                                            
        <div className="md:col-start-2 space-y-10">
          <WeekCalender />
          <TodoList />
        </div>
      </div> 
    </section>
  )
}

export default Notes