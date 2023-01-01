import axios from 'axios';
import { useQuery } from 'react-query';
import { Todo } from '../page.interface';

const getTodoList = async (): Promise<Todo[]> => {
  const { data } = await axios.get(`todo`);
  return data;
};

export const useTodoList = () => {
  return useQuery('todo', () => getTodoList());
};
