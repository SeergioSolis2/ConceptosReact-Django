import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Imagen5 from './assets/5.png';
import Imagen6 from './assets/6.png';

// Acciones
const incrementarContador = () => {
  return {
    type: 'INCREMENTAR_CONTADOR',
  };
};

const decrementarcontador = () => {
  return {
    type: 'DECREMENTAR_CONTADOR',
  };
};

// Reducer
const contadorReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENTAR_CONTADOR':
      return state + 1;
    case 'DECREMENTAR_CONTADOR':
      return state - 1;
    default:
      return state;
  }
};

// Contador (Componente Presentacional)
const Contador = ({ contador, incrementarContador, decrementarContador }) => {
  return (
  
      <><p style={{ fontFamily: 'Arial', color: 'black',fontSize: '20px', textAlign: 'center' }} >Contador: {contador}</p><button onClick={incrementarContador}>Incrementar</button><button onClick={decrementarContador}>Decrementar</button></>

  );
};

const mapStateToProps = (state) => {
  return {
    contador: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementarContador: () => dispatch(incrementarContador()),
    decrementarContador: () => dispatch(decrementarcontador()),
  };
};

const ContadorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contador);

const store = createStore(contadorReducer);

function Redux() {
  return (
    <>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Aprendizajes Requeridos</h1>
          <h3>Redux</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center'>
          <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '20px', textAlign: 'justify' }}>Redux es una biblioteca de gestión del estado predecible para aplicaciones JavaScript. Ayuda a mantener un estado centralizado y proporciona una forma estructurada de administrar los cambios en ese estado. Redux se utiliza comúnmente con bibliotecas como React para el desarrollo de aplicaciones web.</p>
          <ContadorContainer store={store} />
        </div>
      </div>
      <div className='row'>
        <div className='col-3'>
          <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '20px', textAlign: 'center' }}>Actions (Acciones):</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>Las acciones representan eventos que ocurren en la aplicación y describen una intención de modificar el estado. En este caso, las acciones son funciones que retornan objetos con una propiedad type que identifica el tipo de acción.
              <br />En el código, se definen dos acciones:  <br />
              <br />-IncrementarContador: Incrementa el contador.
              <br />-Decrementarcontador: Decrementa el contador.
            </p>
        </div>
        <div className='col-3'>
          <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '20px', textAlign: 'center' }}>Reducers:</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>
            Los reducers son funciones puras que especifican cómo cambia el estado de la aplicación en respuesta a las acciones. Reciben el estado actual y una acción como argumentos y devuelven un nuevo estado modificado o el estado actual si no hay cambios.
            En el código, se define el contadorReducer que recibe el estado actual y una acción. El reducer utiliza un switch para manejar las diferentes acciones y realizar los cambios correspondientes en el estado.
            </p>
          
        </div>
        <div className='col-3'>
          <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '20px', textAlign: 'center' }}>Dispatch:</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>
            Dispatch es una función proporcionada por Redux que se utiliza para enviar acciones a los reducers. Al llamar a dispatch, Redux analiza las acciones y las envía al reducer correspondiente para que realice los cambios en el estado de la aplicación.
            <br />En el código, se crea un store mediante createStore y se conecta el reducer al store. <br /> Luego, se utilizan las funciones incrementarContador y decrementarContador en los botones del componente Contador.
            <br /> Al hacer clic en los botones, se llaman a estas funciones y se envían las acciones al store a través de dispatch.
            </p>
        </div>
        <div className='col-3'>
          <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '20px', textAlign: 'center' }}>Containers (Contenedores):</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>
            Los contenedores en Redux son componentes de React que están conectados al store de Redux.  <br/>Actúan como intermediarios entre el estado almacenado en el store y los componentes presentacionales. Los contenedores se encargan de suscribirse al store, obtener los datos necesarios y pasarlos como props a los componentes presentacionales.
            <br/>En el código, el componente Contador es el componente presentacional y se conecta al store mediante la función connect. 
            <br/>El contenedor ContadorContainer se crea utilizando connect, y se especifica mapStateToProps y mapDispatchToProps para mapear el estado y las acciones al componente Contador. <br/> El contenedor se utiliza en el componente Redux y se pasa el store como prop.
            </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Codigo Utilizado</h1>
          <img src={Imagen5} style={{width:'50%'}}></img>
          <img src={Imagen6} style={{width:'50%'}}></img>
        </div>
      </div>
    </>
  );
}

export default Redux;
