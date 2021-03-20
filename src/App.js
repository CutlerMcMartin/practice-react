import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: "Doctor's Appointment",
          day: "May 16th"
      },
      {
          id: 2,
          text: "Doink Appointment",
          day: "May 15th"
      }
    ]
  );

  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
