import React, {useState} from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([])
  const [completedList, setCompletedList] = useState([])
  const [noCompletedList, setNoCompletedList] = useState([])
  const [todoItemID, setTodoItemID] = useState(0)

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
        setNoCompletedList([...noCompletedList, newTodo])
    }

    const removeTodo = (todoListID) => {
        console.log(`Remove todo`);
        const newTDL = todoList.filter( (todo) => todo.id !== todoListID)
        updateCompleted(newTDL)
        
    }

    const toggleCompleted = (todoListID) => {
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].id === todoListID) {
                todoList[i].isCompleted = !todoList[i].isCompleted
            }
        }
        const newTDL = [...todoList]
        updateCompleted(newTDL)
    }

    const updateCompleted = (list) => {
        console.log(`updateCompleted`);
        const completed = list.filter( (todo) => todo.isCompleted === true )
        const noCompleted = list.filter( (todo) => todo.isCompleted === false )
        setCompletedList([...completed]);
        setNoCompletedList([...noCompleted])
        setTodoList([...noCompleted, ...completed])
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
            {/* <div className="completed-wrapper">
                <h1 className="completed-title">COMPLETED</h1>
                    {completedList.map(completedItem => <TodoItem todoContent={completedItem.content} todoID={completedItem.id} isCompleted={completedItem.isCompleted} removeTodo={removeTodo} onCheckTodoItem={toggleCompleted}/>)}
            </div> */}
        </div>
    )
}

export default TodoList