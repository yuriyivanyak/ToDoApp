import React from 'react'
import { iTodo } from '../interfaces'

type TodolistProps = {
    todos: iTodo[]
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodolistProps> = ({ todos, onRemove, onToggle }) => {
    if( todos.length === 0) { 
        return <p className="center"> No item! </p>
    }

    return (
        <ul>
            {
                todos.map(todo => {
                    const classes = ['todo'];

                    if (todo.completed) {
                        classes.push('completed')
                    }

                    const removehandler = (e: React.MouseEvent, id:number) => { 
                        e.preventDefault();

                        onRemove(id);
                    }

                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                                <span>{todo.title}</span>
                                <i className="material-icons red-text" onClick={e => removehandler(e, todo.id)}>delete</i>
                            </label>
                        </li>
                    )
                }

                )
            }

        </ul>
    )
}

