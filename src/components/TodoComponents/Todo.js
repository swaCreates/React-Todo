import React from 'react';

export default function Todo(props) {

    const toggleHandler= () => props.toggleTask(props.task.id);

    return (
        <div 
        className={`task${props.task.completed ? " completed" : ""}`}
        onClick={toggleHandler}
         >
            <p>{props.task.name}</p>
        </div>
    )
}
