import React from 'react'
import SearchForm from './sections/SearchForm'
import UsersTable from './sections/UsersTable'

const Admin = () => {
  return (
    <main className='size-full font-manrope p-3 | grid grid-cols-1 lg:grid-cols-[20%_80%] gap-10'>
      <SearchForm/>
      <UsersTable />
    </main>
  )
}

export default Admin