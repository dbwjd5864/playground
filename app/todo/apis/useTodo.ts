import axios from 'axios';
import { useQuery } from 'react-query';
import { Todo } from '../page.interface';

const getTodoById = async (id: number): Promise<Todo> => {
  const { data } = await axios.get(`todo/${id}`);
  return data;
};

export const useTodoById = (todoId: number) => {
  return useQuery(['todo', todoId], () => getTodoById(todoId), {
    enabled: !!todoId,
  });
};
