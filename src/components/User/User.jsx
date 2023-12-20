import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${userid}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userid]);

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      <p>User: {userid}</p>

      {userData && (
        <div>
          <p>Github followers: {userData.followers}</p>
          <img src={userData.avatar_url} alt='Git picture' width={300} />
        </div>
      )}
    </div>
  );
}

export default User;
