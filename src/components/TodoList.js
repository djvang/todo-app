import React from 'react'

import { TodoItem } from './TodoItem'

export function TodoList(props) {
    
    let filteredTodos = props.todos.filter(todo => {
        
        if(props.filter === 'all') return true
        if(props.filter === 'active' && !todo.completed) return true
        if(props.filter === 'completed' && todo.completed) return true
        
        return false
    })
    
    return <section className="main">
        <input type="checkbox" className="toggle-all" />
        <ul className="todo-list">
            {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} /> )}
        </ul>
    </section>
}