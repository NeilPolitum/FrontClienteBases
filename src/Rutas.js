import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Crear from "./components/Crear";
import Editar from "./components/Editar";
import Ver from "./components/Ver";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/crear" element={<Crear />} />
        <Route exact path="/editar" element={<Editar />} />
        <Route exact path="/ver" element={<Ver />} />
      </Routes>
    </Router>
  );
}

export default Rutas;