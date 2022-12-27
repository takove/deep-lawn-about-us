import React from 'react';

export function HeadSection() {
  return (
    <div className="bg-blue-600 flow-root">
      <div className='my-12 mx-4 flex-col text-center'>
        <h1 className="text-4xl font-bold text-white">About Deep Lawn</h1>
        <p className='text-white m-4 text-lg'>Deep Lawn helps lawn service companies do e-commerce like the tech companies.</p>
        <button className='text-white font-bold text-lg bg-green-600 transition ease-in-out delay-800 hover:scale-105 hover:bg-green-500 duration-150 p-2 px-14 mt-8'>Sign Up</button>
      </div>
    </div>
  );
}
