import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="welcome-card">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h2>Mi Perfil</h2>
        </div>
        <div className="profile-info">
          <p><strong>Nombre:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <div className="status-badge">Cuenta Verificada</div>
        </div>
        <p className="description">
          Esta es una ruta privada. Solo puedes ver esta información si has iniciado sesión correctamente.
        </p>
        <div className="profile-actions">
          <button onClick={() => navigate('/')} className="detail-btn">Volver al Catálogo</button>
          <button onClick={handleLogout} className="buy-btn logout-btn">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
