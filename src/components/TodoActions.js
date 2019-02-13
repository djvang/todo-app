import React from 'react'

export function TodoActions({filter}) {
    return <footer className="footer">
        <span className="todo-count"><strong>2</strong> items left
        </span>
        <ul className="filters">
        <li><a href="#/all" className={`${filter === 'all' ? 'selected': ''}`}>All</a></li>
        <li><a href="#/active" className={`${filter === 'active' ? 'selected': ''}`}>Active</a></li>
        <li><a href="#/completed" className={`${filter === 'completed' ? 'selected': ''}`}>Completed</a></li>
        </ul> <button className="clear-completed">
        Clear completed
        </button>
    </footer>
}