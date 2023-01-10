import React, {useState} from "react";

const TodoItem = (props) => {
    const [isActive, setIsActive] = useState(false);

    function onCheckTodoItem(todoListID) {
        for(let i = 0; i < props.TDL.length; i++) {
            if(props.TDL[i].id === todoListID){
                props.TDL[i].isCompleted = !props.TDL[i].isCompleted;
            }
        }
        setIsActive(!isActive);
    }

    function onRemoveTodoItem(todoListID) {
        let i;
        for(i = 0; i < props.TDL.length; i++) {
            if(props.TDL[i].id === todoListID){
                break;
            }
        }
        props.setTDL([...props.TDL.slice(0, i), ...props.TDL.slice(i+1)])
    }
    
    return (
        <div className="todoList-wrapper">
            {props.TDL.map(TD => (
                <div id={TD.id} className={TD.isCompleted ? 'todo-item checked' : 'todo-item'}>
                    <span className="check-toggle" onClick={()=>{onCheckTodoItem(TD.id)}}></span>
                    <span className="todo-content" onClick={()=>{onCheckTodoItem(TD.id)}}>{TD.content}</span>
                    <i onClick={()=>{onRemoveTodoItem(TD.id)}}></i>
                </div>
            ))}
        </div>
    )
}

export default TodoItem