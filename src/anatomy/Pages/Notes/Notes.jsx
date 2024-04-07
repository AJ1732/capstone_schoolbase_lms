import notes from "../../../assets/Note-Frame.png"
import dropdown from "../../../assets/arrow_drop_down.png"
import { WeekCalender } from "../../../components/Calender/Calender"
import TodoList from "../../../components/TodoList/TodoList"

const Notes = () => {
  return (
    <>
       <img src={notes} alt="" />
          <div className="flex justify-between">

             <div className="flex justify-between gap-10 w-1/2 mt-4">
              
             <div className="flex flex-col  sm:flex-row gap-5 w-auto h-10 mt-1">
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
                <h2 className="font-bold text-center mt-52">No Saved Notes</h2>
             </div>
                                            
        <div className="flex flex-col w-1/2 items-end mt-6">
           <div className="mr-5">
             <WeekCalender />
           </div>

          <div className="-mr-10 mt-3">
            <TodoList />
          </div>
       </div>
     </div>
       
    </>
  )
}

export default Notes