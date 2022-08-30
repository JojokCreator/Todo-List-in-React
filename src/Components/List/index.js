import React from 'react'

const List = (props) => {
    return (
        <div>
            <div className="todo-header">
            <h1>Todos</h1>
            <p>{props.children.length} tasks are remaining</p>
            </div>
            {props.children}
        </div>

    )
}

export default List