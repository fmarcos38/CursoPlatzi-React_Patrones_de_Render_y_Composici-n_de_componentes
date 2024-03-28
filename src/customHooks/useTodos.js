import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//transforme lo q era el provider PARA el context a un -->
//customHook -> los coustomHooks pueden llamar a los hooks de react oficioles
function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    //estado para el search
    const [searchValue, setSearchValue] = React.useState('');
    //estado para el Modal
    const [openModal, setOpenModal] = React.useState(false);
    
    //filtro ToDos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    // Función para añadir un nuevo todo
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        saveTodos(newTodos);
    };

    // Función para marcar un todo como completado
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    // Función paraeliminar un todo 
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    
    return {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        
    }
};


export { useTodos };