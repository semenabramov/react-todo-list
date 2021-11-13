import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props){
    console.log(props.todos)
    return(
        <ul style={style.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TodoList