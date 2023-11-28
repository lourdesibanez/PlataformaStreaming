import { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

const MyNavbar = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLogged(!!token); // Establece el estado de isLogged según la presencia del token
    }, []);

    return (
        <>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo-s.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Docflix
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/recomendados">Recomendados</Link>
                    {!isLogged ? (
                        <Link className="nav-link" to="/login">Iniciar Sesion</Link>
                    ) : (
                        <Link className="nav-link" to="/login">Cerrar Sesion</Link>
                        /* ACA EN VEZ DE REDIRECCIONAR FALTARIA MAS BIEN, AGREGAR UNA FUNCION COMO X EJ
                            handleLogOut() Y LLAMARLA DESDE EL BOTTON CON UN ONCLICK EVENT. QUE LO UNICO QUE HARIA ES ELIMINAR EL TOKEN DEL LOCALSTORAGE
                            POR LO QUE SI SE QUIERE VISUALIZAR CONTENIDO DEBE LOGEARSE DE NUEVO PORQUE NO HAY TOKEN
                        */
                    )
                    }
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default MyNavbar