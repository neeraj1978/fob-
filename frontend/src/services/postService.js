import api from './api';

export const postService = {
  // ✅ Create a new post
  async createPost(content) {
    try {
      const response = await api.post('/posts', { content });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // ✅ Get all posts (feed)
  async getFeed() {
    try {
      const response = await api.get('/posts');  // ✅ no "/feed"
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // ✅ Get a user's profile and posts
  async getUserPosts(userId) {
    try {
      const response = await api.get(`/profile/${userId}`);  // ✅ calls profile controller
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};
