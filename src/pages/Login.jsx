import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('mor_2314'); // Default for demo
  const [password, setPassword] = useState('83r5^_');   // Default for demo
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });
      if (response.data.token) {
        login(response.data.token);
        navigate('/profile');
      }
    } catch (err) {
      setError('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-card">
        <h2>Iniciar Sesión</h2>
        <p>Accede a tu perfil y gestiona tus pedidos.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="search-input"
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="search-input"
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="buy-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
