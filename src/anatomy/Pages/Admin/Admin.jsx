import React from 'react'
import SearchForm from './sections/SearchForm'
import UsersTable from './sections/UsersTable'

const Admin = () => {
  return (
    <main className='w-full font-manrope p-3 | grid grid-cols-[20%_80%] gap-10'>
      <SearchForm/>
      <UsersTable />
    </main>
  )
}

export default Admin