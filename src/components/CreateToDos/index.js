import React from 'react';
import './createTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {


    return (
        <button 
            className="CreateTodoButton" 
            onClick={() => setOpenModal(!openModal)} //aqui adentro le paso la funcion q quiero q se ejecute
        >
            +
        </button>
    );
};

export { CreateTodoButton };