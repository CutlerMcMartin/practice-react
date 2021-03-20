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
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask}/> : "No tasks broski"}
    </div>
  );
}

export default App;
