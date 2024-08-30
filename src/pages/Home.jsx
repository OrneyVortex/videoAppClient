import React from 'react';

const Homepage = () => {
  return (
    <div className='h-screen w-screen flex justify-center bg-slate-300 items-center'>
      <div className='text-2xl'>
        <input
          type="email"
          placeholder='Enter your email here'
          className='block mb-4 p-2 border rounded'
        />
        <input
          type="text"
          placeholder='Enter room code'
          className='block mb-4 p-2 border rounded'
        />
        <button className='block bg-slate-500 text-white p-2 rounded'>
          Enter room
        </button>
      </div>
    </div>
  );
}

export default Homepage;
