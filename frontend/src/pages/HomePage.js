import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentThought, setCurrentThought] = useState(0);
  
  const thoughts = [
    "💼 Looking for my dream job...",
    "🚀 Ready to advance my career...",
    "💡 Finding the perfect opportunity...",
    "⭐ Connecting with great companies...",
    "🎯 Matching my skills perfectly..."
  ];

  const changeThought = useCallback(() => {
    setCurrentThought((prev) => (prev + 1) % thoughts.length);
  }, [thoughts.length]);

  useEffect(() => {
    const interval = setInterval(changeThought, 3000);
    return () => clearInterval(interval);
  }, [changeThought]);

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f4f8 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(233, 30, 99, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '120px',
          height: '120px',
          background: 'rgba(33, 150, 243, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Find Your <span className="gradient-text">Dream Job</span> Today
              </h1>
              <p className="lead mb-4 text-muted">
                Connect with top employers and discover opportunities that match your skills and aspirations. Your next career move starts here.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/jobs" className="btn btn-gradient btn-lg px-4 py-3">
                  <i className="fas fa-search me-2"></i>Find Jobs
                </Link>
                <Link to="/register" className="btn btn-outline-gradient btn-lg px-4 py-3">
                  <i className="fas fa-upload me-2"></i>Upload Resume
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                {/* Animated Video Container */}
                <div className="glass-effect rounded-4 p-4 text-center position-relative" style={{
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--gradient)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-white">
                    <i className="fas fa-search display-1 mb-3" style={{
                      animation: 'pulse 2s infinite'
                    }}></i>
                    <h4 className="text-white mb-3">Searching for opportunities...</h4>
                    
                    {/* Changing Thoughts */}
                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                      <div className="bg-white rounded-pill px-4 py-2 shadow">
                        <span className="text-dark fw-medium">
                          {thoughts[currentThought]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="position-absolute top-0 start-0 translate-middle">
                  <div className="bg-white rounded-3 p-3 shadow-sm d-flex align-items-center">
                    <i className="fas fa-briefcase text-primary me-2"></i>
                    <strong>500+ Jobs</strong>
                  </div>
                </div>
                
                <div className="position-absolute top-0 end-0 translate-middle-y">
                  <div className="bg-white rounded-3 p-3 shadow-sm d-flex align-items-center">
                    <i className="fas fa-users text-success me-2"></i>
                    <strong>Top Companies</strong>
                  </div>
                </div>
                
                <div className="position-absolute bottom-0 start-0 translate-middle-y">
                  <div className="bg-white rounded-3 p-3 shadow-sm d-flex align-items-center">
                    <i className="fas fa-chart-line text-warning me-2"></i>
                    <strong>Career Growth</strong>
                  </div>
                </div>
                
                <div className="position-absolute bottom-0 end-0 translate-middle">
                  <div className="bg-white rounded-3 p-3 shadow-sm d-flex align-items-center">
                    <i className="fas fa-clock text-info me-2"></i>
                    <strong>Quick Apply</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="gradient-text fw-bold mb-3">Why Choose FOB?</h2>
            <p className="lead text-muted">Everything you need to accelerate your career</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="gradient-bg rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                  width: '80px',
                  height: '80px'
                }}>
                  <i className="fas fa-rocket text-white fs-2"></i>
                </div>
                <h4 className="fw-bold mb-3">Fast & Easy</h4>
                <p className="text-muted">Apply to multiple jobs with just one click. Our smart matching algorithm connects you with relevant opportunities.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="gradient-bg rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                  width: '80px',
                  height: '80px'
                }}>
                  <i className="fas fa-shield-alt text-white fs-2"></i>
                </div>
                <h4 className="fw-bold mb-3">Verified Companies</h4>
                <p className="text-muted">All employers are verified and trusted. Work with confidence knowing you're dealing with legitimate companies.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="gradient-bg rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                  width: '80px',
                  height: '80px'
                }}>
                  <i className="fas fa-chart-bar text-white fs-2"></i>
                </div>
                <h4 className="fw-bold mb-3">Career Growth</h4>
                <p className="text-muted">Track your application progress and get insights on how to improve your profile for better opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;