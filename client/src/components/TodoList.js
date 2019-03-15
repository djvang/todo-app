import React from 'react'
import { filters } from '../actions';

import { TodoItem } from './TodoItem'

export function TodoList({ store }) {

    const state = store.getState();

    let filteredTodos = state.todos.filter(todo => {
                
        if(state.filter.type === filters.SHOW_ALL) return true
        if(state.filter.type === filters.SHOW_ACTIVE && !todo.completed) return true
        if(state.filter.type === filters.SHOW_COMPLETED && todo.completed) return true
        
        return false
    })
    
    return <section className="main">
    <input type="checkbox" className="toggle-all" />
    <ul className="todo-list">
        {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} store={store} /> )}
    </ul>
</section>
    
}