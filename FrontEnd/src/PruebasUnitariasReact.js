import React from 'react';
import { render } from '@testing-library/react';
import Imagen7 from './assets/7.png';
import Imagen8 from './assets/8.png'
function PruebasUnitariasReact() {
  return (
    <>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Aprendizajes Requeridos</h1>
          <h3>Prueba Unitarias en react</h3>
        </div>
      </div>
      <div className='row' style={{ margin: '10px' }}>
        <div className='col-12'>
          <h1 style={{ fontFamily: 'Arial', color: 'red', fontSize: '25px' }}>Desarrollo de pruebas unitarias en React</h1>
          <p style={{ fontFamily: 'Arial', color: 'black', fontSize: '15px', textAlign: 'justify' }}>
            El desarrollo de pruebas unitarias en React se refiere a la creación de pruebas automatizadas para verificar el correcto funcionamiento de los componentes y funciones de una aplicación React.<br />
            Estas pruebas se enfocan en probar unidades individuales de código para detectar posibles errores o comportamientos inesperados.
          </p>
        </div>

      </div>
      <div className='row' style={{ margin: '10px' }}>
        <div className='col-12'>
          <h1 style={{ fontFamily: 'Arial', color: 'red', fontSize: '25px' }}>Herramientas y bibliotecas para pruebas:</h1>
          <p style={{ fontFamily: 'Arial', color: 'black', fontSize: '15px', textAlign: 'justify' }}>
            En React, dos herramientas populares para realizar pruebas unitarias son Jest y React Testing Library. Jest es un marco de pruebas desarrollado por Facebook que proporciona una sintaxis sencilla y poderosa para escribir y ejecutar pruebas. React Testing Library, por otro lado, es una biblioteca que te permite interactuar con los componentes de React de manera similar a cómo lo haría un usuario real, facilitando la escritura de pruebas más robustas y centradas en el comportamiento de la interfaz de usuario.
          </p>
          <p style={{ fontFamily: 'Arial', color: 'black', fontSize: '15px', textAlign: 'justify' }}>
            Con estas herramientas, puedes escribir pruebas unitarias para tus componentes y funciones de React, verificar su renderizado correcto, probar el comportamiento en diferentes situaciones y asegurarte de que tu aplicación se mantenga funcionando correctamente a medida que realices cambios y actualizaciones.
          </p>
          <p style={{ fontFamily: 'Arial', color: 'black', fontSize: '15px', textAlign: 'justify' }}>
            Aquí tienes un ejemplo de código para desarrollar pruebas unitarias en React utilizando Jest y React Testing Library:
          </p>
          <p><img src={Imagen7} alt="Codificacion" style={{ width: '50%', margin: '10px', textAlign: 'center' }}  /></p>
          <h1 style={{ fontFamily: 'Arial', color: 'red', fontSize: '25px' }}>Ejemplo de Respuesta del npm test</h1>
          <p><img src={Imagen8} alt="Codificacion" style={{ width: '50%', margin: '10px', textAlign: 'center' }}  /></p>

        </div>

      </div>
    </>
  );
}


  
  export default PruebasUnitariasReact;