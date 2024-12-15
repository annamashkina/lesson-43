import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserDetails from './UserDetails';

export default function UserList() {
  const { users, loading, error } = useContext(UserContext);

  if (loading) {
    return <p>Завантаження даних...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  return (
    <div>
      <h2>Список користувачів:</h2>
      <ul>
        {users.map((user) => (
          <UserDetails key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
