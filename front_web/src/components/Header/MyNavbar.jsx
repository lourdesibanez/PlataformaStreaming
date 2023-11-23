import React from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <Navbar.Brand href="#home">DocFlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/recomendados">Recomendados</Nav.Link>
                    <Nav.Link href="">Mi lista</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default MyNavbar