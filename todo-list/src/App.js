import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css'
import Template from './components/Template';
import {BsFillPatchPlusFill} from 'react-icons/bs'
import TodoInsert from './components/TodoInsert';

let nextid = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked : true
    },
    {
      id: 2,
      text: "할일 2",
      checked : false
    },
    {
      id: 3,
      text: "할일 3",
      checked : true
    },
  ])
  
  const onInsertToggle = () => {
    if(selectedTodo){
      setSelectedTodo(null)
    }
    setInsertToggle(prev => !prev)
  }

  const onInsertTodo = (text) => {
    if(text === ""){
      return alert('할일을 입력해주세요.')
    }else{
      const todo = {
        id : nextid,
        text,
        checked:false
      }
      setTodos(todos => todos.concat(todo));
      nextid += 1;
    }
  }

  //체크토글
  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo )))
  }

  //수정
  const onChangeSelectedTodo = (todo)=> {
    setSelectedTodo(todo)
  }

  //삭제
  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  //수정후 다시저장
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }
  return (
    <div className='wrap'>
      <Template todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>
        <div className='add-todo-button' onClick={onInsertToggle}><BsFillPatchPlusFill /></div>
        {insertToggle && (
          <TodoInsert 
            selectedTodo={selectedTodo} 
            onInsertToggle={onInsertToggle} 
            onInsertTodo={onInsertTodo}
            onRemove={onRemove} 
            onUpdate={onUpdate}
          />
        )} 
        {/* setInsertToggle 이 true일 경우에만 나옴 */}
      </Template>
    </div>
  );
};

export default App;