import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="gradient-bg rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
          width: '80px',
          height: '80px'
        }}>
          <i className="fas fa-inbox text-white fs-2"></i>
        </div>
        <h4 className="gradient-text fw-bold mb-2">No Posts Yet</h4>
        <p className="text-muted">Be the first to share a job opportunity!</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id || post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;