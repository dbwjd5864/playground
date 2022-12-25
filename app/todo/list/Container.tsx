import React from 'react';

type ConotaienrPropsType = {
  children: React.ReactNode;
};

const Container = ({ children }: ConotaienrPropsType) => {
  return (
    <div className="border border-sky-100 rounded-lg w-[300px] h-[400px] bg-white/80">
      {children}
    </div>
  );
};

export default Container;
