import React from "react";

const TodoItem = (props) => {
      
    return (
        <div id={props.todoID} className={props.isCompleted ? 'todo-item checked' : 'todo-item'} >
            <div className="clickable-toggle-completed" onClick={()=>{props.onCheckTodoItem(props.todoID)}}>
                <span className="check-toggle"></span>
                <span className="todo-content">{props.todoContent}</span>
            </div>
            {/* <i className="edit-item"></i> */}
            <i onClick={()=>{props.removeTodo(props.todoID)}}></i>
        </div>
    )
}

export default TodoItem