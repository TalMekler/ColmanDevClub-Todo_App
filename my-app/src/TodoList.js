import React, {useState} from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = (props) => {
    const [newTodo, setNewTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [todoItemID, setTodoItemID] = useState(0)

    return (
        <div id="TDL">
            <h1 className="todolist-title">TODO</h1>
            <Input setInput={setNewTodo} setTDL={setTodoList} TDL={todoList} todoItemID={todoItemID} setID={setTodoItemID}/>
            <div className="todolist-box">
            <TodoItem TDL={todoList} setTDL={setTodoList}/>
            </div>
        </div>
    )
}

export default TodoList