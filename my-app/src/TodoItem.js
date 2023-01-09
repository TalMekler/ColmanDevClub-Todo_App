import React, {useState} from "react";

const TodoItem = (props) => {
    const [isActive, setIsActive] = useState(false);

    function onCheckTodoItem(todoListID) {
        

        for(let i = 0; i < props.TDL.length; i++) {
            if(props.TDL[i].id == todoListID){
                props.TDL[i].isCompleted = !props.TDL[i].isCompleted;
            }
        }

        // console.log(props.TDL);

        setIsActive(!isActive);
    }
    
    return (
        <div className="todoList-wrapper">
            {props.TDL.map(TD => (
                <div id={TD.id} className={TD.isCompleted ? 'todo-item checked' : 'todo-item'}>
                    <span>{TD.content}</span><i onClick={()=>{onCheckTodoItem(TD.id)}}></i>
                </div>
            ))}
        </div>
    )
}

export default TodoItem