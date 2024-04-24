import React from 'react'

const SearchForm = () => {
  return (
    <div className='w-full space-y-10'>
      <h2 className='font-semibold text-xl'>Administrator</h2>
      
      <div className='space-y-7'>
        <button className='w-full bg-primary-00 font-medium text-white text-center uppercase  py-2.5 rounded-md'><span>+</span> New User</button>
        <form action="">
          <fieldset className='space-y-5'>
            {/* SEARCH INPUT */}
            <div className='flex flex-col gap-2'>
              <label htmlFor="search" className='text-sm text-[#3A3A3A]'>Search</label>
              <input 
                id='search' 
                type="text" 
                className='py-1.5 px-2 border border-[#A8AABC] rounded-md'
              />
            </div>

            {/* FILTER INPUT */}
            <div className='flex flex-col gap-2'>
              <label htmlFor="search" className='text-sm text-[#3A3A3A]'>Filter by date of registration</label>
              <input 
                id='search' 
                type="text" 
                className='py-1.5 px-2 border border-[#A8AABC] rounded-md'
              />
            </div>

            {/* SORT INPUT */}
            <div className='flex flex-col gap-2'>
              <label htmlFor="search" className='text-sm text-[#3A3A3A]'>Sort by role</label>
              <input 
                id='search' 
                type="text" 
                className='py-1.5 px-2 border border-[#A8AABC] rounded-md'
              />
            </div>
          </fieldset>
        </form>
      </div>

    </div>
  )
}

export default SearchForm