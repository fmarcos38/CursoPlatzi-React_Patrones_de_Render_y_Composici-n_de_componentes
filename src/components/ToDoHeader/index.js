import React from 'react'

//componente para desarrollar la metodología de composición y pasaje del estado SIN useContext, 
//o pasando props por todos los componentes
function ToDoHeader({children}) {
    return (
        <header>
            {children}
        </header>
    )
}

export default ToDoHeader