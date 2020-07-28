import React from "react";
import Todolist from "./todolist/Todolist";
import Addtodo from "./addtodo/Addtodo";
import "./App.css";

//This component is where we are gonna host the list items and the list itself.

class App extends React.Component {

  constructor() {
    super();
    //whenever state gets updated, it's gonna render everything inside of the render() function. Eg when we add a todo.
    this.state = {
      todos: []
    };
  }
  render() {
    return(
      <div>
          <Addtodo addTodoFn={this.addTodo}></Addtodo>
          <Todolist updateTodoFn={this.updateTodo} todos={this.state.todos}></Todolist>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if(todos) {
      const savedTodos = JSON.parse(todos);
      //setState() is an asynchronous function.
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  }

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
    console.log(localStorage.getItem("todos"));
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo === todo)
      return {
        text: todo.text,
        completed: !todo.completed
        }
      else
        return todo
    });
      await this.setState({ todos: newTodos });
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

}

export default App;
