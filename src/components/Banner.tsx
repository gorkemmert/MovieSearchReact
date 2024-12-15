import React from 'react';

const Banner = ()  => {
  return (
    <div className="relative w-full h-[400px]  bg-cover flex items-center" style={{
        backgroundImage: `url('https://r.resimlink.com/cr-Jv.jpg')`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
      }}>
      <div className="absolute inset-0 bg-black opacity-30 "></div>
      <div className="relative z-10 max-w-[1240px] mx-auto px-4">
        <h2 className="text-white text-sm uppercase mb-2">Your Favorite Movies Are Waiting For You</h2>
        <h1 className="text-white text-4xl font-bold mb-4">Find Your Perfect Movie</h1>
        
      </div>
    </div>
  );
};

export default Banner;