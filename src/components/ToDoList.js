import React, { Component } from 'react'

class ToDoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //items is a property.
      items: [],
      inputText: ""
    };
  }
  //to change the state, use the setState() method (to re-render the UI).

  submitTask() {
    let temp = this.state.items
    this.setState({
      items: [...temp, this.state.inputText], inputText: ""
      //here I want to display whatever the person entered as the next task below the input box.
      //Fuses both states together
    })
  }

  //Do I need to access the previous state?


  render() {
    return (
      <div className="todoListMain">
        <div>
          <form onSubmit={this.addItem}>
            <input placeholder="Next task" />
            <button type="submit" onClick={() => this.submitTask()}> Add </button>
          </form>
          <p>{this.state.items}</p>
        </div>
      </div>
    )
  }
}

export default ToDoList