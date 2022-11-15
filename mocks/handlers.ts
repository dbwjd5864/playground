import { rest } from 'msw';

export const handlers = [
  rest.get('https://example.com/products/:productId', (req, res, ctx) => {
    console.log(req, res, ctx);
  }),
];
