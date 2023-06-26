//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Redux from './Redux';
import PruebasUnitariasReact from './PruebasUnitariasReact';
import Django from './Django';
import Potenciales from './Potenciales';
import Libre from './Libre';
import Acercademi from './Acercademi';
function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Fundamentos React</Nav.Link>
            <Nav.Link as={Link} to="/Redux">Redux</Nav.Link>
            <Nav.Link as={Link} to="/PruebasUnitariasReact">Pruebas Unitarias React</Nav.Link>
            <Nav.Link as={Link} to="/Django">Django</Nav.Link>
            <Nav.Link as={Link} to="/Potenciales">Potenciales</Nav.Link>
            <Nav.Link as={Link} to="/Libre" >Libre</Nav.Link>
            <Nav.Link as={Link} to="/Acercademi">Acerca de mi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Redux" element={<Redux/>} />
        <Route path="/PruebasUnitariasReact" element={<PruebasUnitariasReact/>}/>
        <Route path="/Django" element={<Django/>}/>
        <Route path="/Potenciales" element={<Potenciales/>}/>
        <Route path="/Libre" element={<Libre/>}/>
        <Route path="/Acercademi" element={<Acercademi/>}/>
      </Routes>
    </Router>
  );
}

export default App;