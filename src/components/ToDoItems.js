import React from 'react';

const ToDoItems = (props) => {  

        return(
            <ul>
                {props.items.map((item) => 
                {
                    return <li>{item}</li>
                })};
            </ul>
        );
    
}

//items are the props that I am referring to here. 
//singular item is what the map method is using as a parameter to refer to a single item in an array. We always need to use the singular version of whatever our array contains here.


export default ToDoItems