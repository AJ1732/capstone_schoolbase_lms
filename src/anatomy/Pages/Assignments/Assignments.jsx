
import frame from "../../../assets/Assignment-frame.png"
import dropdown from "../../../assets/arrow_drop_down.png"

const Assignments = () => {
  return (
    <>
      <div>
        <img src={frame} alt="header-frame" />
      </div>
      <div className="flex gap-5 w-auto mt-4">
          <h3 className="font-bold mt-2">Filter:</h3>

        <div className="flex flex-col  sm:flex-row gap-2 shadow-lg px-4 py-2">
          <h3>
            All Assignments 
            <button className="ml-3"><img src={dropdown} alt="" /></button>
          </h3> 
        </div>
        
      </div>
       <h2 className="font-bold text-center mt-28 mb-5">No Assignments</h2>
    </>
  )
}

export default Assignments