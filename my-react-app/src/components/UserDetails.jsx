import React from 'react';

export default function UserDetails({ user }) {
  return (
    <li>
      <strong>{user.name}</strong>, email: {user.email}
    </li>
  );
}
