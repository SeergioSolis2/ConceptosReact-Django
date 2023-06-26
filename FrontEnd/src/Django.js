import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImagenConnect from './assets/Connect.png'


function Django() {
  const videoId = 'https://www.youtube.com/watch?v=B8OlRdYwNlA';
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/persons/');
      setPersons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className='row'>
    <div className='col-12 text-center'>
          <h1>Aprendizajes Requeridos</h1>
          <h3>Django</h3>
        </div>
    </div>
    <div className='row'>
        <div className='col-4'>
            <h1 style={{color:'red'}}>Ejemplo de Uso de Django</h1>
            <h3>Person List</h3>
            <ul>
                {persons.map(person => (
                <li key={person.id}>
                    Name: {person.name}, Age: {person.age}
                </li>
                ))}
            </ul>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>
                Para este ejemplo se solicito lo siguiente:
                <br/>ORM y bases de datos en Django:
                <br/>•Uso del ORM de Django para interactuar con la base de datos.
                <br/>•Creación y migración de modelos.
                <br/>•Consultas y filtros de datos en Django.
                <br/>Desarrollo de APIs RESTful en Django:
                <br/>•Creación de vistas basadas en clases y funciones en Django.
                <br/>•Serialización y deserialización de datos.
                <br/>•Autenticación y autorización de API.
            </p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>
                Video Importante que me sirvio para la Explicacion de Django: 
                <br/>
                Ver en YouTube: <a href={videoId} target="_blank" rel="noopener noreferrer">{videoId}</a>
            </p>
               
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
            <h1 style={{color:'red'}}>Explicacion de como se utilizo lo solicitado y ¿Qué es?</h1>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>ORM y bases de datos en Django:</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>El ORM (Object-Relational Mapping) de Django es una capa de abstracción que permite interactuar con la base de datos utilizando objetos y consultas en lugar de escribir SQL directamente. Django se encarga de la comunicación con la base de datos y mapea los objetos Python a tablas de la base de datos.</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>En el ejemplo, se configuró una base de datos SQLite utilizando la configuración en el archivo settings.py. Se definió un modelo Person en el archivo models.py que representa una tabla en la base de datos. Los modelos en Django definen las estructuras de las tablas y los campos que contienen.</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>Se utilizaron las migraciones de Django (makemigrations y migrate) para crear y aplicar los cambios en la base de datos. Las migraciones permiten mantener la consistencia entre el modelo de datos y la estructura de la base de datos a medida que evoluciona el proyecto.</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>También se utilizó el shell interactivo de Django (manage.py shell) para crear objetos Person y guardarlos en la base de datos. Esto demuestra cómo interactuar con la base de datos utilizando el ORM de Django.</p>
            
            {/* DIVISION */}


            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>Desarrollo de APIs RESTful en Django:</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>Django proporciona el framework Django REST framework para desarrollar APIs RESTful de manera sencilla. En el ejemplo, se utilizó el Django REST framework para crear una API que devuelve una lista de personas en formato JSON.Se definieron rutas (urls.py) para la API, estableciendo la URL base /api/ y la ruta /persons/ que se utilizará para obtener la lista de personas.</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>Se creó una vista basada en clase llamada PersonList que hereda de APIView. Esta vista maneja la solicitud GET y devuelve una lista de personas desde la base de datos utilizando el modelo Person y el serializador PersonSerializer.
            El serializador (serializers.py) se encarga de convertir los objetos Person en formato JSON para su transmisión a través de la API. Se utilizó el PersonSerializer para serializar la lista de personas obtenida desde la base de datos.</p>
            <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '15px', textAlign: 'justify' }}>El Django REST framework proporciona características adicionales para la autenticación y autorización de la API, como la autenticación basada en tokens o JWT (JSON Web Tokens), que no se abordaron en el ejemplo.</p>
        
        </div>
    </div>
    <div className='row'>
        <div className='col-12'>
            <h1 style={{color:'red'}}>Conexion a Django</h1>
            <p><img src={ImagenConnect} alt="Codificacion" style={{ width: '100%', margin: '10px', textAlign: 'center' }}  /></p>
        </div>
    </div>
    </>
 
  );
}

export default Django;
