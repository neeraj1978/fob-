import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../services/userService';
import UserProfile from '../components/Profile/UserProfile';

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      const data = await userService.getProfile(id);
      setProfile(data);
    } catch (err) {
      setError('Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" style={{ color: 'var(--primary-pink)' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <UserProfile profile={profile} />
    </div>
  );
};

export default ProfilePage;