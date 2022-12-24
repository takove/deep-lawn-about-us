import React from 'react';

export function HeadSection() {
  return (
    <div className="bg-indigo-900 flow-root">
      <div className='my-20 mx-20 flex-col text-center'>
        <h1 className=" text-[4rem] italic font-bold text-white">About Deep Lawn</h1>
        <p className='text-white m-4 text-[1.3rem]'>Deep Lawn helps lawn service companies do e-commerce like the tech companies.</p>
        <button className='text-white font-bold text-lg bg-green-600 transition ease-in-out delay-800 hover:scale-105 hover:bg-green-400 duration-150 p-2 px-14 mt-8'>Sign Up</button>
      </div>
    </div>
  );
}
