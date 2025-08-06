import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(233, 30, 99, 0.1)',
      padding: '1rem 0'
    }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <div style={{
            width: '50px',
            height: '50px',
            background: 'var(--gradient)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold'
          }}>
            G
          </div>
          <span className="gradient-text fs-4 fw-bold">FOB</span>
        </Link>

        <div className="d-flex align-items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to="/jobs" className="btn btn-outline-gradient">
                Browse Jobs
              </Link>
              <Link to={`/profile/${user?.id}`} className="btn btn-outline-gradient">
                Profile
              </Link>
              <button onClick={handleLogout} className="btn btn-gradient">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-gradient">
                Login
              </Link>
              <Link to="/register" className="btn btn-gradient">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;