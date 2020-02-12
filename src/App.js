import React from 'react';

const todoTasks = [
  {
    name: 'Complete HW',
    id: 1,
    completed: false
  },
  {
    name: 'Practice Piano',
    id: 2,
    completed: false
  },
  {
    name: 'Practice Bass',
    id: 3,
    completed: false
  },
  {
    name: 'Fix my bed',
    id: 4,
    completed: false
  },
  {
    name: 'Do Laundry',
    id: 5,
    completed: false
  },
  {
    name: 'Buy a Suit',
    id: 6,
    completed: false
  }
];

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


  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
