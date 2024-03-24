import React from 'react'
import data from '../../../database/data.json'
import { ChooseCard } from '../../../components/Cards'

const ChooseSection = () => {
  const { chooses } = data;

  return (
    <section className="full-width content-grid | min-h-[540px] bg-black bg-opacity-80">
      <div className="content | font-generalSans text-white size-full pt-14 pb-5 space-y-8">
        <div className='text-center space-y-4'>
          <h1 className="heading">Why Choose Us?</h1>
          <p>At School Base, we're committed to revolutionizing K-12 education in Nigeria by providing a comprehensive and innovative platform that enhances teaching and learning experiences. Here are the key reasons why users should choose our LMS:</p>
        </div>

        <div className='grid grid-cols-2 gap-x-6 gap-y-8'>
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
    </section>
  )
}

export default ChooseSection