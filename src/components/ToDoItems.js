import React, { Component } from 'react';

class ToDoItems extends Component {

    createTasks(item) {
        return <li key={item.key}>
            {item.text}
        </li>
    }
    render() {
        const { props } = this.state;

        return(
            <ul>
                {props.map((item, index) => <li key={index}>{item.text}</li>)}
            </ul>
        );
    }
}




export default ToDoItems