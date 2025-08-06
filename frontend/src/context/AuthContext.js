import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load saved auth state from localStorage
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');

      console.log('🔐 Saved token:', savedToken);
      console.log('👤 Saved user:', savedUser);

      if (
        savedToken &&
        savedUser &&
        savedUser !== 'undefined' &&
        savedUser !== 'null'
      ) {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && Object.keys(parsedUser).length > 0) {
          setToken(savedToken);
          setUser(parsedUser);
        }
      }
    } catch (error) {
      console.error('❌ Error parsing saved user/token:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authService.login(email, password);

      const newToken = response.token || response.data?.token;
      const userData = response.user || response.data?.user || response.data;

      if (!newToken) throw new Error('No token received from server');

      localStorage.setItem('token', newToken);
      if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
      }

      setToken(newToken);
      setUser(userData);

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error:
          error.response?.data?.message ||
          error.message ||
          'Login failed. Please try again.',
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, bio) => {
    try {
      setLoading(true);
      const response = await authService.register(name, email, password, bio);

      const newToken = response.token || response.data?.token;
      const userData = response.user || response.data?.user || response.data;

      if (!newToken) throw new Error('No token received from server');

      localStorage.setItem('token', newToken);
      if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
      }

      setToken(newToken);
      setUser(userData);

      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error:
          error.response?.data?.message ||
          error.message ||
          'Registration failed. Please try again.',
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user && !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
