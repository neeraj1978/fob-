import api from './api';

export const userService = {
  async getProfile(userId) {
    try {
      const response = await api.get(`/users/profile/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateProfile(userData) {
    try {
      const response = await api.put('/users/profile', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};