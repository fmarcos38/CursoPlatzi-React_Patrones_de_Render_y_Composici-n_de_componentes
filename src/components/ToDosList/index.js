import React from 'react';
import './todoList.css'

function TodoList(props) {
    return (
        <section >
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedTodos.length) && props.onEmpty()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(props.render)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}


export { TodoList };



//function TodoList(props) {
//    return (
//        <section className="containerTodoList">
//            {props.error && props.onError()} {/* en la propiedad props.error VIENE el dato q me dice si bebo no renderizar el componente q cont la funcion onError */}
//            {props.loading && props.onLoading()}
//            {(!props.loading && props.searchTodos.length === 0) && props.EmpyTodos()}
//
//            {props.searchedTodos.map(props.render)}
//            {/* {props.searchedTodos.map(todo => props.render(todo))} */} {/* opcion mas larg -> lo q hace es por c/elemt q viene en search SE lo pasa a la funcion props.render*/}
//
//            <ul className="TodoList">
//                {props.children} {/* children es un prop especial de react */}
//            </ul>
//        </section>
//    )
//};
