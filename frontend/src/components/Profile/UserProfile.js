import React from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const UserProfile = ({ profile }) => {
  if (!profile) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" style={{ color: 'var(--primary-pink)' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-4 mb-4">
        <UserInfo user={profile.user} />
      </div>
      <div className="col-lg-8">
        <UserPosts posts={profile.posts} />
      </div>
    </div>
  );
};

export default UserProfile;