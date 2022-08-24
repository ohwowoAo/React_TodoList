import React, { useEffect, useState } from 'react';
import {MdAddCircle, TiPencil} from 'react-icons/md';
import {FaTrashAlt, FaPencilAlt} from 'react-icons/fa';
import './TodoInsert.css';

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue('');
        onInsertToggle();
    }

    useEffect(()=>{
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    },[selectedTodo]);
    return (
        <div>
            <div className='background' onClick={onInsertToggle}></div>
            <form className='popupForm' onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)}: onSubmit}>
                <input placeholder='Please enter to-do list ╰(*°▽°*)╯' value={value} onChange={onChange}></input>
                {selectedTodo ? (
                    <div className='rewite'>
                        <FaPencilAlt onClick={() => onUpdate(selectedTodo.id, value)}/>
                        <FaTrashAlt onClick={()=>onRemove(selectedTodo.id)}/>
                    </div>
                ) : (
                    <button type='submit'>
                      <MdAddCircle />
                    </button>
                )}
                
            </form>
        </div>
    );
};

export default TodoInsert;