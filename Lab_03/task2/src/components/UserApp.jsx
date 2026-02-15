import React, { useState } from 'react';
import UserProfile from './UserProfile';

const UserApp = () => {
  const [id, setId] = useState(1);

  const getRandomId = () => Math.floor(Math.random() * 10) + 1;
  return (
    <div>
      <h1>Lab 3.2: User Data Fetcher</h1>
      <button onClick={() => setId(1)}>User 1</button>
      <button onClick={() => setId(2)}>User 2</button>
      <button onClick={() => setId(getRandomId())}>Random User</button>
      
      <hr />
      <UserProfile userId={id} />
    </div>
  );
};

export default UserApp;