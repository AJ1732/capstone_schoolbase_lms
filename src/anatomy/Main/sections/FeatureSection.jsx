import React from 'react'
import data from '../../../database/data.json'
import { FeatureCard } from '../../../components/Cards'
import woman from "../../../assets/isometric view of young woman meditating.png"
import dropdown from "../../../assets/arrow_drop_down.png"


const FeatureSection = () => {
  
  const { features } = data;

  return (
    <section id='features' className="content | w-full min-h-[400px] text-[#1b1b1b] py-20">
      <div className='space-y-7'>
       
          <div className='grid grid-cols-2 gap-30'>
            <div>
            <h1 className="text-2xl font-semibold font-generalSans">
             KEY FEATURES
             <div className='ml-[280px] mt-1 h-1 w-[50px] bg-[#007BFF]'>
             </div>
        </h1>
      
        <div className='grid grid-cols-2 gap-x-[200px] gap-y-12 mt-7 ml-10 text-start'>

            <div className="grid grid-cols-2 w-[600px] gap-10 dropdown dropdown-bottom">
                 <div>
                    <h1 className="font-semibold">Student Information System (SIS)</h1>
                    <p tabIndex={0} className="card compact text-white dropdown-content z-[1] shadow bg-base-100 rounded-box w-[300px] text-sm mt-3 p-5">
                      <span className="font-bold mb-2">
                        Comprehensive Student Profiles and Admissions
                      </span>
                      Manage student profiles with personal details, academic records, attendance, and medical history. Streamline admissions with features for application submission, document verification, and enrollment tracking.
                   </p>
                </div>
             
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <img src={dropdown} alt="Manage student profiles" className="mt-[3px]"/>
              </div>
            </div> 

            <div className="grid grid-cols-2 w-[600px] gap-10 dropdown dropdown-bottom">
                 <div>
                    <h1 className="font-semibold">Attendance Management</h1>
                    <p tabIndex={0} className="card compact text-white dropdown-content z-[1] shadow bg-base-100 rounded-box w-[300px] text-sm mt-3 p-5">
                      <span className="font-bold mb-2">
                        Student and Staff Attendance Tracking
                      </span>
                      Easily track daily student attendance, generate reports, and notify parents of absenteeism. Record and manage staff attendance to ensure organizational efficiency.
                   </p>
                </div>
             
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <img src={dropdown} alt="Manage student profiles" className="mt-[3px]"/>
              </div>
            </div> 

            <div className="grid grid-cols-2 w-[600px] gap-10 dropdown dropdown-bottom">
                 <div>
                    <h1 className="font-semibold">Communication and Collaboration</h1>
                    <p tabIndex={0} className="card compact text-white dropdown-content z-[1] shadow bg-base-100 rounded-box w-[300px] text-sm mt-3 p-5">
                      <span className="font-bold mb-2">
                        Parent-Teacher Communication and Announcements
                      </span>
                      Facilitate seamless communication between parents and teachers through messaging and appointment scheduling. Share important school announcements, news, and events. Create online forums for engaging student and teacher discussions to foster collaboration and knowledge sharing.
                   </p>
                </div>
             
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <img src={dropdown} alt="Manage student profiles" className="mt-[3px]"/>
              </div>
            </div> 
            
            <div className="grid grid-cols-2 w-[600px] gap-10 dropdown dropdown-bottom">
                 <div>
                    <h1 className="font-semibold">Academic Management</h1>
                    <p tabIndex={0} className="card compact text-white dropdown-content z-[1] shadow bg-base-100 rounded-box w-[300px] text-sm mt-3 p-5">
                      <span className="font-bold mb-2">
                        Efficient Curriculum and Grade Management
                      </span>
                      Define and organize the school's curriculum, courses, subjects, and class schedules. Record grades, calculate GPAs, and generate transcripts seamlessly within the system. Manage exams, assignments, and quizzes efficiently.
                   </p>
                </div>
             
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <img src={dropdown} alt="Manage student profiles" className="mt-[3px]"/>
              </div>
            </div> 

            <div className="grid grid-cols-2 w-[600px] gap-10 dropdown dropdown-bottom">
                 <div>
                    <h1 className="font-semibold">Examination and Assessment</h1>
                    <p tabIndex={0} className="card compact text-white dropdown-content z-[1] shadow bg-base-100 rounded-box w-[300px] text-sm mt-3 p-5">
                      <span className="font-bold mb-2">
                       Seamless Exam Scheduling and Assessment
                      </span>
                      Create exam timetables, assign venues, and manage the examination process smoothly. Provide various assessment methods, including online quizzes and assignments, to gauge student understanding. Analyze and distribute exam results to students and parents.
                   </p>
                </div>
             
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <img src={dropdown} alt="Manage student profiles" className="mt-[3px]"/>
              </div>
            </div> 
            <div className="grid grid-cols-2 w-[600px] gap-10 dropdown dropdown-bottom">
                 <div>
                    <h1 className="font-semibold">Security and Access Control</h1>
                    <p tabIndex={0} className="card compact text-white dropdown-content z-[1] shadow bg-base-100 rounded-box w-[300px] text-sm mt-3 p-5">
                      <span className="font-bold mb-2">
                       Parent-Teacher Communication and Announcements
                      </span>
                      Facilitate seamless communication between parents and teachers through messaging and appointment scheduling. Share important school announcements, news, and events. Create online forums for engaging student and teacher discussions to foster collaboration and knowledge sharing.
                   </p>
                </div>
             
              <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
                <img src={dropdown} alt="Manage student profiles" className="mt-[3px]"/>
              </div>
            </div>
            
          </div>
        
      </div>
          
        <div>
        <img src={ woman} alt="isometric view of young woman meditating" className='w-[300px] ml-56 mt-5' />
        </div>

          </div>
       
      </div>
    </section>
  )
}

export default FeatureSection