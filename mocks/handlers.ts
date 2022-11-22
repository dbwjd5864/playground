import { rest } from 'msw';
import { LoginInfo, User } from './types';

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
];
