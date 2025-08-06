import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    const result = await register(
      formData.name, 
      formData.email, 
      formData.password, 
      formData.bio
    );
    
    if (result.success) {
      navigate('/jobs');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5" style={{
      background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f4f8 100%)'
    }}>
      <div className="row w-100 justify-content-center">
        <div className="col-md-8 col-lg-6">
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
                <h2 className="gradient-text fw-bold">Join FOB Today</h2>
                <p className="text-muted">Create your account and start your career journey</p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-medium">Full Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg gradient-border"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: '15px',
                        padding: '12px 20px'
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
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
                      placeholder="Create a password"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmPassword" className="form-label fw-medium">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg gradient-border"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: '15px',
                        padding: '12px 20px'
                      }}
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="bio" className="form-label fw-medium">Bio (Optional)</label>
                  <textarea
                    className="form-control gradient-border"
                    id="bio"
                    name="bio"
                    rows="3"
                    value={formData.bio}
                    onChange={handleChange}
                    style={{
                      borderRadius: '15px',
                      padding: '12px 20px'
                    }}
                    placeholder="Tell us about yourself..."
                  ></textarea>
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
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>

                <div className="text-center">
                  <p className="text-muted">
                    Already have an account? {' '}
                    <Link to="/login" className="gradient-text fw-medium text-decoration-none">
                      Sign in here
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

export default Register;