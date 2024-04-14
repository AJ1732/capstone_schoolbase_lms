import result from "../../../assets/result.svg"

const courseData = [
  {
    id: 1,
    name: 'English Language',
    description: 'Difficulty - Advanced',
    status: 'Enrolled',
    grade: 'Excellent'
  },
  {
    id: 2,
    name: 'Mathematics',
    description: 'Difficulty - Beginner',
    status: 'Enrolled',
    grade: 'pass'
  },
  {
    id: 3,
    name: 'Fine Arts',
    description: 'Difficulty - Beginner',
    status: 'Enrolled',
    grade: 'Excellent'
  },
  {
    id: 4,
    name: 'Social Studies',
    description: 'Difficulty - Beginner',
    status: 'Enrolled',
    grade: 'Excellent',
  },
  {
    id: 5,
    name: 'Computer Science',
    description: 'Difficulty - Beginner',
    status: 'Enrolled',
    grade: 'Pending'
  },
];

const Results = () => {

  return (
    <section className="flex flex-col gap-5">
      <div className='bg-primary-50 py-8 px-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Results</h1>
        <img src={result} alt="" />
      </div>

      {/* <div className='col-span-4 bg-white shadow h-[34rem] sm:h-auto sm:w-auto p-8 rounded-lg mt-5 mb-20'>
        <div className='leading-9'>
          <h3 className='font-bold'>Courses</h3>
          <p className='font-bold text-xs'>Maximum number of courses allowed: 9</p>
          <p className='text-[#7bbbff] text-xs mt-2 ml-0 font-bold'>[Including general courses: find courses available to you below]</p>
        </div>

        <div className='grid grid-cols-8 font-bold mt-8 text-sm'>
          <p className='col-span-1 text-[#204c8c]'>#</p>
          <h3 className='col-span-2 sm:col-span-2 md:col-span-3 sm:ml-0 md:ml-11 lg:-ml-20 text-[#204c8c]'>NAME</h3>
          <h3 className='col-span-2  sm:col-span-2 md:col-span-3 ml-11 sm:ml-0 md:ml-11 lg:-ml-44 text-[#204c8c]'>DESCRIPTION</h3>
          <h3 className="lg:-ml-5 text-[#204c8c]">GRADE</h3>
        </div>

        <div className='grid grid-cols-4 gap-8 text-xs'>

          <div className='mt-3 font-bold'>
            <ol className="list-decimal leading-[_54px] ml-4">
              <li className="pl-8">English Language</li>
              <li className="pl-8">Mathematics</li>
              <li className="pl-8">Fine Arts</li>
              <li className="pl-8">Social Studies</li>
              <li className="pl-8">Computer Science</li>
            </ol>
          </div>

          <div className='mt-3 font-bold'>
            <ol className="list-none leading-[_54px] ml-16 ">
              <li>Difficulty-Advanced</li>
              <li>Difficulty-Beginner</li>
              <li>Difficulty-Beginner</li>
              <li>Difficulty-Beginner</li>
              <li>Difficulty-Beginner</li>
            </ol>
          </div>

          <div className='font-bold'>
            <ol className="list-none leading-[_10px] ml-28 text-center">
              <li className=" text-[#1e4b8c] bg-[#d2daef]  mt-5 rounded-md w-16 font-bold py-3">Enrolled</li>
              <li className=" text-[#1e4b8c] bg-[#d2daef]  mt-5 rounded-md w-16 py-3">Enrolled</li>
              <li className=" mt-5 rounded-md w-16 py-3  text-[#1e4b8c] bg-[#d2daef] ">Pending</li>
              <li className="mt-5 rounded-md w-16 py-3  text-[#1e4b8c] bg-[#d2daef] ">Enrolled</li>
              <li className=" mt-5 rounded-md w-16 py-3  text-[#1e4b8c] bg-[#d2daef]">Pending</li>
            </ol>
          </div>

          <div className='mt-3 font-bold'>
            <ol className="list-none leading-[_54px] ml-20 ">
              <li>EXCELLENT</li>
              <li>PASS</li>
              <li>EXCELLENT</li>
              <li>EXCELLENT</li>
              <li className="text-[#f3557c]">PENDING</li>
            </ol>
          </div>

        </div>
      </div> */}

      <div className='md:col-span-2 bg-white w-full min-h-[30rem] sm:h-auto p-8 sm:pr-0 rounded-lg drop-shadow-md overflow-auto'>
        <div className="max-w-[50rem] min-w-[40rem] grid grid-cols-1 gap-8">
          <div className='w-full space-y-2 leading-9'>
            <h3 className='font-bold text-xl'>Courses</h3>
            <p className='font-bold text-sm'>Maximum number of courses allowed: 9</p>
            <p className='font-bold text-primary-400 text-sm'>[Including general courses: find courses available to you below]</p>
          </div>

          <table className="table-auto font-bold">
            <thead className="h-12 md:h-16 text-left text-primary-900">
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th></th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody className="text-text-black">
              {courseData.map( ({ id, name, description, status, grade }) => (
                <tr key={id} className="h-14 md:h-16">
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>
                    <span className={`
                      text-center text-xs p-3 rounded-md
                      ${status === 'Enrolled'? 'bg-primary-100 text-primary-900': 'bg-primary-00 text-white'}
                    `}>
                      {status}
                    </span>
                  </td>
                  <td className={`uppercase ${grade === 'Pending' && 'text-error'}`}>{grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Results