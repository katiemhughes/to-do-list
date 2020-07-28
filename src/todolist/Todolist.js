import React from "react";
import Todoitem from "../todoitem/Todoitem";

class Todolist extends React.Component {

    render() {

        //loop through the todos and display them.
        const { todos, updateTodoFn } = this.props;

        return(
        <div className="toDoListContainer">
            {
                //map every single one of the todos to a div that's gonna be displayed.
                todos.map((todo, index) => {
                    return(
                        //whenever we loop through and generate some sort of item inside of a render function, we need to have a key prop that we pass to it.
                        <Todoitem updateTodoFn={this.updateTodo} key={index}todo={todo}></Todoitem>
                    )
                })
            }
        </div>
        );
    }
    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

}

export default Todolist;