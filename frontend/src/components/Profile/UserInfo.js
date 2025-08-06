import React from 'react';
import { useAuth } from '../../context/AuthContext';

const UserInfo = ({ user }) => {
  const { user: currentUser } = useAuth();
  const isOwnProfile = currentUser?.id === user?.id;

  return (
    <div className="card border-0 shadow-sm glass-effect" style={{ borderRadius: '20px' }}>
      <div className="card-body p-4 text-center">
        <div className="gradient-bg rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
          width: '100px',
          height: '100px',
          color: 'white',
          fontSize: '40px',
          fontWeight: 'bold'
        }}>
          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>

        <h4 className="gradient-text fw-bold mb-2">{user?.name || 'Unknown User'}</h4>
        <p className="text-muted mb-3">{user?.email}</p>

        {user?.bio && (
          <div className="mb-4">
            <h6 className="fw-bold mb-2">About</h6>
            <p className="text-muted small">{user.bio}</p>
          </div>
        )}

        <div className="row text-center mb-4">
          <div className="col-4">
            <div className="gradient-text fw-bold fs-5">127</div>
            <small className="text-muted">Posts</small>
          </div>
          <div className="col-4">
            <div className="gradient-text fw-bold fs-5">1.2K</div>
            <small className="text-muted">Followers</small>
          </div>
          <div className="col-4">
            <div className="gradient-text fw-bold fs-5">890</div>
            <small className="text-muted">Following</small>
          </div>
        </div>

        {isOwnProfile ? (
          <button className="btn btn-gradient w-100" style={{ borderRadius: '25px' }}>
            <i className="fas fa-edit me-2"></i>
            Edit Profile
          </button>
        ) : (
          <div className="d-grid gap-2">
            <button className="btn btn-gradient" style={{ borderRadius: '25px' }}>
              <i className="fas fa-user-plus me-2"></i>
              Follow
            </button>
            <button className="btn btn-outline-gradient" style={{ borderRadius: '25px' }}>
              <i className="fas fa-envelope me-2"></i>
              Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;