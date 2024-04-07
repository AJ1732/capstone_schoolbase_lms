import result from "../../../assets/Result-Frame.png"

const Results = () => {

  return (
    <>
      <img src={result} alt="" />

  <section className='col-span-4 bg-[#F0F0F0] h-[34rem] sm:h-auto sm:w-auto p-8 rounded-lg mt-5'>

    <div className='leading-9'>
      <h3 className='font-bold'>Courses</h3>
      <p className='font-bold text-xs'>Maximum number of courses allowed: 9</p>
      <p className='text-gray-500 text-xs mt-2 ml-0'>[Including general courses: find courses available to you below]</p>
    </div>

    <div className='grid grid-cols-8 font-bold mt-8 text-sm'>
      <p className='col-span-1'>#</p>
      <h3 className='col-span-2 sm:col-span-2 md:col-span-3 sm:ml-0 md:ml-11 lg:-ml-20'>NAME</h3>
      <h3 className='col-span-2  sm:col-span-2 md:col-span-3 ml-11 sm:ml-0 md:ml-11 lg:-ml-44'>DESCRIPTION</h3>
      <h3 className="lg:-ml-5">GRADE</h3>
    </div>

    <div className='grid grid-cols-4 gap-8 text-xs'>

      <div className='mt-3 font-semibold'>
        <ol className="list-decimal leading-[_54px] ml-4">
          <li className="pl-8">English Language</li>
          <li className="pl-8">Mathematics</li>
          <li className="pl-8">Fine Arts</li>
          <li className="pl-8">Social Studies</li>
          <li className="pl-8">Computer Science</li>
        </ol>
      </div>

      <div className='mt-3 font-semibold'>
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
          <li className="bg-white mt-5 rounded-sm w-16 py-3">Pending</li>
          <li className="bg-white mt-5 rounded-sm w-16 font-bold py-3">Enrolled</li>
          <li className="bg-white mt-5 rounded-sm w-16 py-3">Pending</li>
        </ol>
      </div>

      <div className='mt-3 font-semibold'>
        <ol className="list-none leading-[_54px] ml-20 ">
          <li>EXCELLENT</li>
          <li>PASS</li>
          <li>EXCELLENT</li>
          <li>EXCELLENT</li>
          <li>PENDING</li>
        </ol>
      </div>

    </div>
  </section>
    </>
  )
}

export default Results