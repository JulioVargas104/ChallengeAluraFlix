import React, { useState, useEffect } from 'react';
import '../Formulario/Formulario.css';
import CampoTexto from './Campotexto';
import Listaopciones from './Listaopciones';
import Botonguardar from './Botonguardar';
import Botonlimpiar from './Botonlimpiar';

export default function Formulario({ agregarPelicula, generoPeli, pelicula, editarPelicula }) {
  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [sinopsis, actualizarSinopsis] = useState("");


  useEffect(() => {
    if (pelicula) {
      actualizarTitulo(pelicula.titulo);
      actualizarImagen(pelicula.imagen);
      actualizarVideo(pelicula.video);
      actualizarSinopsis(pelicula.sinopsis);
    }
  }, [pelicula]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      id: pelicula ? pelicula.id : null,
      titulo,
      imagen,
      video,
      sinopsis,
    };

    if (pelicula) {
      editarPelicula(datosEnviar);
    } else {
      agregarPelicula(datosEnviar);
      console.log("PELÍCULA AGREGADA", datosEnviar)
      alert("Película agregada con éxito");
      limpiarFormulario();
    }
  };

  const limpiarFormulario = () => {
    actualizarTitulo("");
    actualizarImagen("");
    actualizarVideo("");
    actualizarCartelera("");
    actualizarSinopsis("");  };

  return (
    <section className='formulario'>
      <div className='titulo-subtitulo'>
        <h1>{pelicula ? "EDITAR VIDEO" : "NUEVO VIDEO"}</h1>
        <p>{pelicula ? "ACTUALIZA EL FORMULARIO PARA EDITAR LA TARJETA DE VIDEO" : "COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO"}</p>
      </div>
      <div className='titulo-crearTarjeta'>
        <hr />
        <h1>{pelicula ? "Editar Tarjeta" : "Crear Tarjeta"}</h1>
        <hr />
      </div>

      <form onSubmit={manejarEnvio}>
        <div className='horizontal-fields'>
          <CampoTexto
            titulo="Titulo"
            placeholder="Ingrese titulo"
            required
            valor={titulo}
            actualizarValor={actualizarTitulo}
          />

          <Listaopciones
            titulo="Categoria"
            required
            valor={cartelera}
            actualizarCartelera={actualizarCartelera}
            generoPeli={generoPeli.map(cartelera => cartelera.titulo)}
          />
        </div>

        <div className='horizontal-fields'>
          <CampoTexto
            titulo="Imagen"
            placeholder="Ingrese url de la imagen"
            required
            valor={imagen}
            actualizarValor={actualizarImagen}
          />

          <CampoTexto
            titulo="Video"
            placeholder="Ingrese url del Video"
            required
            valor={video}
            actualizarValor={actualizarVideo}
          />
        </div>

        <div className='horizontal-fields'>
          <CampoTexto
            titulo="Sinopsis"
            placeholder="Agregue una descripción"
            required
            valor={sinopsis}
            actualizarValor={actualizarSinopsis}
          />
        </div>

        <div className="button-container">
          <Botonguardar texto="GUARDAR" type="submit" />
          <Botonlimpiar texto="LIMPIAR" onClick={limpiarFormulario} />
        </div>
      </form>
    </section>
  );
}





