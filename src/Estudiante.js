import React, { Component } from "react";
import "./Estudiante.css";

export default class Estudiante extends Component {
  constructor(nombre, apellido, carrera, legajo) {
    super();
    this.nombre = nombre;
    this.apellido = apellido;
    this.carrera = carrera;
    this.legajo = legajo;
  }
  render() {
    let mati = new Estudiante(
      "Matias",
      "Dmitrowicz",
      "Licenciatura en Sistemas",
      "1177"
    );

    return (
      <div className="estilo">
        <p>Nombre: {mati.nombre}</p>
        <p>Apellido: {mati.apellido}</p>
        <p>Carrera: {mati.carrera}</p>
        <p>Legajo: {mati.legajo}</p>
      </div>
    );
  }
}
