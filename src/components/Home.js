import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'

const Home = () => {
    return (
        <figure class="text-center Titulo">
            <h1>Clientes</h1>
            <Link to="/crear">
                <button type="button" class="btn btn-primary Boton">Crear Cliente</button>
            </Link>
            <Link to="/editar">
                <button type="button" class="btn btn-primary Boton">Editar Cliente</button>
            </Link>
            <Link to="/ver">
                <button type="button" class="btn btn-primary Boton">Ver Clientes</button>
            </Link>
        </figure>
    );
}

export default Home;
