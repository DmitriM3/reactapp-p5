import React, { Component } from "react";
import "./Estudiante.css";

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    class Curso {
      constructor(nombre, cantidadHs) {
        this.nombre = nombre;
        this.cantidadHs = cantidadHs;
      }
    }

    let cursoUno = new Curso("Un Curso Cualquiera", "20");

    this.state = {
      cursos: [cursoUno],
    };

    console.log(this.state.cursos);
  }

  handleClick() {
    class Curso {
      constructor(nombre, cantidadHs) {
        this.nombre = nombre;
        this.cantidadHs = cantidadHs;
      }
    }
    let nuevoArray = [];
    let cursoNuevo = new Curso("Un Curso Cualquiera", "25");
    nuevoArray = [cursoNuevo];
    this.setState((state) => ({
      cursos: [...state.cursos, ...nuevoArray],
    }));
  }

  render() {
    return (
      <>
        <div className="estilo">
          <p style={{ color: "red" }}>Estudiante</p>
          <p>Nombre: {this.props.nombre}</p>
          <p>Apellido: {this.props.apellido}</p>
          <p>Carrera: {this.props.carrera}</p>
        </div>
        <div class="container">
          <div class="center">
            <button onClick={this.handleClick}>Inscribirme</button>
          </div>
          {/* <p>Count: {this.state.counts}</p> */}
        </div>

        <div>
          <table className="centerTable">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Cantidad de Hs</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cursos.map((curso, index) => (
                <tr key={index}>
                  <td>{curso.nombre}</td>
                  <td>{curso.cantidadHs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
