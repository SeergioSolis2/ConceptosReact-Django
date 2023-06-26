import React from 'react';

function Potenciales(){
    return (
    <>
     <div className='row'style={{marginTop:'15px'}}>
        <div className='col-4' style={{textAlign:'justify'}}>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Testing en React y Django:</h5>
                <p className="card-text">Estrategias y enfoques para el testing de componentes React:
                    <br/>Para el testing de componentes React, se utilizan diferentes estrategias y enfoques. Algunas de las técnicas comunes incluyen pruebas unitarias y pruebas de integración.
                    <br/>Las pruebas unitarias se centran en probar unidades individuales de código, como componentes React, de forma aislada. Se pueden utilizar herramientas como Jest, React Testing Library o Enzyme para escribir y ejecutar pruebas unitarias en React.
                    <br/>Las pruebas de integración se realizan para verificar la interacción entre diferentes componentes o módulos de una aplicación. Estas pruebas garantizan que los componentes funcionen correctamente juntos. También se pueden utilizar herramientas como Jest, React Testing Library o Enzyme para escribir y ejecutar pruebas de integración en React.</p>
            </div>
            </div>
        </div>
        <div className='col-4' style={{textAlign:'justify'}}>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Contenedores y virtualización:</h5>
                <p className="card-text">
                Conceptos y ventajas de la virtualización y contenedores:
                <br/>La virtualización es una técnica que permite crear entornos virtuales que emulan sistemas operativos completos, lo que permite ejecutar múltiples sistemas operativos en una sola máquina física.
                <br/>Los contenedores son una forma de virtualización a nivel de sistema operativo. En lugar de virtualizar todo el sistema operativo, los contenedores se basan en un sistema operativo host y comparten el kernel con otros contenedores. Esto los hace más livianos y rápidos de iniciar en comparación con las máquinas virtuales tradicionales.
                <br/>Algunas ventajas de los contenedores incluyen la portabilidad, la capacidad de escalar rápidamente, el aislamiento de recursos y la facilidad de despliegue y gestión.
                <br/><br/>Uso de Docker para la creación y gestión de contenedores:
                <br/>Docker es una plataforma que permite crear y gestionar contenedores de aplicaciones. Proporciona una forma sencilla de empaquetar una aplicación y todas sus dependencias en un contenedor independiente.
                <br/>Con Docker, puedes definir un archivo de configuración llamado Dockerfile, que especifica cómo se debe construir el contenedor. Luego, puedes utilizar los comandos de Docker para construir, ejecutar y gestionar los contenedores.
                <br/><br/>Docker Compose para la configuración de entornos de desarrollo y despliegue:
                <br/>Docker Compose es una herramienta que facilita la configuración y el despliegue de aplicaciones compuestas por múltiples contenedores.
                <br/>Con Docker Compose, puedes definir un archivo YAML que describe los servicios, redes y volúmenes necesarios para tu aplicación. Luego, puedes utilizar el comando docker-compose up para crear y ejecutar todos los contenedores definidos en el archivo de configuración.
                </p>
            </div>
            </div>
        </div>
        <div className='col-4' style={{textAlign:'justify'}}>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Desarrollo de microservicios:</h5>
                <p className="card-text">
                <br/>Conceptos y principios de arquitectura de microservicios:

                <br/>La arquitectura de microservicios es un enfoque de desarrollo de software que divide una aplicación en componentes pequeños e independientes llamados microservicios. Cada microservicio se enfoca en realizar una tarea específica y se comunica con otros microservicios a través de API bien definidas.
                <br/>Algunos principios de la arquitectura de microservicios incluyen la independencia de los microservicios, la comunicación a través de protocolos como HTTP/REST o mensajería asíncrona, la escalabilidad y la tolerancia a fallos.
                <br/><br/>Uso de Django Rest Framework para la creación y gestión de microservicios en Django:

                <br/>Django Rest Framework (DRF) es una extensión de Django que facilita la creación de APIs RESTful en Django.
                <br/>DRF proporciona herramientas y utilidades para definir modelos de datos, serializadores, vistas y enrutamiento de URLs para construir una API. También incluye características como autenticación, autorización y validación de datos.
                <br/><br/>Implementación y comunicación entre microservicios utilizando protocolos como HTTP/REST o mensajería asíncrona:

                <br/>Los microservicios se comunican entre sí a través de protocolos como HTTP/REST o utilizando sistemas de mensajería asíncrona como RabbitMQ o Apache Kafka.
                <br/>HTTP/REST es un protocolo comúnmente utilizado para la comunicación entre microservicios. Cada microservicio expone una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos.
                <br/>La mensajería asíncrona permite la comunicación asíncrona entre microservicios a través de mensajes. Los microservicios pueden publicar mensajes en un sistema de mensajería y otros microservicios pueden suscribirse a esos mensajes para recibir y procesar la información.
            
                </p>
            </div>
            </div>
        </div>
    </div>
       
    </>
   
      );
}

export default Potenciales;