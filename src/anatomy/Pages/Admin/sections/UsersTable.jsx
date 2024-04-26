import React, { useEffect, useState } from 'react'
import edit from '../../../../assets/edit.svg'
import { useValueContext } from '../../../../context/ContextProvider';
import { AuthLoader2 } from '../../../../components/Loader/Loaders';
import dayjs from 'dayjs'
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';

const UsersTable = () => {
  const { state, dispatch } = useValueContext();
  const [ loadTable, setLoadTable ] = useState(false);
  const [ openEdit, setOpenEdit ] = useState(false);
  const [ openDelete, setOpenDelete ] = useState(false);
  const [ singleUser, setSingleUser ] = useState('');

  const users = state.users

  // GET ALL USERS
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadTable(true)
        const response = await fetch('https://capstone-schoolbase-server.onrender.com/api/users');
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: 'SET_USERS', payload: data })
        } else if (!response.ok)  {
          throw new Error('Request failed with status ' + response.status);
        }
        setLoadTable(false)
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchUsers();
  }, [dispatch]);

  // HANDLE FUNCTIONS
  const handleDelete = async (id) => {
    try {
      const response = await fetch('https://capstone-schoolbase-server.onrender.com/api/users/' + id, {
        method: "DELETE"
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: 'DELETE_USER', payload: data })
      } else if (!response.ok)  {
        throw new Error('Request failed with status ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    const fetchSingleUser = async (id) => {
      try {
        // setLoadTable(true)
        const response = await fetch('https://capstone-schoolbase-server.onrender.com/api/users/' + id);
        const data = await response.json();
        console.log(data)
        setSingleUser(data)
        // if (response.ok) {
        //   dispatch({ type: 'SET_USERS', payload: data })
        // } else if (!response.ok)  {
        //   throw new Error('Request failed with status ' + response.status);
        // }
        // setLoadTable(false)
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    // fetchSingleUser("662a8662adbe8bc252d7f3d4")
  }, [])

  const createdDate = (dateData) => {
    const date = dayjs(dateData);
    return (
      <span>{date.year()}-{date.month() + 1}-{date.date()}</span>
    )
  }

  console.log(users.length);
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
          <input id='selectAll' type="checkbox" className='size-5 border-4' />
          <label htmlFor="selectAll" className='font-bold text-[#454655]'>SELECT ALL</label>
        </div>
      </fieldset>

      <div className='w-full min-h-[55dvh] flex flex-col justify-start items-start overflow-scroll'>
        {/* TODO: USERS TABLE HERE */}
        <table className="table-auto  min-w-[50rem] w-full">
          <tbody>
            {/* To load Table Contents */}
            {
              !loadTable? 
              users.map(({ _id, firstname, surname, role, createdAt }) => (
                <tr key={_id} className='bg-[#F8F8F8] h-11 text-sm font-bold'>
                  <td className='pl-3'>
                    <input id={`check-${_id}`} type="checkbox" className='size-5 mt-1' />
                  </td>
                  <td className='min-w-60' onDoubleClick={() => setOpenDelete(true)}>
                    <label htmlFor={`check-${_id}`}>
                      <span className='capitalize'>{firstname} </span> 
                      <span className='capitalize'>{surname}</span>
                    </label>
                  </td>
                  <td>{role}</td>
                  <td>{createdDate(createdAt)}</td>
                  <td>
                    <button className='bg-primary-10 text-primary-900 font-bold | px-2 py-1 rounded'>active</button>
                  </td>
                  <td>
                    <figure onClick={() => setOpenEdit(true)}>
                      <img src={edit} />
                    </figure>
                  </td>
                  <UserEdit open={openEdit} onClose={() => setOpenEdit(false)} id={_id} user={singleUser}  />
                  <UserDelete open={openDelete} onClose={() => setOpenDelete(false)} id={_id} user={singleUser}  />
                </tr>
              )) 
              : 
              <tr className='text-2xl'>
                <td className='flex justify-center items-center'>
                  <AuthLoader2 parentClassName={`h-full w-[80%] bg-transparent`} divClassName={`size-2`} />
                </td>
              </tr>
            }    

            {/* To view if no data in the database */}
            {
              users.length < 1 && 
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