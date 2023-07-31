import React from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useContext, useState } from 'react';

function Profile({ theme }) {
  const { user, isLoading, logout } = useContext(AuthContext);

  return (
    <>
      <div className={`${theme} bg-skin-fill`}>
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
        Profile
      </div>
    </>
  );
}

export default Profile;
