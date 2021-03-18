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

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} / >
    </div>
  );
}

export default App;
