import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import HeaderImage from './static/headerimage.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, Image, NavDropdown, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import About from './About.js';
import Treaty from './Treaty.js';
import Woodlots from './Woodlots.js';
import Tourism from './Tourism.js';
import Conservation from './Conservation.js';
import ContactUs from './ContactUs.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Image src={HeaderImage} fluid />
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="mx-5" href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle className="mx-5" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="About" id="about-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">Info</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">Different Info</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Treaty">Treaty</Nav.Link>
              <Nav.Link as={Link} to="/Woodlots">Woodlots</Nav.Link>
              <Nav.Link as={Link} to="/Tourism">Tourism</Nav.Link>
              <NavDropdown title="Conservation" id="conservation-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">Info</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">Different Info</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#">Even More Info</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/ContactUs">ContactUs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/" component={About} />
        <Route exact path="/Treaty" component={Treaty} />
        <Route exact path="/Woodlots" component={Woodlots} />
        <Route exact path="/Tourism" component={Tourism} />
        <Route exact path="/Conservation" component={Conservation} />
        <Route exact path="/ContactUs" component={ContactUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
