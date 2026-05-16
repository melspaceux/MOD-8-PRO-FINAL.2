import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

const loginSchema = z.object({
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  password: z.string().min(5, 'La contraseña debe tener al menos 5 caracteres'),
});

function Login() {
  const [apiError, setApiError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'mor_2314',
      password: '83r5^_'
    }
  });

  const onSubmit = async (data) => {
    setApiError('');
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: data.username,
        password: data.password
      });
      if (response.data.token) {
        login(response.data.token);
        navigate('/profile');
      }
    } catch (err) {
      setApiError('Credenciales inválidas o error de conexión.');
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-card">
        <h2>Iniciar Sesión</h2>
        <p>Accede a tu cuenta validada.</p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Usuario</label>
            <input 
              {...register('username')}
              type="text" 
              className={`search-input ${errors.username ? 'input-error' : ''}`}
            />
            {errors.username && <span className="error-text">{errors.username.message}</span>}
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input 
              {...register('password')}
              type="password" 
              className={`search-input ${errors.password ? 'input-error' : ''}`}
            />
            {errors.password && <span className="error-text">{errors.password.message}</span>}
          </div>

          {apiError && <p className="error-msg">{apiError}</p>}
          
          <button 
            type="submit" 
            className="buy-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Cargando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
