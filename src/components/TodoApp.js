import React from 'react';
import './TodoApp.css';

import { TodoActions } from './TodoActions'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: true },
        { id: 3, title: 'Todo 3', completed: false }
      ],
      filter: 'all', // active, completed,
      deleted: []
    }    
  }
  
  
  render() {
    return (<section className="todoapp">
      <TodoAdd />
      <TodoList filter={this.state.filter} todos={this.state.todos} />
      <TodoActions filter={this.state.filter} />
    </section>);
  }
}