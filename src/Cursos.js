import React, { Component } from "react";

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.limpiar = this.limpiar.bind(this);
    this.listarCursos = this.listarCursos.bind(this);
    this.listarCursosDeX = this.listarCursosDeX.bind(this);

    this.state = {
      cursos: [],
    };
  }

  listarCursos() {
    fetch("http://localhost:1234/estudiantes")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.estudiantes,
          resultado: json.result,
        });
      });
  }
  listarCursosDeX() {
    fetch("http://localhost:1234/estudiantes?apellido=Garcia")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.estudiantes,
          resultado: json.result,
        });
      });
  }

  limpiar() {
    this.setState({
      cursos: [],
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.listarCursos}>Listar Cursos</button>
        <button onClick={this.listarCursosDeX}>
          Listar los cursos del estudiante X
        </button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr />
        <table>
          <thead>
            <tr>
              <th>nombre</th>
              <th>apellido</th>
              <th>cursos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cursos.map((p, index) => (
              <tr key={index}>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.cursos && p.cursos[0].nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
