import './todoItem.css'; 

function TodoItem({ text, completed, handlerComplete, deleteTodo}) { 
    return (
        <li className="TodoItem">
            {/* utilizo clases dinamicas SI viene TRUE(osea completada) &&(entonces)*/}
            <span 
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={() => handlerComplete(text)}
            > 
                ✔
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={() => deleteTodo(text)}
            >
                X
            </span>
        </li>
    ); 
}

export { TodoItem };