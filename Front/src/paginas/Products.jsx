import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Modal from "../components/Modal";
import CreateProduct from "../components/Create_product";





import '../css/table.css';


const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 30px;
  height: 600px;
`;






const Products = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al servidor
    axios.get('http://localhost:7777/api/productos/listar')
      .then((response) => {
        // Actualiza el estado con los datos obtenidos
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El array vacío como segundo argumento asegura que la solicitud se realice solo una vez al montar el componente.





  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>


    {/* <div>
      <h1>Lista de Datos</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.numero_pedido} - {item.descripcion}</li>
        ))}
      </ul>
    </div> */}


      <button onClick={openModal}>Abrir Modal</button>
      <Contenedor>
     
      <table class="styled-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
    {data.map((item) => (
      <tr key={item._id}>
        <td>{item.nombre}</td>
        <td>{item.precio}</td>
        <td>{item.descripcion}</td>
        <td>{item.imagen}</td>
        <td>holi</td>
      </tr>
    ))}
  </tbody>
      </table>
       
      </Contenedor>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Productos</h2>
           <CreateProduct />
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </>
  );
};

export default Products;
