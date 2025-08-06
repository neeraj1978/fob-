import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/jobs'); // or home/dashboard
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (!result.success) {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f4f8 100%)'
    }}>
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-lg glass-effect" style={{
            borderRadius: '20px',
            padding: '2rem'
          }}>
            <div className="card-body">
              <div className="text-center mb-4">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--gradient)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 'bold'
                }}>
                  G
                </div>
                <h2 className="gradient-text fw-bold">Welcome Back</h2>
                <p className="text-muted">Sign in to your FOB account</p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg gradient-border"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '15px',
                      padding: '12px 20px'
                    }}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-medium">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg gradient-border"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '15px',
                      padding: '12px 20px'
                    }}
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gradient w-100 btn-lg mb-3"
                  disabled={loading}
                  style={{ borderRadius: '15px' }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>

                <div className="text-center">
                  <p className="text-muted">
                    Don't have an account?{' '}
                    <Link to="/register" className="gradient-text fw-medium text-decoration-none">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
