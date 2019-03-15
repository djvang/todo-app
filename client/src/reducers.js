import { ADD_TODO, GET_TODOS, TOGGLE_TODO, SET_FILTER } from './actions';
import { combineReducers } from 'redux'

let newID = 4;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: newID++,
          title: action.title,
          completed: false
        }
      ]
    case GET_TODOS:
      return [
        ...state,
        ...action.todos
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function filter(state = { type: 'SHOW_ALL' }, action) {
  switch (action.type) {
    case SET_FILTER:
      return { type: action.filter }
    default:
      return state
  }
}

const reducer = combineReducers({
  filter,
  todos
})

export default reducer