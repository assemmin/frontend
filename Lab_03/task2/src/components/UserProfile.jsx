import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: abortController.signal }
        );
        if (!response.ok) throw new Error('Failed to fetch user');
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    return () => {
      abortController.abort();
    };
  }, [userId]); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>City:</strong> {user?.address?.city}</p>
    </div>
  );
};

export default UserProfile;