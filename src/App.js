import React, { component } from 'react'
import './App.css'
import '/.components/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    )
  }
}

export default App


