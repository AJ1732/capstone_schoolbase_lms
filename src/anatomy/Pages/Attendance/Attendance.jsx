import { useState } from "react";
import attendance from "../../../assets/attendance.svg"

const attendanceData = [
  {
    id: 1,
    session: '2023/2024',
    term: 'First Term',
    record: {
      schoolOpened: '42',
      daysPresent: '30',
      daysLate: '2',
      daysAbsent: '4',
    }
  },
  {
    id: 2,
    session: '2023/2024',
    term: 'Second Term',
    record: {
      schoolOpened: '46',
      daysPresent: '42',
      daysLate: '7',
      daysAbsent: '4',
    }
  },
  {
    id: 3,
    session: '2023/2024',
    term: 'Third Term',
    record: {
      schoolOpened: '31',
      daysPresent: '11',
      daysLate: '0',
      daysAbsent: '20',
    }
  },
  {
    id: 4,
    session: '2022/2023',
    term: 'First Term',
    record: {
      schoolOpened: '48',
      daysPresent: '40',
      daysLate: '2',
      daysAbsent: '8',
    }
  },
];

const Attendance = () => {
  const [session, setSession] = useState("All Sessions");
  const [term, setTerms] = useState("All Terms");
  const sessions = ['All Sessions', '2021/2022', '2022/2023', '2023/2024']
  const terms = ['All Terms', 'First Term', 'Second Term', 'Third Term']

  return (
    <section className="space-y-5">
      {/* HEADLINE */}
      <div className='bg-primary-50 py-8 px-5 md:px-12 rounded-md gap-5 | flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg tracking-wide'>Attendance</h1>
        <figure className="flex justify-center items-center gap-4">
          <img src={attendance} alt="" />
        </figure>
      </div>
      
      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-5 w-auto">
        <h3 className="font-bold">Filter:</h3>

        <div className="flex gap-2">
          <select 
            value={session} 
            onChange={(e) => setSession(e.target.value)}
            className='bg-white text text-sm border px-2.5 py-3 rounded-md shadow-sm'
          > 
            {sessions.map( session => (
              <option key={session} value={session}>{session}</option> 
            ))}
          </select>

          <select 
            value={term} 
            onChange={(e) => setTerms(e.target.value)}
            className='bg-white text text-sm border px-2.5 py-3 rounded-md shadow-sm'
          > 
            {terms.map( term => (
              <option key={term} value={term}>{term}</option> 
            ))}
          </select> 
        </div>
      </div>

      {/* ATTENDANCE DATA */}
      <section className="sm:md:flex bg-white h-auto w-auto sm:h-auto sm:w-auto p-8 rounded-lg mt-5 mb-20 md:sm:flex-col shadow">   
        {attendanceData.map(({ id, session, term, record }) => (
          <div key={id}>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm">{session} <span className="ml-5 uppercase"> {term}</span></p>
              <button className="bg-primary-50 font-bold text-xs text-primary-900 px-5 py-1.5 rounded-sm">View Attendance</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 text-center -mr-6 -ml-6">
              <div className="bg-[#c9e3ff] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
                <p>School Opened</p>
                <p>{record.schoolOpened}</p>
              </div>

              <div className="bg-[#e2ffea] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
                <p>Days Present</p>
                <p>{record.daysPresent}</p>
              </div>

              <div className="bg-[#ffefd2] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
                <p>Days Late</p>
                <p>{record.daysLate}</p>
              </div>

              <div className="bg-[#ffcfdb] rounded-lg border-solid py-2 font-semibold text-xs m-5 leading-6">
                <p>Days Absent</p>
                <p>{record.daysAbsent}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Attendance