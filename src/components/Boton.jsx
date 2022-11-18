import React from 'react';
import '../stylesheets/Boton.css'

function Boton (props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div className={`button-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        >
            {props.children}
        </div>
    );
}

export default Boton;