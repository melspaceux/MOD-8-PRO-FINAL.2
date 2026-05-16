import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="welcome-card">
        <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
        <h2>¡Vaya! Página no encontrada</h2>
        <p>Parece que te has perdido en nuestro catálogo.</p>
        <button onClick={() => navigate('/')} className="buy-btn">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default NotFound;
