import React from "react";

const TodoItem = (props) => {
      
    return (
        <div id={props.todoID} className={props.isCompleted ? 'todo-item checked' : 'todo-item'}>
            <span className="check-toggle" onClick={()=>{props.onCheckTodoItem(props.todoID)}}></span>
            <span className="todo-content" onClick={()=>{props.onCheckTodoItem(props.todoID)}}>{props.todoContent}</span>
            <i onClick={()=>{props.removeTodo(props.todoID)}}></i>
        </div>
    )
}

export default TodoItem