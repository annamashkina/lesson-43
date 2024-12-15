import React from 'react';
import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';

export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>Додаток з використанням Context API</h1>
        <UserList />
      </div>
    </UserProvider>
  );
}
