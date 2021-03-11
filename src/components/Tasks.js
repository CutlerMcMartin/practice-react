import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: "Doctor's Appointment"
            },
            {
                id: 2,
                text: "Doink Appointment"
            }
        ]
    );
    return (
        <>
          {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}  
        </>
    )
}

export default Tasks
