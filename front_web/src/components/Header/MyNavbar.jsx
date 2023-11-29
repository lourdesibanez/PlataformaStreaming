import { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
    const [isLogged, setIsLogged] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLogged(!!token); // Establece el estado de isLogged según la presencia del token
    }, []);

    const handleLogout = () => {
        // Elimino el token del localStorage
        localStorage.removeItem('token');
        navigate("/");
      };
      

    return (
        <>
            <Link className="navbar-brand " to="/">
            <img
              alt=""
              src="/logo-s.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Docflix
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/recomendados">Recomendados</Link>
                    {!isLogged ? (
                        <Link className="nav-link" to="/login">Iniciar Sesion</Link>
                    ) : (
                        <button className='nav-link' onClick={()=> handleLogout()}>Cerrar Sesion</button>
                    )
                    }
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default MyNavbar