import attendance from "../../../assets/Attendance-Frame (2).png"
import dropdown from "../../../assets/arrow_drop_down.png"

const Attendance = () => {

  return (
    <>

    <img src={attendance} alt="" />

        <div className="flex lg:flex-row sm:flex-col gap-5 w-auto h-10 mt-1">

              <h3 className="font-bold mt-2">Filter:</h3>

            <div className="flex flex-col gap-2 border-solid shadow-lg px-4 py-2">
              <h4>
                All Sessions
                <button className="ml-3"><img src={dropdown} alt="" /></button>
              </h4> 
            </div>

            <div className="flex flex-col gap-2 shadow-lg px-4 py-2">
              <h4>
                All Terms
                <button className="ml-3"><img src={dropdown} alt="" /></button>
              </h4> 
            </div>

        </div>

        <section className="sm:md:flex bg-[#F0F0F0] h-auto w-auto sm:h-auto sm:w-auto p-8 rounded-lg mt-5 md:sm:flex-col">

          <div className="flex justify-between my-2">
            <p className="text-sm">2023/2024 <span className="ml-5"> FIRST TERM</span></p>
            <button className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm px-5">View Attendance</button>
          </div>

         <div className="grid grid-cols-4 gap-1 text-center -mr-6 -ml-6">
         <div className="bg-[#c9e3ff] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
            <p>School Opened</p>
            <p>42</p>
          </div>

          <div className="bg-[#e2ffea] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
            <p>Days Present</p>
            <p>30</p>
          </div>

          <div className="bg-[#ffefd2] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
            <p>Days Late</p>
            <p>2</p>
          </div>

          <div className="bg-[#ffcfdb] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
            <p>Days Absent</p>
            <p>12</p>
          </div>
      </div>

      <div className="flex justify-between my-2">
            <p className="text-sm">2023/2024 <span className="ml-5"> FIRST TERM</span></p>
            <button className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm px-5">View Attendance</button>
          </div>
          <div className="grid grid-cols-4 gap-1 text-center -mr-6 -ml-6">
          <div className="bg-[#c9e3ff] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>46</p>
          </div>

          <div className="bg-[#e2ffea] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>42</p>
          </div>

          <div className="bg-[#ffefd2] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>7</p>
          </div>

          <div className="bg-[#ffcfdb] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>4</p>
          </div>
      </div>

         <div className="flex justify-between my-2">
            <p className="text-sm">2023/2024 <span className="ml-5"> FIRST TERM</span></p>
            <button className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm px-5">View Attendance</button>
          </div>

          <div className="grid grid-cols-4 gap-1 text-center -mr-6 -ml-6">
          <div className="bg-[#c9e3ff] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>31</p>
          </div>

          <div className="bg-[#e2ffea] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>11</p>
          </div>

          <div className="bg-[#ffefd2] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>0</p>
          </div>

          <div className="bg-[#ffcfdb] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>20</p>
          </div>
         </div>

         <div className="flex justify-between my-2">
          <p className="text-sm">2023/2024 <span className="ml-5"> FIRST TERM</span></p>
            <button className="text-xs text-[#1e4b8c] bg-[#d2daef] font-bold rounded-sm px-5">View Attendance</button>
          </div>

          <div className="grid grid-cols-4 gap-1 text-center -mr-6 -ml-6">
          <div className="bg-[#c9e3ff] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>48</p>
          </div>

          <div className="bg-[#e2ffea] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>40</p>
          </div>

          <div className="bg-[#ffefd2] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>2</p>
          </div>

          <div className="bg-[#ffcfdb] m-5 rounded-lg border-solid py-2 font-semibold text-xs leading-6">
            <p>Days Absent</p>
            <p>8</p>
          </div>
          </div>
         
        </section>

        
    </>
  )
}

export default Attendance