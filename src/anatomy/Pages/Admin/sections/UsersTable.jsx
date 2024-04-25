import React, { useEffect, useState } from 'react'
import edit from '../../../../assets/edit.svg'

const UsersTable = () => {
  const [ users, setUsers ] = useState([]);
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('https://capstone-schoolbase-server.onrender.com/api/users');
        const data = await response.json();
        
        if (response.ok) {
          setUsers(data)
          // dispatch({ type: 'ALL_WORKOUTS', payload: data })
        } else if (!response.ok)  {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchWorkouts();
  }, [])

  return (
    <div className='w-full flex flex-col justify-start items-start gap-10'>
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

      <div className='w-full min-h-[55dvh] flex flex-col justify-start items-start overflow-scroll'>
        {/* TODO: USERS TABLE HERE */}
        <table className="table-auto  min-w-[50rem] w-full">
          <tbody>
            {
              users.length > 0? 
              users.map(({ _id, firstname, surname, createdAt }) => (
                <tr key={_id} className='bg-[#F8F8F8] h-11 text-sm font-bold'>
                  <td className='pl-3'><input type="checkbox" /></td>
                  <td className='min-w-60'>{firstname} {surname}</td>
                  <td>Student</td>
                  <td>2024-04-4</td>
                  <td>
                    <button className='bg-primary-10 text-primary-900 font-bold | px-2 py-1 rounded'>active</button>
                  </td>
                  <td>
                    <figure>
                      <img src={edit} />
                    </figure>
                  </td>
                </tr>
              ))
              : 
              <tr className='text-2xl'>
                <td>No Users</td>
              </tr>
            }        
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable