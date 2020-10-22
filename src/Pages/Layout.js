import React, {Component} from 'react';
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';

const Layout = () => {
		return(
			<Navbar bg="light" expand="lg">
			  <Navbar.Brand href="#home">React APP</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="/">1.Daftar</Nav.Link>
			      <Nav.Link href="/login">2.Login</Nav.Link>
			      <Nav.Link href="/checklistgetall">3.Checklist_Get_All</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>

		)
}

export default Layout