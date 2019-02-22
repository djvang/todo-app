import React from 'react'

export const defaultState = {
  todos: [
    { id: 1, title: 'Todo from default context', completed: false }],
  filter: 'all',
  deleted: [],
  handleFilter: () => {},
  addTodo: () => {}
};

export const TodoContext = React.createContext(defaultState);