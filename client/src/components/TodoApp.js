import React from 'react';

import './TodoApp.css';

import { TodoActions } from './TodoActions'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import {store} from '../store'
import { getTodos } from '../actions'

export default class TodoApp extends React.Component {

  componentDidMount() {

    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(todos => {
      store.dispatch(getTodos(todos))
    })
    .catch(error => console.log(error))

    this.unsubscribe = store.subscribe(() => this.forceUpdate());

  }

  componentWillUnmount() {
    if(this.unsubscribe) this.unsubscribe()
  }
  
  render() {

    return <React.Fragment>
        <h1>todos</h1> 
          <div className="todowrapper">
            <section className="todoapp">
              <TodoAdd store={store} />
              <TodoList store={store} />
              <TodoActions store={store} />
            </section>
          </div>
    </React.Fragment>
  }
}

// import Datepicker from './Datepicker'
// this.onRenderCellDatepicker = this.onRenderCellDatepicker.bind(this);
// this.onSelectDatepicker = this.onSelectDatepicker.bind(this);

// onRenderCellDatepicker(date, cellType) {

  //   let currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  //   let cell = {
  //     html: null
  //   };

  //   this.state.todos.forEach(todo => {
  //     cell = {
  //       html: currentDate === todo.date ? date.getDate() + '<span class="dp-note"></span>' : cell.html
  //     }
  //   })

  //   return cell

  // }

  // onSelectDatepicker(fd, date) {
  //   console.log(fd, date);
  // }

/*
<Datepicker 
  onRenderCell={this.onRenderCellDatepicker} 
  onSelect={this.onSelectDatepicker} 
  type="inline" />
*/