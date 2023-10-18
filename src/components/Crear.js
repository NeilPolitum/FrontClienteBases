import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'

function Crear() {
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8090/tipos-doc')
      .then(response => {
        setTiposDocumento(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get('http://localhost:8090/clientes/' + numeroDocumento)
      .then(response => {
        if (response.data.length != []) {
          alert('El número de documento ya existe en otro cliente')
        } else {
          const data = {
            numDocumento: numeroDocumento,
            idTipoDoc: tipoDocumento,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            celular: celular,
            correo: correo
          };

          axios.post('http://localhost:8090/clientes', data)
            .then(response => {
              console.log(response);
              alert('Cliente creado correctamente')
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} class="mb-3 align-items-center Form">
      <h1>Crear Cliente</h1>
      <div class="mb-3">
        <label class="form-label">Número de documento</label>
        <input class="form-control" type="text" value={numeroDocumento} onChange={e => setNumeroDocumento(e.target.value)} />
      </div>
      <div class="mb-3">
        <label class="form-label">Tipo de documento</label>
        <select class="form-control" value={tipoDocumento} onChange={e => setTipoDocumento(e.target.value)}>
          <option value="">Seleccione un tipo de documento</option>
          {tiposDocumento.map(tipo => (
            <option key={tipo.IDTIPODOC} value={tipo.IDTIPODOC}>{tipo.DESCTIPODOC}</option>
          ))}
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input class="form-control" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
      </div>
      <div class="mb-3">
        <label class="form-label">Apellido</label>
        <input class="form-control" type="text" value={apellido} onChange={e => setApellido(e.target.value)} />
      </div>
      <div class="mb-3">
        <label class="form-label">Dirección</label>
        <input class="form-control" type="text" value={direccion} onChange={e => setDireccion(e.target.value)} />
      </div>
      <div class="mb-3">
        <label class="form-label">Correo</label>
        <input class="form-control" type="email" value={correo} onChange={e => setCorreo(e.target.value)} />
      </div>
      <div class="mb-3">
        <label class="form-label">Celular</label>
        <input class="form-control" type="tel" value={celular} onChange={e => setCelular(e.target.value)} />
      </div>
      <button type="submit" class="btn btn-success">Crear</button>
    </form>
  );
}

export default Crear;
