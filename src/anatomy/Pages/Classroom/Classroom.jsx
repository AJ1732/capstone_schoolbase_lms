import classroom from "../../../assets/Classes-Frame.png"
import sub from "../../../assets/subscriptions.png"
import sync from "../../../assets/sync_saved_locally.png"
import quiz from "../../../assets/quiz.png"


const Classroom = () => {
  return (
    <>
    <img src={classroom} alt="" />
    <section>

      <div className="grid lg:grid-cols-3 mt-7 gap-5 sm:md:grid-cols-1">

        <div className="grid grid-cols-2 leading-8 text-xs font-bold bg-white  border-solid shadow rounded-md py-2 pl-5 pr-0 w-[340px]">
          <p>Total Enrolled</p>
          <img src={sub} alt="" className="w-5 mt-3 ml-20" />
          <p>12</p>
        </div>

        <div className="grid grid-cols-2 leading-8 text-xs font-bold bg-white  border-solid shadow rounded-md py-2 pl-5 pr-0 w-[340px]">
          <p>Completed</p>
          <img src={sync} alt="" className="w-5 mt-3 ml-20" />
          <p>12</p>
        </div>

        <div className="grid grid-cols-2 leading-8 text-xs font-bold bg-white  border-solid shadow rounded-md py-2 pl-5 pr-0 w-[340px]">
          <p>Quiz Score</p>
          <img src={quiz} alt="" className="w-5 mt-3 ml-20" />
          <p>12</p>
        </div>

      </div>

      

    </section>
    </>
  )
}

export default Classroom 