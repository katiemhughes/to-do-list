import React, { Component } from 'react'
import './App.css'
import ToDoList from "./components/ToDoList"
import ToDoItems from "./components/ToDoItems"

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>
          To Do List
        </h1>
        <ToDoList />
        <ToDoItems />
      </div>
    )
  }
}

export default App


