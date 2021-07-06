import React from 'react';
import './App.scss';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoTasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state= {
      todoTasks
    };
  }


  // Class methods to update state

  addTask= (evt, item)=> {
    evt.preventDefault();

    // creating structure of new task being added to list

    const newTask= {
      name: item,
      id: Date.now(),
      completed: false
    }

    // setting the update of state when new task is added

    this.setState({
      todoTasks: [...this.state.todoTasks, newTask]
    })

  }

  // changing state from not completed to completed when clicked on

  toggleTask= taskId => { 

    this.setState({
      todoTasks: this.state.todoTasks.map(task => {
        if(taskId === task.id){ //make sure what you are changing is the exact item/task
          return{
            ...task, // extends the properties of the object
            completed: !task.completed  //changes completed from false to true
          }
        }

        return task;
      })
    })

  }

  // event handler to clear what task have been completed

  clearCompleted= evt =>{
    evt.preventDefault();

    this.setState({
      // returns the tasks that haven't been completed and removes
      // the ones that have been completed

      todoTasks: this.state.todoTasks.filter(task => task.completed === false)
    })

  }


  render() {

    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo-List</h1>
          <TodoForm 
          addTask={this.addTask}
          />
        </div>
        <TodoList 
        tasks={this.state.todoTasks} 
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
