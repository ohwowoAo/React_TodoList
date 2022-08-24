import React from 'react';
import {IoMdCheckmarkCircleOutline, IoMdRadioButtonOff} from 'react-icons/io';
import styles from './TodoItem.css';

const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? <IoMdCheckmarkCircleOutline onClick={()=>{onCheckToggle(id)}}/> : <IoMdRadioButtonOff onClick={()=>{onCheckToggle(id)}}/>}
                <div className="text" onClick={() => {
                    onChangeSelectedTodo(todo);
                    onInsertToggle();
                }}>{text}</div>
            </div>
        </div>
    );
};

export default TodoItem;