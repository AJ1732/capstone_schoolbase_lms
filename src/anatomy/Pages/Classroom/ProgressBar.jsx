
import { useState } from 'react'

function ProgressBar() {

  const [progress, setProgress] = useState(40)

  //const updateProgress = () => {
  //  setProgress(progress => progress + 10)
  //} 

  return (
    <>
      <div className='bg-[#d2daef] w-[60%] h-4 rounded-lg '>
         <div className='bg-[#007BFF] h-4 w-1/2 rounded-lg' style={{width: `${progress}%`}}>
         </div>
      </div>
    </>
  )
}

export default ProgressBar
