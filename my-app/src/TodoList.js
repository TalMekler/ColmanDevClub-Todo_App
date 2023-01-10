import React, {useState} from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([])
  const [todoItemID, setTodoItemID] = useState(0)

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    const removeTodo = (todoListID) => {
        const newTDL = todoList.filter( (todo) => todo.id !== todoListID)
        setTodoList([...newTDL])
    }

    const toggleCompleted = (todoListID) => {
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].id === todoListID) {
                todoList[i].isCompleted = !todoList[i].isCompleted
            }
        }
        setTodoList([...todoList])
    }


    return (
        <div id="TDL">
            <h1 className="todolist-title">TODO</h1>
            <Input setTDL={addTodo} TDL={todoList} todoItemID={todoItemID} setID={setTodoItemID}/>
            <div className="todolist-box">
                {todoList.map((todo) => 
                    <TodoItem todoContent={todo.content} todoID={todo.id} isCompleted={todo.isCompleted} removeTodo={removeTodo} onCheckTodoItem={toggleCompleted}/>
                )}
            </div>
        </div>
    )
}

export default TodoList