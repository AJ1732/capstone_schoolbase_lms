import React from 'react'
import data from '../../../database/data.json'
import { ChooseCard } from '../../../components/Cards'
import Chooseimg from "../../../assets/isometric view of young woman and man discussing the project.png"


const ChooseSection = () => {

  const { chooses } = data;

  return (
  
    <section className="full-width content-grid | min-h-[400px] bg-opacity-80 border-b-[1px] border-[#007BFF]">
     
      <div className="content | font-generalSans text-black size-full pb-5 space-y-8 grid grid-cols-2">

        <div className="ml-20">
          <img src={Chooseimg} alt="isometric view of young woman and man discussing the project" className=" w-[450px] h-[630px] mt-16" />
        </div>
        
        <div className=''>
        <div className='space-y-4 text-start'>
          <h1 className="heading">
            WHY CHOOSE SCHOOLBASE?
            <div className='mt-1 h-1 w-[50px] bg-[#007BFF]'>
             </div>
          </h1>
          <p className='text-xs'>At School Base, we're committed to revolutionizing K-12 education in Nigeria <br />by providing a comprehensive and innovative platform that enhances <br /> teaching and learning experiences. Here are the key reasons why users <br />should choose our LMS:</p>
        </div>

      
        <div className='grid grid-cols-1 gap-y-3 mt-5'>
          {chooses.map( choose => (
              <ChooseCard 
                key={choose.id} 
                img={choose.img}
                heading={choose.heading}
                content={choose.content}
              />
            ))}
        </div>
        </div>
        
        </div>
    </section>
    
  )
}

export default ChooseSection