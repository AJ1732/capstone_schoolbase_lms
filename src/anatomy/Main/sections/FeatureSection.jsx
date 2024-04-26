import React from 'react'
import data from '../../../database/data.json'
import { FeatureCard } from '../../../components/Cards'
import woman from "../../../assets/isometric view of young woman meditating.png"


const FeatureSection = () => {
  
  const { features } = data;

  return (
    <section id='features' className="content | w-full min-h-[400px] py-20">
      <div className='space-y-7'>
       
          <div className='grid grid-cols-2 gap-30'>
            <div>
            <h1 className="text-2xl font-semibold font-generalSans">
             KEY FEATURES
             <div className='ml-[280px] mt-1 h-1 w-[50px] bg-[#007BFF]'>
             </div>
        </h1>
      
        <div className='grid grid-cols-2 gap-x-[50px] gap-y-12 mt-7 ml-10'>
            
            {features.map( feature => (
              <FeatureCard
                key={feature.id}
                heading={feature.heading} 
                img={feature.img}
              />
            ))}
          </div>
        
      </div>
          
        <div>
        <img src={ woman} alt="isometric view of young woman meditating" className='w-[400px] ml-32' />
        </div>

          </div>
       
      </div>
    </section>
  )
}

export default FeatureSection