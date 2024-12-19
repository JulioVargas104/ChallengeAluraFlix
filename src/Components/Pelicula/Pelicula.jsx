import React from 'react';
import './Pelicula.css';
import editar from '/img/editar.png';
import eliminar from '/img/eliminar.png';

export default function Pelicula({ datos, onBorrar, onEdit }) {
  const { id, titulo, imagen, video} = datos;

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
      <a href ={video} target ="_blank">
        <img className='imagen-peli' src={imagen} alt={titulo}/>
      </a>        
      <div className='info-peli'>
          <h4>{truncarTexto(titulo, 18)}</h4>
        </div>
        <div className='iconos'>
          <div className='accion' onClick={manejarBorrado}>
            <img src={eliminar} alt="eliminar" />
            <p>BORRAR</p>
          </div>
          <div className='accion' onClick={manejarEdicion}>
            <img src={editar} alt="editar" />
            <p>EDITAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
