import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting with clients',
      day: 'Mar 10th at 11:00am',
      reminder: false,
    },
    {
      id: 3,
      text: 'Grocery shopping',
      day: 'May 15th at 4:00pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Exercise at the gym',
      day: 'Jun 20th at 9:00am',
      reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: 
      !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
