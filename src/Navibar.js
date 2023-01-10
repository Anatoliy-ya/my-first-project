import { Navbar, Container, Nav, NavDropdown, Link } from 'react-bootstrap';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FineshedTask } from './component/FineshedTask';

export default function Navibar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tasks List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link path="/" href="App.js">
                Главная
              </Nav.Link>
              <Nav.Link path="FineshedTasks" element={<FineshedTask />} href="FineshedTask.js">
                Завершенные
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
