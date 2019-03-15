import React from 'react'
import { addTodo } from '../actions'

export function TodoAdd({ store }) {
    const handleAddTodo = (e) => {
        let target = e.target;
        let value = target.value;
    
        if(e.keyCode === 13) {
    
            store.dispatch(addTodo(value));
            target.value = '';
        }
    }
    return <header className="header">
    <input autoFocus="autofocus" onKeyDown={handleAddTodo} autoComplete="off" placeholder="What needs to be done?" className="new-todo" />
    <button type="button" className="datepicker-toogle">
        <svg id="icon-calendar" viewBox="0 0 26 28">
            <title>calendar</title>
            <path d="M2 26h4.5v-4.5h-4.5v4.5zM7.5 26h5v-4.5h-5v4.5zM2 20.5h4.5v-5h-4.5v5zM7.5 20.5h5v-5h-5v5zM2 14.5h4.5v-4.5h-4.5v4.5zM13.5 26h5v-4.5h-5v4.5zM7.5 14.5h5v-4.5h-5v4.5zM19.5 26h4.5v-4.5h-4.5v4.5zM13.5 20.5h5v-5h-5v5zM8 7v-4.5c0-0.266-0.234-0.5-0.5-0.5h-1c-0.266 0-0.5 0.234-0.5 0.5v4.5c0 0.266 0.234 0.5 0.5 0.5h1c0.266 0 0.5-0.234 0.5-0.5zM19.5 20.5h4.5v-5h-4.5v5zM13.5 14.5h5v-4.5h-5v4.5zM19.5 14.5h4.5v-4.5h-4.5v4.5zM20 7v-4.5c0-0.266-0.234-0.5-0.5-0.5h-1c-0.266 0-0.5 0.234-0.5 0.5v4.5c0 0.266 0.234 0.5 0.5 0.5h1c0.266 0 0.5-0.234 0.5-0.5zM26 6v20c0 1.094-0.906 2-2 2h-22c-1.094 0-2-0.906-2-2v-20c0-1.094 0.906-2 2-2h2v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h6v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h2c1.094 0 2 0.906 2 2z"></path>
        </svg>
    </button>
</header>
}