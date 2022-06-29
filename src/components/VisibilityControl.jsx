import React from "react"



const VisibilityControl = ({ showCompleted, setShowCompleted, deleteTasks }) => {

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      deleteTasks()
    }
  }

  return (
    <div className="td-flex bg-color">
      <div className="task-done">
        <div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => setShowCompleted(e.target.checked)}
              checked={showCompleted}
            />
            <span className="slider"></span>
          </label>
        </div>
        <p>Show Tasks Done</p>
      </div>

      <button
        onClick={handleDelete}
      >Clear</button>
    </div>
  )
}

export default VisibilityControl
