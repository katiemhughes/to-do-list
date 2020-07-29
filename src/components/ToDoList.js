import React, { Component } from 'react'

class ToDoList extends Component {

  constructor(props) {
    super(props);

    this.state = {

      items: [],
      inputText: ""
    };
  }
  //to change the state, use the setState() method (to re-render the UI).

  handleSubmit = (e) => {
    e.preventDefault()
    const { items, inputText } = this.state
    const { handleInputForm } = this.props

    handleInputForm({ items, inputText })

    //?? idk about line under

    this.setState({ items: [], inputText: "" })
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    const { items, inputText } = this.state

    return (
      <div className="todoListMain">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            placeholder="Next task"
            onChange={this.handleChange}
             />
            <button type="submit"> Add </button>
          </form>
          <p>{this.state.items}</p>
        </div>
      </div>
    )
  }
}

export default ToDoList