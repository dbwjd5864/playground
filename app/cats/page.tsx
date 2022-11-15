import React from 'react';

const getCats = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    cache: 'no-store', // getServerSideProps
  });
  const data = await res.json();
  console.log(data);

  return data;
};

const page = async () => {
  const images = await getCats();
  console.log(images);
  return <div>test</div>;
};

export default page;
