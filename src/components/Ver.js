import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'

function Ver() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/clientes")
    .then(response => {
      setClientes(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="Form">
      <h1>Clientes</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Número de documento</th>
            <th scope="col">Tipo de documento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Dirección</th>
            <th scope="col">Celular</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.NUMDOCUMENTO}</td>
              <td>{cliente.IDTIPODOC}</td>
              <td>{cliente.NOMBRE}</td>
              <td>{cliente.APELLIDO}</td>
              <td>{cliente.DIRECCION}</td>
              <td>{cliente.CELULAR}</td>
              <td>{cliente.CORREO}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ver;
