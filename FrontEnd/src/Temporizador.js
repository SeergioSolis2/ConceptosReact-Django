import React, { Component } from 'react';

class Temporizador extends Component {
  constructor(props) {
    super(props);
    this.state = { tiempo: 0 };
  }

  componentDidMount() {
    this.intervalo = setInterval(() => {
      this.setState((prevState) => ({
        tiempo: prevState.tiempo + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    return <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '18px', textAlign: 'center' }}>Tiempo transcurrido: {this.state.tiempo} segundos</p>;
  }
}

export default Temporizador;