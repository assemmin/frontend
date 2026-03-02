import React, { useState, useEffect } from 'react';
import './App.css';
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

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

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

  if (loading) return <div className="status">Загрузка данных...</div>;
  if (error) return <div className="status error">Произошла ошибка: {error}</div>;

  return (
    <div className="user-card">
      <h3>Профиль пользователя</h3>
      <p><strong>Имя:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Компания:</strong> {user?.company?.name}</p>
    </div>
  );
};
function App() {
  const [currentUserId, setCurrentUserId] = useState(1);

  return (
    <div className="container">
      <h1>Lab 3.2: Data Fetching</h1>
      
      <div className="controls">
        <p>Выберите ID пользователя:</p>
        <button onClick={() => setCurrentUserId(1)}>User 1</button>
        <button onClick={() => setCurrentUserId(2)}>User 2</button>
        <button onClick={() => setCurrentUserId(3)}>User 3</button>
        <button 
          className="refresh-btn" 
          onClick={() => setCurrentUserId(Math.floor(Math.random() * 10) + 1)}
        >
          Случайный пользователь (Refresh)
        </button>
      </div>

      <hr />

      {}
      <UserProfile userId={currentUserId} />
      
      <p className="footer-note">Текущий userId: {currentUserId}</p>
    </div>
  );
}

export default App;