import React from 'react';

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Just now';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const handleDropdownClick = (action) => {
    console.log(`${action} clicked for post`);
    // Add your logic here
  };

  return (
    <div className="card border-0 shadow-sm glass-effect mb-4" style={{ borderRadius: '20px' }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-start">
          <div className="gradient-bg rounded-circle d-flex align-items-center justify-content-center me-3" style={{
            width: '50px',
            height: '50px',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            {post.author?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 className="fw-bold mb-1">{post.author?.name || 'Unknown User'}</h6>
                <small className="text-muted">
                  {formatDate(post.createdAt)}
                </small>
              </div>
              
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-secondary rounded-circle" type="button" data-bs-toggle="dropdown">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => handleDropdownClick('save')}>
                      <i className="fas fa-bookmark me-2"></i>Save Post
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleDropdownClick('report')}>
                      <i className="fas fa-flag me-2"></i>Report
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {post.content}
            </p>

            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-outline-gradient btn-sm rounded-pill">
                <i className="fas fa-heart me-1"></i>
                Like
              </button>
              <button className="btn btn-outline-gradient btn-sm rounded-pill">
                <i className="fas fa-comment me-1"></i>
                Comment
              </button>
              <button className="btn btn-outline-gradient btn-sm rounded-pill">
                <i className="fas fa-share me-1"></i>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;