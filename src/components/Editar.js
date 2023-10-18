import React, { useState } from 'react';
import axios from 'axios';

const Editar = () => {
  const [documento, setDocumento] = useState('');
  const [cliente, setCliente] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8090/clientes/' + documento);
      if (response.data.length == []) {
        alert('El número de documento no existe')
      } else {
        setCliente(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const data = {
      nombre: cliente.NOMBRE,
      apellido: cliente.APELLIDO,
      direccion: cliente.DIRECCION,
      celular: cliente.CELULAR,
      correo: cliente.CORREO,
      idTipoDoc: cliente.IDTIPODOC
    };
    axios.put('http://localhost:8090/clientes/'+documento, data)
      .then(response => {
        alert('Cliente actualizado correctamente')
        setCliente(null);
        setDocumento('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  return (
    <div class="mb-3 align-items-center Form">
      <form onSubmit={handleSubmit}>
        <h1>Editar Cliente</h1>
        <div class="mb-3">
          <label class="form-label">Número de documento</label>
          <input class="form-control" type="text" name="documento" value={documento} onChange={(event) => setDocumento(event.target.value)} />
        </div>
        <button type="submit" class="btn btn-success">Buscar</button>
      </form>
      {cliente && (
        <form onSubmit={handleUpdate}>
          <div class="mb-3 Titulo">
            <label class="form-label">Nombre</label>
            <input class="form-control" type="text" name="NOMBRE" value={cliente.NOMBRE} onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label class="form-label">Apellido</label>
            <input class="form-control" type="text" name="APELLIDO" value={cliente.APELLIDO} onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label class="form-label">Dirección</label>
            <input class="form-control" type="text" name="DIRECCION" value={cliente.DIRECCION} onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label class="form-label">Correo</label>
            <input class="form-control" type="text" name="CORREO" value={cliente.CORREO} onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label class="form-label">Celular</label>
            <input class="form-control" type="text" name="CELULAR" value={cliente.CELULAR} onChange={handleChange} />
          </div>
          <button type="submit" class="btn btn-success">Actualizar</button>
        </form>
      )}
    </div>
  );
};

export default Editar;
