import React from 'react';
import './Pelicula.css';
import editar from '/img/editar.png';
import eliminar from '/img/eliminar.png';
import { Link } from 'react-router-dom';

export default function Pelicula({ datos, onBorrar, onEdit }) {
  const { id, titulo, imagen } = datos;

  const manejarBorrado = () => {
    onBorrar(id);
  };

  const manejarEdicion = () => {
    onEdit(datos);
  };

  const truncarTexto = (texto, longitudMaxima) => {
    return texto.length > longitudMaxima ? texto.slice(0, longitudMaxima) + '...' : texto;
  };

  return (
    <div className='pelicula'>
      <div className='encabezado'>
        <Link to={`/mirarpeli/${id}`}>
          <img className='imagen-peli' src={imagen} alt={titulo} />
        </Link>
        <div className='info-peli'>
          <h4>{truncarTexto(titulo, 18)}</h4>
        </div>
        <div className='iconos'>
          <div className='accion' onClick={manejarBorrado}>
            <img src={eliminar} alt="eliminar" />
            <p>Borrar</p>
          </div>
          <div className='accion' onClick={manejarEdicion}>
            <img src={editar} alt="editar" />
            <p>Editar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
