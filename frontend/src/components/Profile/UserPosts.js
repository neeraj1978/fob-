import React from 'react';
import PostList from '../Posts/PostList';

const UserPosts = ({ posts }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="gradient-text fw-bold mb-0">Posts</h4>
        <span className="badge rounded-pill" style={{ 
          background: 'var(--gradient)', 
          color: 'white' 
        }}>
          {posts?.length || 0} posts
        </span>
      </div>

      <PostList posts={posts} />
    </div>
  );
};

export default UserPosts;