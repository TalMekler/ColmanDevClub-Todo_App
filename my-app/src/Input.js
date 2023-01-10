import React from 'react';

const Input = (props) => {

    function changeInputHandler(event) {
        event.preventDefault();
        const inputValue = event.target.input.value;
        event.target.input.value = ""
        if(inputValue !== ""){
            props.setTDL({id: props.todoItemID, content:inputValue, isCompleted: false})
            props.setID(props.todoItemID + 1)
        }
    }

    return (
        <div className='input-wrapper'>
            <form onSubmit={changeInputHandler}>
                <input id="input" type="text" placeholder='Enter your assignment'/>
            </form>
        </div>
    )
}

export default Input