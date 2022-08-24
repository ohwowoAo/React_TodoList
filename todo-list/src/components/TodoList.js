import React from 'react';
import TodoItem from './TodoItem';
import style from './TodoList.css'

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
  
    return (
        <div className="todo-list-main">
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo ={onChangeSelectedTodo}/>)}
        </div>
    );
};

export default TodoList;