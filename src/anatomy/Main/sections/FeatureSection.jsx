import React from 'react'
import data from '../../../database/data.json'
import { FeatureCard } from '../../../components/Cards'


const FeatureSection = () => {
  const { features, testimonials, teamMembers } = data;

  return (
    <section id='features' className="content | w-full min-h-[1000px] py-12">
      <div className='space-y-7'>
        <h1 className="text-2xl font-semibold font-generalSans">Key Features</h1>
        <div className='grid grid-cols-2 gap-x-6 gap-y-12'>
          {features.map( feature => (
            <FeatureCard
              key={feature.id}
              img={feature.img} 
              heading={feature.heading} 
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection