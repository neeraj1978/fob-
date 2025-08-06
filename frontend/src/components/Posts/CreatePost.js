import React, { useState } from 'react';
import { postService } from '../../services/postService';

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setLoading(true);
      setError('');
      const newPost = await postService.createPost(content);
      setContent('');
      onPostCreated(newPost);
    } catch (err) {
      setError('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-sm glass-effect mb-4" style={{ borderRadius: '20px' }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="gradient-bg rounded-circle d-flex align-items-center justify-content-center me-3" style={{
            width: '50px',
            height: '50px',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            <i className="fas fa-plus"></i>
          </div>
          <h5 className="gradient-text fw-bold mb-0">Share a Job Opportunity</h5>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control gradient-border"
              rows="4"
              placeholder="Share a job posting, career advice, or industry insights..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                borderRadius: '15px',
                padding: '15px 20px',
                resize: 'none',
                fontSize: '16px'
              }}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {content.length}/500 characters
            </small>
            <button
              type="submit"
              className="btn btn-gradient px-4"
              disabled={loading || !content.trim()}
              style={{ borderRadius: '25px' }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Posting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane me-2"></i>
                  Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;