import React, { useState } from 'react'
import './TodoList.css'
import dayjs from 'dayjs'

const TodoList = () => {
  // TIME DATA
  const timeHour = dayjs().hour();
  const timeMin = dayjs().minute();

  // STATE MANAGEMENT
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Geometry Task',
      subject: 'Mathematics',
      time: '8:00AM',
      completed: false
    },
    {
      id: 2,
      task: 'The Art of Story Telling',
      subject: 'English Language',
      time: '2:40AM',
      completed: false
    },
    {
      id: 3,
      task: 'Ethics',
      subject: 'Social Studies',
      time: '4:50AM',
      completed: false
    },
  ])

  const [input, setInput] = useState('');

  const [subject, setSubject] = useState("Subject");

  const subjects = ['Subject', 'Mathematics', 'English Language', 'Physics', 'Chemistry', 'Social Studies', 'Art']

  // FUNCTIONS
  const handleCheck = (selectId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === selectId) {
          return {...todo, completed: !todo.completed};
        }
        return todo
      })
    );
  }

  const clearForm = () => {
    setInput('')
    setSubject('Subject')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: input,
      subject: subject,
      time: `${timeHour}:${timeMin}${timeHour > 12? 'PM': 'AM'}`,
      completed: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
    clearForm();
  }

  const handleDelete = (selectId) => {
    const filterTodo = todos.filter(todo => todo.id !== selectId )
    setTodos(filterTodo)
  }

  return (
    <div className='min-w-[280px] w-fit bg-white text-[#42404C] p-3 space-y-3 rounded-md'>
      <h3 className='text-lg'>To Do List</h3>

      {/* TODO LIST */}
      <ul className='text-sm space-y-2'>
        {todos.map(({ id, task, subject, time, completed }) => (
          <li key={id} className={`${completed && 'line-through'}`} onDoubleClick={() => handleDelete(id)}>
            <div className='flex justify-start items-start gap-3'>
              {/* checkbox */}
              <input 
                id={`Todo${id}`} 
                type="checkbox"
                className='mt-1' 
                checked={completed}
                onChange={() => handleCheck(id)}
              /> 

              {/* task content */}
              <div className='text-sm flex flex-col'>
                {/* task title */}
                <label htmlFor={`Todo${id}`} className='text-[#42404C]'>{task}</label>
                
                {/* task specifications */}
                <div className='flex divide-x-2'>
                  <p className='text-[#676767] pr-2'>{subject}</p>
                  <p className='text-[#959595] pl-2'>{time}</p>
                </div>
              </div> 
            </div>
          </li>
        ))}
      </ul>

      {/* INPUT FORM */}
      <form onSubmit={handleSubmit} className='flex'>
        <input 
          id='taskInput'
          type="text"
          placeholder='Add Todo' 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <select 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
          className='bg-white border text-xs border-[#959595]'
        > 
          {subjects.map( subject => (
            <option value={subject}>{subject}</option> 
          ))}
        </select> 
        <button type='submit' className='bg-[#1A1A1A] text-white text-xs px-5 py-2 rounded-r-md'>Add</button>
      </form>
    </div>
  )
}

export default TodoList