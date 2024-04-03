import attendance from "../../../assets/Attendance-Frame.png"
import dropdown from "../../../assets/arrow_drop_down.png"

const Attendance = () => {
  return (
    <>
    <img src={attendance} alt="" />
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

    </>
  )
}

export default Attendance