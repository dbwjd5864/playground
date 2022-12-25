import { NextPage } from 'next';
import React from 'react';

type TodoDeatilsPropsType = {
  params: {
    id: number;
  };
};

const TodoDeatils: NextPage<TodoDeatilsPropsType> = ({ params }) => {
  return <div>{params.id}</div>;
};

export default TodoDeatils;
