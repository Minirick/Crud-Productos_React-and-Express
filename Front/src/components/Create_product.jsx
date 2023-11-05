import React, { useState } from 'react';
import '../css/form_add_product.css';
import axios from 'axios';

function CreateProduct() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, precio, descripcion, imagen].includes('')) {
      // Aquí puedes manejar la validación de campos obligatorios
      console.log('Todos los campos son obligatorios');
      return;
    }

    // Crear producto en la API
    try {
      const { data } = await axios.post('http://localhost:7777/api/productos', {
        nombre,
        precio,
        descripcion,
        imagen,
      });

      // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página.
      console.log(data);
    } catch (error) {
      // Aquí puedes manejar los errores de la API, por ejemplo, mostrar un mensaje de error.
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2></h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="input"
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            className="input"
            type="text"
            id="precio"
            name="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <input
            className="input"
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          <input
            className="input"
            type="text"
            id="imagen"
            name="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea className="input" id="message" name="message" rows="4" required></textarea>
        </div> */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CreateProduct;
