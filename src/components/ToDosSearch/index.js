import React from 'react';
import './todoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) { //le paso el estado y la funcion q modifica el estado

    return (
        <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="TodoSearch"
            disabled={loading} /* esta prop ES para cuando la pag está cargando deshabilito el input */
        />
    );
};

export { TodoSearch };