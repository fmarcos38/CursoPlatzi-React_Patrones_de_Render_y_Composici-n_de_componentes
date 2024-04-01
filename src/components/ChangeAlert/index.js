import React from 'react'
import withStorageListener from './withStorageListener';
import './changeAlert.css';

//componente para avisar si hubo cambios en otra pestaña
function ChangeAlert({storageChange, setStorageChange}) {
    if (storageChange) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={setStorageChange}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

//invoco la HOC withStorageListener - y esta variable (la q contiene LA HOC) q exportaré
const ChangeAlertWithStorageListerner = withStorageListener(ChangeAlert);


export default ChangeAlertWithStorageListerner