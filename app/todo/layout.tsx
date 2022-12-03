import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-2">Todo List</h3>
      {children}
    </div>
  );
};

export default layout;
