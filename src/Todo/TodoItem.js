import React, {useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context";

const style={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        background: 'red',
        borderRadius: '50%',
        color: '#fff',
        border: 'none'
    }

}

function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context)
    
    const classes = []

    if(todo.compoleted){
        classes.push('done')
    }

    return(
        <li style={style.li}>
            <span className={classes.join(' ')}>
                <input style={style.input} type="checkbox" checked={todo.compoleted} onChange={()=>onChange(todo.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button style={style.button} onClick={()=>removeTodo(todo.id)}>&times;</button>
        </li>
        
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default  TodoItem