const courseData = [
  {
    id: 1,
    name: 'English Language',
    description: 'Difficulty - Advanced',
    status: 'Enrolled'
  },
  {
    id: 2,
    name: 'Mathematics',
    description: 'Difficulty - Beginner',
    status: 'Enrolled'
  },
  {
    id: 3,
    name: 'Fine Arts',
    description: 'Difficulty - Beginner',
    status: 'Pending'
  },
  {
    id: 4,
    name: 'Social Studies',
    description: 'Difficulty - Beginner',
    status: 'Enrolled'
  },
  {
    id: 5,
    name: 'Computer Science',
    description: 'Difficulty - Beginner',
    status: 'Pending'
  },
];

const CoursesSection = () => {

  return (
    <section className='md:col-span-2 bg-white w-full h-[34rem] sm:h-auto p-8 sm:pr-0 rounded-lg drop-shadow-md overflow-auto'>
      <div className="max-w-[50rem] min-w-[40rem] grid grid-cols-1 gap-8">
        <div className='w-full space-y-2 leading-9'>
          <h3 className='font-bold text-xl'>Courses</h3>
          <p className='font-bold text-sm'>Maximum number of courses allowed: 9</p>
          <p className='font-bold text-primary-400 text-sm'>[Including general courses: find courses available to you below]</p>
        </div>

        {/* <div>
          <div className='grid grid-cols-8 font-bold mt-8 text-sm'>
            <p className='col-span-1'>#</p>
            <h3 className='col-span-2 sm:col-span-2 md:col-span-3 sm:ml-0 md:ml-11 lg:-ml-10'>NAME</h3>
            <h3 className='col-span-2  sm:col-span-2 md:col-span-3 ml-11 sm:ml-0 md:ml-11 lg:-ml-11'>DESCRIPTION</h3>
          </div>

          <div className='grid grid-cols-3 gap-8 text-xs'>
            <div className='mt-3 font-semibold'>
              <ol className="list-decimal leading-[_54px] ml-4">
                <li className="pl-8">English Language</li>
                <li className="pl-8">Mathematics</li>
                <li className="pl-8">Fine Arts</li>
                <li className="pl-8">Social Studies</li>
                <li className="pl-8">Computer Science</li>
              </ol>
            </div>
            <div className='font-semibold'>
              <ol className="list-none leading-[_54px] ml-16 ">
                <li>Difficulty-Advanced</li>
                <li>Difficulty-Beginner</li>
                <li>Difficulty-Beginner</li>
                <li>Difficulty-Beginner</li>
                <li>Difficulty-Beginner</li>
              </ol>
            </div>
            <div className='font-semibold'>
              <ol className="list-none leading-[_10px] ml-28 text-center">
                <li className="bg-white mt-5 rounded-sm w-16 font-bold py-3">Enrolled</li>
                <li className="bg-white mt-5 rounded-sm w-16 font-bold py-3">Enrolled</li>
                <li className="bg-dark-gray mt-5 rounded-sm w-16 py-3">Pending</li>
                <li className="bg-white mt-5 rounded-sm w-16 font-bold py-3">Enrolled</li>
                <li className="bg-dark-gray mt-5 rounded-sm w-16 py-3">Pending</li>
              </ol>
            </div>
          </div>
        </div> */}
        <table class="table-auto font-bold">
          <thead className="h-12 md:h-16 text-left text-primary-900">
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody className="text-text-black">
            {courseData.map( ({ id, name, description, status }) => (
              <tr key={id} className="h-12 md:h-16">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default CoursesSection;





