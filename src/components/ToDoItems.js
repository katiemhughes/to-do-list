import React, { Component } from 'react';

class ToDoItems extends Component {

    createTasks(item) {
        return <li key={item.key}>
            {item.text}
        </li>
    }
    render() {
        let enteredItems = this.props.items;

        return(
            <ul className="theList">
                {enteredItems.map((item, index) => <li key={index}>{item.text}</li>)}
            </ul>
        );
    }
}




export default ToDoItems