'use client';

import React from 'react';

const login = () => {
  const handleLoginClick = async () => {
    let response = await fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@email.com',
        password: 'test',
      }),
    });

    response = await response.json();
    console.log(response);
  };

  return (
    <div>
      <button type="button" onClick={() => handleLoginClick()}>
        로그인하기
      </button>
    </div>
  );
};

export default login;
