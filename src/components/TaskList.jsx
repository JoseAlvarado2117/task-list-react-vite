import React from "react"
import TaskTableRow from "./TaskTableRow"

import "./TaskList.css";


const TaskList = ({ tasksItems, toggleTask, doneValue }) => {

  const taskTableRow = (doneValue) => {
    return (
      tasksItems
      .filter(item => item.done === doneValue)
      .map(task => (
        <TaskTableRow
          key={task.id}
          task={task}
          toggleTask={toggleTask}
        />
      ))
    )
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="th-title">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRow(doneValue)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
