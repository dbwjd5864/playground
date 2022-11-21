'use client';

import React from 'react';

const login = () => {
  const handleLoginClick = () => {
    fetch('/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        passwword: 'test',
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <button type="button" onClick={handleLoginClick}>
        로그인하기
      </button>
    </div>
  );
};

export default login;
