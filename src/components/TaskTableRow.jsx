import React from "react"



const TaskTableRow = ({ task, toggleTask }) => {

  return (
    <tr>
      <td className="td-flex">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}

export default TaskTableRow
