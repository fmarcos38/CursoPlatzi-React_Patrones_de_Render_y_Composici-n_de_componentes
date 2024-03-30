import React from 'react';
import './todoCounter.css';
//import { TodoContext } from '../../ContextToDos';

function TodoCounter({ totalTodos, completedTodos, loading}) {

    return (
        <h2 
            className={`TodoCounter ${!!loading && "TodoCountLoading"}`}
        >
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h2>
    )
};

export { TodoCounter };