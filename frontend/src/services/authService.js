import api from './api';

export const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async register(name, email, password, bio) {
    try {
      const response = await api.post('/auth/register', { 
        name, 
        email, 
        password, 
        bio 
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCurrentUser(token) {
    try {
      const response = await api.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};