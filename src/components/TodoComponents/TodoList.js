// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './TodoList.scss';

export default function TodoList(props) {


    return (
        <div className='container'>
            <div className='todo-list'>
                {props.tasks.map(item=> {
                return <Todo key={item.id} task={item} toggleTask={props.toggleTask} />
                })}
            </div>
            <button className="clear-btn" onClick={props.clearCompleted} >Clear Completed</button>
        </div>
    );
};

