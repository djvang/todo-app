import React from 'react'

import { filters, setFilter } from '../actions';

export function TodoActions({ store }) {
    const state = store.getState();

    const handleFilter = (value) => {
        store.dispatch(setFilter(value))
    }

    return <footer className="footer">
        <span className="todo-count"><strong>2</strong> items left</span>
        <ul className="filters">
            <li><a href="#/all" onClick={() => handleFilter(filters.SHOW_ALL)} className={`${state.filter.type === filters.SHOW_ALL ? 'selected': ''}`}>All</a></li>
            <li><a href="#/active" onClick={() => handleFilter(filters.SHOW_ACTIVE)} className={`${state.filter.type === filters.SHOW_ACTIVE ? 'selected': ''}`}>Active</a></li>
            <li><a href="#/completed" onClick={() => handleFilter(filters.SHOW_COMPLETED)} className={`${state.filter.type === filters.SHOW_COMPLETED ? 'selected': ''}`}>Completed</a></li>
        </ul> 
        <button className="clear-completed">
            Clear completed
        </button>
    </footer>
}