import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Introduce un email válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

function Register() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    // Simulando una petición al backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Datos validados:', data);
    setSuccess(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="login-container">
      <div className="welcome-card">
        <h2>Crear Cuenta</h2>
        <p>Únete a nuestro catálogo exclusivo.</p>
        
        {success ? (
          <div className="success-banner">
            <h3>¡Registro Exitoso!</h3>
            <p>Redirigiendo al login...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input 
                {...register('name')}
                type="text" 
                className={`search-input ${errors.name ? 'input-error' : ''}`}
                placeholder="Juan Pérez"
              />
              {errors.name && <span className="error-text">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                {...register('email')}
                type="email" 
                className={`search-input ${errors.email ? 'input-error' : ''}`}
                placeholder="usuario@ejemplo.com"
              />
              {errors.email && <span className="error-text">{errors.email.message}</span>}
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

            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input 
                {...register('confirmPassword')}
                type="password" 
                className={`search-input ${errors.confirmPassword ? 'input-error' : ''}`}
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword.message}</span>}
            </div>

            <button 
              type="submit" 
              className="buy-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Procesando...' : 'Registrarse'}
            </button>
            
            <p className="auth-link">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
