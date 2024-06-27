// src/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ profileId }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        const response = await axios.post(`/api/profile/${profileId}/view`);
        setViews(response.data.views);
      } catch (error) {
        console.error('Error incrementing view count', error);
      }
    };

    incrementViewCount();
  }, [profileId]);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Profile ID: {profileId}</p>
      <p>Views: {views}</p>
    </div>
  );
};

export default Profile;
