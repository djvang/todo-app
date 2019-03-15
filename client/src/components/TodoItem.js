import React from 'react'
import { toggleTodo } from '../actions'

export function TodoItem({ todo, store }) {
    return <li className={`todo ${todo.completed ? 'completed' : ''}`}>
        <div className="view">
            <input type="checkbox" 
                defaultChecked={`${todo.completed ? true : ''}`} 
                onChange={() => store.dispatch(toggleTodo(todo.id))} 
                className="toggle" />

            <label>{todo.title}</label> 
            <button className="destroy"></button>

        </div>
        <input type="text" className="edit" />
    </li>
}