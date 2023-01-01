'use client';
import { NextPage } from 'next';
import React from 'react';
import { useTodoList } from './apis/useTodoList';
import Container from './list/Container';

const page: NextPage = () => {
  const { isLoading, data } = useTodoList();

  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="flex gap-2">
        <Container>
          <ul>
            <li>밥</li>
            <li>청소</li>
            <li>공부</li>
          </ul>
        </Container>
        <Container>
          <div>Todo를 선택해주시면 자세한 내용을 볼 수 있습니다!</div>
        </Container>
      </div>
    </div>
  );
};

export default page;
