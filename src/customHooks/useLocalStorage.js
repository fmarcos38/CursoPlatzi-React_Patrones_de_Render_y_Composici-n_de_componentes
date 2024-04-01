import React from 'react';

//-----------creacion de un Hooks personalizado para el manejo del localStorage--------------------------------------------
//el hook recibe el nombre del item y su valor inicial(q es un array vacio o cualquier estado inicial q se le pase al hook)
function useLocalStorage(itemName, initialValue) {
    //creo estado local para el item del localStorage y lo inicializo con el valor q obtuve
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    //estado para saber si estamos sincronizados entre varias pestañas habiertas
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                //busco SI ya existe el item a caargar
                const localStorageItem = localStorage.getItem(itemName);

                //variable para guardar el estado inical, osea lo q tenga el localStorage
                let parsedItem;

                if (!localStorageItem) {
                    //lo cargo
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                //actalizo estadfo loading
                setLoading(false);
                setSincronizedItem(true)
            } catch (error) {
                setLoading(false);
                //si tengo error actualizo estado
                setError(true);
            }
        }, 2000);
        //al colocar SincronizedItem, hago q c/vez q se realice un cambio en ese estado se renderice el componente
    }, [sincronizedItem]); //con el array vacio HAGO q el useEffect se ejecute SOLO una vez, sin 2do param( se ejecuta cada 3segundos), SI le coloco algo en el array(como alguno de los estados q manejo en este componente) ENTONCES el componente se renderizará cada vez q ese estado cambie

    //creo funcion para guardar en el localStorage el item, es la q exporto en el return
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    //funcion para actualizar siertos estados
    const sincronized = () => {
        setLoading(true);
        setSincronizedItem(false); //al ser false se dispara el useEffect
    };

    return {
        item,
        saveItem,
        loading,
        error,
        sincronized
    };
}

export { useLocalStorage };

/* localStorage.removeItem('TODOS_V1');

const defaultTodos = [
{ text: 'Cortar cebolla', completed: true },
{ text: 'Tomar el Curso de Intro a React.js', completed: false },
{ text: 'Llorar con la Llorona', completed: false },
{ text: 'LALALALALA', completed: false },
{ text: 'Usar estados derivados', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */