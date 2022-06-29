import React, {useState} from "react"



const TaskCreate = ({ createNewTask }) => {

  const [ newTaskName, setNewTaskName ] = useState('')

  const handleChange = e => {
    setNewTaskName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (newTaskName.length === '') {
      setError('The name of the task is incorrect!')
      return;
    }
    createNewTask(newTaskName) 
    setNewTaskName('')
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="nombre"
        placeholder="Enter a new task"
        onChange={handleChange}
        value={newTaskName}
      />
      <button className="btn-save">Save Task</button>
    </form>
  )
}

export default TaskCreate
