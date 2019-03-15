export const ADD_TODO = 'ADD_TODO'
export const GET_TODOS = 'GET_TODOS'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_FILTER = 'SET_FILTER'

export const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(title) {
  return { type: ADD_TODO, title }
}

export function getTodos(todos) {
  return { type: GET_TODOS, todos }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
}