import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import TodoList from './TodoList';
import BG from './BG';

function App() {

  
  
  return (
    <div className="App">
      <BG />
      <TodoList />

    </div>
  );
}

export default App;