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
    
    this.onRenderCellDatepicker = this.onRenderCellDatepicker.bind(this);
    this.onSelectDatepicker = this.onSelectDatepicker.bind(this);
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

  onRenderCellDatepicker(date, cellType) {

    let currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    let cell = {
      html: null
    };

    this.state.todos.forEach(todo => {
      cell = {
        html: currentDate === todo.date ? date.getDate() + '<span class="dp-note"></span>' : cell.html
      }
    })

    return cell

  }

  onSelectDatepicker(fd, date) {
    console.log(fd, date);
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
            <Datepicker 
            onRenderCell={this.onRenderCellDatepicker} 
            onSelect={this.onSelectDatepicker} 
            type="inline" />
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