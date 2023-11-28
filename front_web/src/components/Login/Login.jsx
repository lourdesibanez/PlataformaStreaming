import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        // Aquí puedes realizar la llamada a la API para hacer el login
        try {
            const response = await fetch('http://localhost:8888/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token; // Suponiendo que la API devuelve un token

                // Guardar el token en el estado de la aplicación o en el almacenamiento local (localStorage)
                // Por ejemplo:
                localStorage.setItem('token', token);
                console.log("logeado");
                // Redirigir a la página de inicio de la aplicación o realizar otras acciones necesarias
                navigate("/"); // Reemplaza 'inicio' con la ruta de tu página principal
            } else {
                // Manejar errores de autenticación
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center container-form">
            <div className="logo-back"></div>
            <form className="form-login" onSubmit={handleFormSubmit}>
                <h3>Iniciar Sesion</h3>
                <div className="form-input-group">
                    <label>Nombre de usuario:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-input-group">
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
