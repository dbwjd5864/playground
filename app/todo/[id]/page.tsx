import { NextPage } from 'next';
import React from 'react';

const page: NextPage = ({ params }: { params: { id: number } }) => {
  return <div>{params.id}</div>;
};

export default page;
