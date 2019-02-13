import React from 'react'

export function TodoAdd({addTodo}) {
    return <header className="header">
        <h1>todos</h1> <input onKeyUp={addTodo} autoFocus="autofocus" autoComplete="off" placeholder="What needs to be done?" className="new-todo" />
    </header>
}