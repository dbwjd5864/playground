import { NextPage } from 'next';
import React from 'react';
import Container from './list/Container';

const page: NextPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Container />
    </div>
  );
};

export default page;
