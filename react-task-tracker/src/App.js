import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete=
      {deleteTask}/>
    </div>
  );
}

export default App;
