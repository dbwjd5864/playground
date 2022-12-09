import { rest } from 'msw';
import { LoginInfo, Todo, TodosInfo, User } from './types';

const todos: string[] = [];

export const handlers = [
  rest.post<User>('/login', (req, res, ctx) => {
    const { email } = req.body;
    return res(
      ctx.status(200),
      ctx.json<LoginInfo>({
        accessToken: '',
        user: {
          id: 1,
          email,
        },
      })
    );
  }),

  // 할일 목록
  rest.get('/todo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<TodosInfo>({
        todos,
      })
    );
  }),

  // 할일 추가
  rest.post<Todo>('/todo', (req, res, ctx) => {
    const { title } = req.body;
    todos.push(title);

    return res(ctx.status(201));
  }),
];
