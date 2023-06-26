import React from 'react';
import Temporizador from './Temporizador';
import Contador from './Contador';
import ComponenteMensaje from './ComponenteMensaje';
import Imagen1 from './assets/1.png'
import Imagen2 from './assets/2.png'
import Imagen3 from './assets/3.png'
import Imagen4 from './assets/4.png'

function Home() {
  return (

    <><div className='row'>
          <div className='col-12 text-center'>
              <h1>Aprendizajes Requeridos</h1>
              <h3>Fundamentos de React</h3>
          </div>
      </div><div className='row'>
              <div className='col-4'>
                  <h5 className='text-center'>Componentes y JSX:</h5>
                  <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '18px' }}>EXPLICACIÓN:
                  <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>En React, los componentes son las unidades básicas de la interfaz de usuario. Representan partes reutilizables y encapsuladas de código que pueden contener elementos HTML, otros componentes de React o incluso lógica adicional. JSX (JavaScript XML) es una extensión de sintaxis que permite escribir estructuras similares a HTML en JavaScript para definir la estructura de los componentes de React.
                  </p></p>
                  <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'center' }}> <Saludo /></p>
                  <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>Ejemplo de codigo utilizado:
                    <p><img src={Imagen1} alt="Codificacion" style={{ width: '100%', margin: '10px', textAlign: 'center' }}  /></p>
                  </p>

              </div>
              <div className='col-4'>
                    <h5 className='text-center'>Ciclo de vida de los componentes:</h5>
                    <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '18px' }}>EXPLICACIÓN:
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>Los componentes en React tienen un ciclo de vida que abarca diferentes etapas, desde su creación hasta su eliminación. Cada etapa del ciclo de vida tiene métodos específicos que se pueden utilizar para realizar acciones en momentos clave, como la inicialización, actualización o destrucción de un componente.
                    </p></p>
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'center' }}>   <Temporizador /> </p>
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>Ejemplo de codigo utilizado:
                        <p><img src={Imagen2} alt="Codificacion" style={{ width: '100%', margin: '10px', textAlign: 'center' }}  /></p>
                    </p>

              </div>
              <div className='col-4'>
                    <h5 className='text-center'>Manipulación del estado y props:</h5>
                    <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '18px' }}>EXPLICACIÓN:
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>En React, el estado y las props son dos conceptos importantes. El estado es un objeto que contiene datos específicos de un componente, y puede ser modificado a lo largo del ciclo de vida del componente. Las props son propiedades que se pasan de un componente padre a un componente hijo, y son utilizadas para proporcionar datos o configuraciones a un componente.
                    </p></p>
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'center' }}><Contador/></p>
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>Ejemplo de codigo utilizado:
                        <p><img src={Imagen3} alt="Codificacion" style={{ width: '100%', margin: '10px', textAlign: 'center' }}  /></p>
                    </p>
              </div>
          </div>
          <div className='row'>
            <div className='col-8'>
            <h5 className='text-center'>Renderizado condicional:</h5>
                    <p style={{ fontFamily: 'Arial', color: 'red',fontSize: '18px' }}>EXPLICACIÓN:
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>El renderizado condicional en React permite mostrar u ocultar elementos o componentes en función de ciertas condiciones. Puedes utilizar declaraciones condicionales como if o el operador ternario para decidir qué elementos se deben renderizar en función del estado o las props.
                    </p></p>
                    <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'center' }}><ComponenteMensaje/></p>
                   
            </div>
            <div className='col-4'> 
            <h5 className='text-center'> </h5>
                <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '12px', textAlign: 'justify' }}>Ejemplo de Renderizado condicional:
                    <p><img src={Imagen4} alt="Codificacion" style={{ width: '100%', margin: '10px', textAlign: 'center' }}  /></p>
                </p>
            </div>
          </div>
          </>
   
   
  );
}


const Saludo = () => {
    return <h1>Hola, mundo!</h1>;
  };

export default Home;