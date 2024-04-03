

const CoursesSection = () => {


  return (
    <section className='
      col-span-2 | bg-[#F0F0F0] h-[34rem] size-full | p-8 rounded-lg
      bg
    '>
      <div className='leading-9'>
        <h3 className='font-bold'>Courses</h3>
        <p className='font-bold text-xs'>Maximum number of courses allowes: 9</p>
        <p className='text-gray-500 text-xs mt-2 ml-0'>[Including general courses: find courses available to you below]</p>
      </div>

      <div className='grid grid-cols-8 font-bold mt-8 text-sm'>
        <p className='col-span-1'>#</p>
        <h3 className='col-span-2 -ml-10'>NAME</h3>
        <h3 className='col-span-2 ml-5'>DESCRIPTION</h3>
      </div>

      <div className='grid grid-cols-3 gap-8 text-xs'>
       
        <div className='mt-2 font-semibold'>
          <ol className="list-decimal leading-[_50px] ml-4">
            <li className="pl-8">English Language</li>
            <li className="pl-8">Mathematics</li>
            <li className="pl-8">Fine Arts</li>
            <li className="pl-8">Social Studies</li>
            <li className="pl-8">Computer Science</li>
          </ol>
        </div>
        <div className='mt-2 font-semibold'>
          <ol className="list-none leading-[_50px] ml-8 pl-2">
            <li>Difficulty-Advanced</li>
            <li>Difficulty-Beginner</li>
            <li>Difficulty-Beginner</li>
            <li>Difficulty-Beginner</li>
            <li>Difficulty-Beginner</li>
          </ol>
        </div>
        <div className='font-semibold'>
          <ol className="list-none leading-[_40px] ml-11 text-center borde">
            <li className="bg-white mt-5">Enrolled</li>
            <li  className="bg-white mt-5">Enrolled</li>
            <li className="bg-dark-gray mt-5">Pending</li>
            <li  className="bg-white mt-5">Enrolled</li>
            <li className="bg-dark-gray mt-5">Pending</li>
          </ol>
        </div>

       
      </div>
    </section>
  )
}

export default CoursesSection