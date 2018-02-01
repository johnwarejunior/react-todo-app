import React from 'react'
import TodosList from './todos-list'

const todos = [
  {
    task: 'Make React tutorial',
    isCompleted: false
  },
  {
    task: 'Eat Breakfast',
    isCompleted: true
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <TodosList />
      </div>
    );
  }
}