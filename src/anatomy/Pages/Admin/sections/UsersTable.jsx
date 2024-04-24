import React from 'react'

const UsersTable = () => {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-10 overflow-scroll'>
      <fieldset className='self-end space-x-4'>
        <label htmlFor="sort" className='font-bold text-sm'>Sort by</label>
        <select name="sort" id="sort" className='text-sm p-2 border rounded-md'>
          <option value="Registered Last" className=''>Registered Last</option>
        </select>
      </fieldset>

      <fieldset>
        <div className='bg-[#F8F8F8] py-1 px-2 | flex justify-center items-center gap-4 | rounded-md'>
          <input id='selectAll' type="checkbox" className='size-4 border-4' />
          <label htmlFor="selectAll" className='font-bold text-[#454655]'>SELECT ALL</label>
        </div>
      </fieldset>

      {/* TODO: USERS TABLE HERE */}
      <div className=''>
        <table class="table-auto min-w-[50rem] w-full overflow-auto">
          <thead className='text-left'>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Date Added</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>1961</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable