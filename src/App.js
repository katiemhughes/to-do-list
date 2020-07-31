import React, { Component } from 'react'
import './App.css'
import ToDoList from "./components/ToDoList"
import ToDoItems from "./components/ToDoItems"

//Read up more on arrays, objects (and how to manipulate them). Also learn how to write functions and add items into an object and add items into an array. For the task list, I need an array of objects. Learn how to put them in and out of arrays.

//Recreate this app.

class App extends Component {      
  constructor(props) {            
    super(props);
    this.state = {
      items: [],
    };
  }

  //we don't need to define inputText in the constructor here because we aren't using it in the app component.

  addItem=(task)=>{
    //using object destructuring here to avoid writing this.state.items various times below.
    const { items } = this.state;
    const newArr = [...items, task];
    //this has to be the same as the parameter passed through.
    this.setState({items: newArr});
  }

  //deleteItem(id)

  render() {

    const { items } = this.state;
    //this is so that I don't need to write this.state.items below (object destructuring)
  
    return (
      <div className="App">
        <h1>
          To Do List
        </h1>
        <ToDoList addItem={this.addItem}/> 
        <ToDoItems items={items}/>
      </div>
    )
    //in the tags I am passing the props down to the child components (ToDoItems)
  }
}

export default App


