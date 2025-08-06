import React, { useState, useEffect } from 'react';
import { postService } from '../services/postService';
import CreatePost from '../components/Posts/CreatePost';
import PostList from '../components/Posts/PostList';

const JobsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await postService.getFeed();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError('Failed to fetch posts. Make sure you are logged in and the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h1 className="gradient-text fw-bold mb-3">Job Feed</h1>
            <p className="lead text-muted">Discover and share job opportunities</p>
          </div>

          <CreatePost onPostCreated={handlePostCreated} />

          {error && (
            <div className="alert alert-danger mt-4" role="alert">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center mt-5">
              <div className="spinner-border" style={{ color: 'var(--primary-pink)' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading posts...</p>
            </div>
          ) : (
            <PostList posts={posts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
