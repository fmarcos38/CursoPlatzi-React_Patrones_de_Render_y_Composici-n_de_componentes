import React from 'react';
import { useTodos } from '../customHooks/useTodos';
import { TodoCounter } from '../components/ToDosCounter';
import { TodoSearch } from '../components/ToDosSearch';
import { TodoList } from '../components/ToDosList';
import { TodoItem } from '../components/ToDosItem';
import { Loading } from '../components/Loading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { CreateTodoButton } from '../components/CreateToDos';
import { Modal } from '../components/Modal';
import TodoForm from '../components/ToDosForm';
import ToDoHeader from '../components/ToDoHeader';

function App() {

    const { 
        loading, 
        error, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal, 
        totalTodos,
        completedTodos, 
        searchValue, 
        setSearchValue,
        addTodo,
        setOpenModal,
    } = useTodos();


    return (
        <React.Fragment>
            {/* paso estados SIN tener q pasarlo por todo los comp SOLO por el los necesita */}
            <ToDoHeader>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            </ToDoHeader>

            {/* utilizacion de las renders prop PARA q dipare/renderice sierto comp segun el conte de la propiedad del comp TodoList */}
            {/* en render(puede ser cualqr nombre) solo hace referencia a es el componente q renderizará si todo está bien */}
            {/* en las props error, loading, searchTodos van el dato q hará q se renderice el comp q cont c/funcion onError, onLoading, etc */}
            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                onError={() => <TodosError />}
                onLoading={() => <Loading/>}
                onEmpty={() => <EmptyTodos/>}
                render={(todo) => 
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                }
            />

            <CreateTodoButton />

            {/* creo componente para teletransportar(React Portals) */}
            {
                openModal && (
                    <Modal>
                        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
                    </Modal>
                )
            }
        </React.Fragment>
    );
} 


export default App;



/*
<TodoList>
                {loading &&
                    (
                        <>
                            <Loading />
                            <Loading />
                            <Loading />
                        </>
                    )
                }
                {error && <TodosError />}
                {
                    (!loading && searchedTodos.length === 0) && <EmptyTodos />
                }
                {
                    searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )
                    )
                }
            </TodoList>

*/