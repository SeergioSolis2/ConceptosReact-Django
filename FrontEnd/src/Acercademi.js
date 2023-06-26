import React from 'react';
import perfil from './assets/Perfil.png'
function Acercademi(){
    return (
    <>
    <div className='row' style={{marginTop:'10px'}}>
        <h1 style={{color:'red',textAlign:'center'}}>¿Quién Soy?</h1>
        <div className='col-3'> 
            <div className="card">
            <div className="card-body" style={{textAlign:'center'}}>
            <p>SOY SERGIO EDUARDO SOLIS HERNÁNDEZ</p>
            <img src={perfil} alt="Codificacion" style={{ width: '100%' }}  />

            </div>
            </div>
        </div>
        <div className='col-8'> 
            <div className="card">
            <div className="card-body">
               <p>Soy estudiante de ingeniería en Sistemas Computacionales,
                Estoy en el noveno semestre de un total de nueve, con un
                actitud entusiasta para aplicar los conocimientos
                adquiridos durante mi estancia en la carrera y que
                adquirido por mi cuenta; Quiero explotar mis habilidades.
                al máximo, para desarrollarnos y mejorar como
                profesional y como persona, y por lo tanto
                contribuir a mi entorno.</p>
                <br/>
                <h3 style={{color:'red'}}>Experiencia profesional</h3>
                <p>
                <br/>-Servicios de contabilidad
                <br/>Abril 2018 – mayo 2022
                <br/>En este trabajo adquirí muchos conocimientos sobre lo que significa liderar una
                vida laboral activa, porque cumplía con ciertos horarios y días para estar
                eficiente en los trabajos que se me asignan y entregarlos a tiempo.
                aprendí a hacer un uso más efectivo del paquete ofimático así como a
                conocer los conceptos básicos de contabilidad.
                <br/>-Intern  flextronics agosto 2022 – ene 2023
                <br/>Durante mi estadía en flex, ayudé a hacer dashboards y programas de
                diferentes tipos, con el uso de c#, net framework, varias programaciones
                bibliotecas y el uso de bases de datos de sql server.
                <br/>-Github y stackblitz repository
                <br/>A lo largo de mi carrera universitaria he realizado diferentes trabajos que
                subido y publicado en mi perfil de stackblitz y github.
                <br/>https://stackblitz.com/@seergiosolis2
                <br/>https://github.com/seergiosolis2?tab=repositorios
                <br/>Sitio web creado por mí:
                <br/>https://seergiosolis2.github.io/miniheroes/home

                </p>

            </div>
            </div>
        </div>
        
        
    </div>
       
    </>
   
      );
}

export default Acercademi;