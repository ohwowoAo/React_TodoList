import { template } from 'lodash';
import React, { useCallback, useState } from 'react';
import style from './TodoList.module.css'

const TodoList = () => {
    const [value, setValue] = useState('');
    const [id, setId] = useState(0);
    const [finish, setFinish] = useState(false);
    const [todo, setTodo] = useState([]);
    
    function submit(e){
        e.preventDefault();
        if(value === ''){
            alert('Please enter to-do list ╰(*°▽°*)╯');
        }else{
            const todolist = todo.concat({
                id : id,
                text: value
            })
            setId((current) => current + 1);
            
            setValue('');
            setTodo(todolist)
        }
        
    }
    const onRemove = (id) => {
        const about_lists = todo.filter((list) => list.id !== id);
        setTodo(about_lists);
        console.log(id)
    };
    const onToggle = (id) => {
        const finish_lists = todo.filter((list) => list.id === id);
        setFinish(finish_lists);
        setFinish(!finish)
    }
    function toggleDone() {
        setFinish(!finish); 
    }
    // function onName(){
    //     style.line
    // }
    // https://yeomss.tistory.com/205
    // https://eunhee-programming.tistory.com/194
    const inputlist = todo.map( (list) => (
        <li key={list.id} >
            <span className={ finish ? style.line : ""}  onClick={ () =>onToggle(list.id)}>{list.text}</span>
            <button onClick={() => onRemove(list.id)}>X</button>
        </li>
    ))
    
    
    return (
        <div>
            <form onSubmit={submit}>
                <h2>TO-DO</h2>
                <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
                <button type='submit'>+</button>
            </form>
            <ul className={style.todolist}>{inputlist}</ul>
        </div>
    );
};

export default TodoList;