import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Config from './config';

const Home: NextPage = () => {
  return (
    <Config>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-gray-700 font-medium text-[30px]">Todo ✨</h1>
        <nav className="mt-4 flex gap-1">
          <Link
            href={'/todo'}
            className="bg-white border  border-gray-400/80 rounded-lg py-2 px-3 text-gray-700"
          >
            시작하기
          </Link>
          <Link
            href={'/login'}
            className="bg-white border  border-gray-400/80 rounded-lg py-2 px-3 text-gray-700"
          >
            로그인하기
          </Link>
        </nav>
      </div>
    </Config>
  );
};

export default Home;
