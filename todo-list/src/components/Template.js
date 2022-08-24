import React from 'react';
import './Template.css';
import {BsListCheck} from 'react-icons/bs';

const Template = ({children, todoLength}) => {
    return (
        <div className='Template'>
            <div className='TemplateTit'><BsListCheck />TO-DO <span>({todoLength})</span></div>
            <div>{children}</div>
        </div>
    );
};

export default Template;