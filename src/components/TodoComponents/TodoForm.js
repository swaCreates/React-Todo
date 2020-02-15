import React from 'react';
import './TodoForm.scss';
import {Form, Input} from 'reactstrap';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state= {
            task1: ''
        }
    }

    handleChanges= evt =>{

        // update state with each keystroke

        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    submitTask= evt => {

        // when submitting add the task entered, into the TodoList

        evt.preventDefault();
        this.props.addTask(evt, this.state.task)
        this.setState({task1: ''});
    }

    render(){
        return(
            <div>
                <Form className='form' onSubmit={this.submitTask} >
                    <Input className='input' type='text' name='task' onChange={this.handleChanges} />
                    <button>Add</button>
                </Form>
            </div>
        )
    }
}

export default TodoForm;