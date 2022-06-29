import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import VisibilityControl from './components/VisibilityControl'


const initialTasks = []

function App() {

  const [ tasksItems, setTasksItems ] = useState(initialTasks);
  const [showCompleted, setShowCompleted ] = useState(false);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('tasks');

    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems])

  const createNewTask = (task) => {

    const taskObject = {
      id: tasksItems.length + 1,
      name: task,
      done: false
    }

    if (!tasksItems.find(item => item.name === task)) {
      setTasksItems([
        ...tasksItems,
        taskObject
      ])
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(item => (item.name === task.name) ? {...item, done: !item.done} : item)
    )
  }

  const deleteTasks = () => {
    const newTasks = tasksItems.filter(item => !item.done)
    setTasksItems(newTasks)
    setShowCompleted(false)
  }

  return (
    <div className="container">
      <h1>TaskList App</h1>
      <TaskCreate
        setError={setError}
        createNewTask={createNewTask}
      />

      <TaskList
        doneValue={false}
        tasksItems={tasksItems}
        toggleTask={toggleTask}
      />

      <VisibilityControl
        showCompleted={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        deleteTasks = {deleteTasks}
      />

      {
        showCompleted && (
          <TaskList
            doneValue={true}
            tasksItems={tasksItems}
            toggleTask={toggleTask}
          />
        )
      }
    </div>
  )
}

export default App
