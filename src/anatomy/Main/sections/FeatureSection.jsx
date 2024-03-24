import React from 'react'
import data from '../../../database/data.json'
import { FeatureCard } from '../../../components/Cards'


const FeatureSection = () => {
  const { features, testimonials, teamMembers } = data;

  return (
    <section id='features' className="content | w-full min-h-[1000px] border border-black">
      <div>
        <h1 className="text-3xl font-bold">FEATURES</h1>
        <div className='grid grid-cols-2 gap=x-6 gap-y-12'>
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