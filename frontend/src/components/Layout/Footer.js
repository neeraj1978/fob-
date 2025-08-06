import React from 'react';

const Footer = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    // You can add actual navigation logic here
    console.log('Footer link clicked');
  };

  return (
    <footer className="gradient-bg text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                G
              </div>
              <h5 className="mb-0">FOB Jobs</h5>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Your trusted partner in finding the perfect career opportunity. Connect, Apply, Succeed.
            </p>
            <div className="d-flex gap-3">
              <button className="btn p-0 text-white-50 fs-5" onClick={handleLinkClick}>
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn p-0 text-white-50 fs-5" onClick={handleLinkClick}>
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn p-0 text-white-50 fs-5" onClick={handleLinkClick}>
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button className="btn p-0 text-white-50 fs-5" onClick={handleLinkClick}>
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
          
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">For Job Seekers</h6>
            <ul className="list-unstyled">
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Browse Jobs</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Career Advice</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Resume Builder</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Salary Guide</button></li>
            </ul>
          </div>
          
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">For Employers</h6>
            <ul className="list-unstyled">
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Post Jobs</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Find Candidates</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Pricing</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Resources</button></li>
            </ul>
          </div>
          
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>About Us</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Contact</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Privacy Policy</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Terms</button></li>
            </ul>
          </div>
          
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Help Center</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Contact Support</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>Report Issue</button></li>
              <li><button className="btn p-0 text-white-50 text-decoration-none border-0 bg-transparent" onClick={handleLinkClick}>FAQ</button></li>
            </ul>
          </div>
        </div>
        
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '2rem 0 1rem' }} />
        <div className="text-center">
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
            &copy; 2024 FOB Jobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;