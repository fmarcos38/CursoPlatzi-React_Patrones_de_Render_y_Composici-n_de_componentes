//creo una Higt Order Component, q retirna un componente de react q llamamos WrappedComponentWithStorageListener
//q por dentro tiene un estado q gurda SI hubo o NO un cambio en la aplicacion
import React from "react";
import { useState } from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props){
        //estado para saber si hubo combios en otra pestaña del navegador
        const [storageChange, setStorageChange] = useState(false);

        //escucho el evento del storage -> cambios(eosea si hay cambios)
        window.addEventListener('storage', (change) => { //en change(q es un objeto) viene la info para saber si hubo un cambio
            if(change.key === 'TODOS_V1'){ //si hubo cambios en TODOS_V1
                console.log("hubo cambios");
                setStorageChange(true);
            }
        });

        //funcion para actualizar si hubo cambios(?? creo)
        const actualizoEstados = () => {
            props.sincronizedTodos();
            setStorageChange(false);
        };
        return (
            <WrappedComponent 
                storageChange={storageChange} 
                setStorageChange={actualizoEstados}
            />
        )
    }
}

export default withStorageListener;