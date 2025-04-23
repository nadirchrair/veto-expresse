// src/features/auth/authAPI.js
export const loginUser = async ({ contact, password }) => {
    const response = await fetch('http://35.181.18.120:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:contact, password }),
    });
  
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Login failed');
    return data; // { token, user }
  };
  