
import frame from "../../../assets/Assignment-frame.png"
import dropdown from "../../../assets/arrow_drop_down.png"
import dot from "../../../assets/green-dot.png"

const Assignments = () => {
  return (
    <>
      <div>
        <img src={frame} alt="header-frame" />
      </div>
      <div className="flex gap-5 w-auto mt-4">
          <h3 className="font-bold mt-2">Filter:</h3>

        <div className="flex flex-col  sm:flex-row gap-2 shadow-lg rounded-md px-4 py-2">
          <h3>
            All Assignments 
            <button className="ml-3"><img src={dropdown} alt="" /></button>
          </h3> 
        </div>
        
      </div>


      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-y-7 mt-7 mb-11 ml-1 -mr-14">

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Mathematics</p>
              <p className="text-xs leading-10">Jan 24 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Basic Science</p>
              <p className="text-xs leading-10">Feb 02 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Fine Art</p>
              <p className="text-xs leading-10">March 04 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Physics</p>
              <p className="text-xs leading-10">Mar 04 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Biology</p>
              <p className="text-xs leading-10">Mar 04 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Geography</p>
              <p className="text-xs leading-10">Mar 12 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Civic Education</p>
              <p className="text-xs leading-10">Apr 01 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>

         <div className="shadow-lg rounded m-2 p-5 w-48 h-60">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">SSS1A</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold leading-[3rem]">Chemistry</p>
              <p className="text-xs leading-10">April 01 2023</p>
              <p className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm py-1 w-32 ml-3 mt-4">View Assignment</p>
            </div>
         </div>
      </div>
      
    </>
  )
}

export default Assignments