import React, { Component } from "react";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        cursos: "",
      },
      resultado: "",
      cursosAll: [],
    };
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        cursos: [this.state.form.cursosAll],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "Estudiante fue creado con éxito!",
        });
      });
  }

  componentDidMount() {
    fetch("http://localhost:1234/cursos")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          cursosAll: json.cursos,
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          {/* <select name="cursos" onChange={this.handleChange}>
            {this.state.cursos.map((c) => (
              <option value={c.numero}>{c.nombre}</option>
            ))}
          </select> */}
          <select name="cursosAll" onChange={this.handleChange}>
            {this.state.cursosAll.map((l) => (
              <option value={l.numero}>{l.nombre}</option>
            ))}
          </select>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.form.nombre}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.form.apellido}
            />
          </label>
          <button onClick={this.handleSubmit} type="submit">
            Enviar
          </button>
        </form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
