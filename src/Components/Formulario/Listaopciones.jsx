import React from 'react';

export default function Listaopciones(props) {

    const manejarCambio = (e) => {
        props.actualizarCartelera(e.target.value)
    }

    return (
        <div>
            <label htmlFor="options">{props.titulo}</label>
            <select value={props.valor} onChange={manejarCambio} required={props.required}>
                <option value="" disabled defaultValue="" hidden>Escoja un género</option>
                {props.generoPeli.map((cartelera, index) => (
                    <option key={index} value={cartelera}>{cartelera}</option>
                ))}
            </select>
        </div>
    );
}

