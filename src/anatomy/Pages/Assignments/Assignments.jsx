
import assignmnent from "../../../assets/assignment.svg"
import dropdown from "../../../assets/arrow_drop_down.png"
import dot from "../../../assets/green-dot.png"

const Assignments = () => {
  const assignmentData = [
    {
      id: 1,
      class: "SS1A",
      subject: "Mathematics",
      date: "Jan 24, 2024",
      text: "View Assignment",
    },
    {
      id: 2,
      class: "SS1A",
      subject: "Basic Science",
      date: "Feb 02, 2024",
      text: "View Assignment",
    },
    {
      id: 3,
      class: "SS1A",
      subject: "Fine Art",
      date: "Mar 04, 2024",
      text: "View Assignment",
    },
    {
      id: 4,
      class: "SS1A",
      subject: "Physics",
      date: "Mar 04, 2024",
      text: "View Assignment",
    },
    {
      id: 5,
      class: "SS1A",
      subject: "Biology",
      date: "Mar 04, 2024",
      text: "View Assignment",
    },
    {
      id: 6,
      class: "SS1A",
      subject: "Geography",
      date: "Mar 12, 2024",
      text: "View Assignment",
    },
    {
      id: 7,
      class: "SS1A",
      subject: "Civic Education",
      date: "Apr 01, 2024",
      text: "View Assignment",
    },
    {
      id: 8,
      class: "SS1A",
      subject: "Chemistry",
      date: "Apr 01, 2024",
      text: "View Assignment",
    },
  ]



  return (
    <section>
      <div className='bg-primary-50 py-8 px-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Assignment</h1>
        <img src={assignmnent} alt="" />
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

      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-x-16 place-items-center mb-20">
        {/* ASSIGNMENT CARDS */}
        {assignmentData.map( data => (
          <div key={data.id} className="rounded border border-primary-50 mt-7 py-[30px] px-5 w-56 h-72 | flex flex-col justify-between items-center">
            <div className="grid grid-cols-2 gap-32 mt-3 mb-5">
              <p className="text-xs">{data.class}</p>
              <img src={dot} alt="" className="w-3" />
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <p className="text-base font-bold leading-[3rem]">{data.subject}</p>
              <p className="text-xs leading-10">{data.date}</p>
              <p className="text-xs text-primary-900 bg-primary-50 font-bold rounded-sm py-[5px] px-2.5 w-32">View Assignment</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Assignments