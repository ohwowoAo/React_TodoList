import React, { useState } from 'react';
import './TodoList.module.css'

const TodoList = () => {
    const [value, setValue] = useState('');
    const [id, setId] = useState(0);
    const [todo, setTodo] = useState([]);

    function submit(e){
        e.preventDefault();
        const todolist = todo.concat({
            id : id,
            text: value
        })
        setId((current) => current + 1);
        
        setTodo(todolist)
        console.log(todo)
    }

    const inputlist = todo.map( (list) => (
        <li 
        key={list.id}>
            {list.text}
        </li>
    ))

    
    return (
        <div>
            <form onSubmit={submit}>
                <h2>TO-DO</h2>
                <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
                <button type='submit'>+</button>
            </form>
            <ul className='todolist'>{inputlist}</ul>
        </div>
    );
};

export default TodoList;