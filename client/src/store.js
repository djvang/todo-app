import { createStore } from 'redux'
import reducer from './reducers'
import state from './state'

export const store = createStore(reducer, state)