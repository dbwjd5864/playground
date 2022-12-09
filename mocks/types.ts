export type User = {
  email: string;
  password: string;
};

export type LoginInfo = {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
};

export type Todo = {
  title: string;
};

export type TodosInfo = {
  todos: string[];
};
