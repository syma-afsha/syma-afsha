// src/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ profileId }) => {
  const [views, setViews] = useState(0);
  useEffect(() => {
    const incrementViewCount = async () => {
        try {
            await axios.post(`/api/profile/footer/view?timestamp=${new Date().getTime()}`);
        } catch (error) {
            console.error('Error incrementing view count', error);
        }
    };

    incrementViewCount();
}, []);




  return (
    <div>
      
      <p>Views: {views}</p>
    </div>
  );
};

export default Profile;
