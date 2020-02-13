// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {


    return (
        <div className='todo-list'>
            {props.tasks.map(item=> {
            return <Todo key={item.id} task={item} />
            })}
            <button className="clear-btn" >Clear Completed</button>
        </div>
    );
};

