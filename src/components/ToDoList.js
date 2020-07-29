import React from 'react'

class ToDoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default ToDoList