import React from 'react';
import { TodoContext } from './todo-context';

import './TodoApp.css';

import { TodoActions } from './TodoActions'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import Datepicker from './Datepicker'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = (value) => {
      this.setState({
        filter: value
      })
    }

    this.addTodo = (e) => {
      let target = e.target;
      let value = target.value;

      if(e.keyCode === 13) {

        let todo = {
          id: new Date().getTime(),
          title: value,
          completed: false
        }
  
        this.setState({
          todos: [...this.state.todos, todo]
        }, () => {
          target.value = ''
        })
      }
    }
    
    this.state = {
      todos: [],
      filter: 'all', // active, completed,
      deleted: [],
      handleFilter: this.handleFilter,
      addTodo: this.addTodo
    }    
  }

  componentDidMount() {

    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(todos => {
      this.setState({
        todos
      })
    })
  }

  render() {

    return  <React.Fragment>
      
        <h1>todos</h1> 
        <TodoContext.Provider value={this.state}>
          <div className="todowrapper">
            <section className="todoapp">
              <TodoAdd />
              <TodoList />
              <TodoActions />
            </section>
            <Datepicker type="inline" />
          </div>
        </TodoContext.Provider>
      {/* <section className="todoapp">
        <TodoAdd />
        <TodoList />
        <TodoActions />
      </section> */}
    </React.Fragment>;
  }
}