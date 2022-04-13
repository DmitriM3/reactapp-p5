import React, { Component } from "react";
import "./Estudiante.css";

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="estilo">
        <p>Nombre: {this.props.nombre}</p>
        <p>Apellido: {this.props.apellido}</p>
        <p>Carrera: {this.props.carrera}</p>
      </div>
    );
  }
}
