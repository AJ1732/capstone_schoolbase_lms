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

      <div className='md:col-span-2 bg-white w-full min-h-[30rem] sm:h-auto p-8 sm:pr-0 rounded-lg drop-shadow-md overflow-auto'>
        <div className="max-w-[50rem] min-w-[40rem] grid grid-cols-1 gap-8">
          <div className='w-full space-y-2 leading-9'>
            <h3 className='font-bold text-xl'>Courses</h3>
            <p className='font-bold text-sm'>Maximum number of courses allowed: 9</p>
            <p className='font-bold text-primary-400 text-sm'>[Including general courses: find courses available to you below]</p>
          </div>

          <table className="table-auto lg:w-[calc(100dvw-280px)] font-bold">
            {/* TABLE HEADINGS */}
            <thead className="h-12 md:h-16 text-left text-primary-900">
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th></th>
                <th>GRADE</th>
              </tr>
            </thead>

            {/* TABLE DATA */}
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
                  <td className={`uppercase  ${grade === 'Pending' && 'text-error'}`}>{grade}</td>
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