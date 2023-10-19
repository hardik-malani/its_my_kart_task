import React from 'react';

export default function Heroimg() {
    
  return (
    <div className="w-screen flex bg-gray-200 rounded-lg">
      <div className="flex flex-col lg:w-[80%] items-center justify-center">
        <span className="text-center md:text-3xl font-mono">
          Buy This <br />Smartwatch
        </span>
        <button className="bg-[#fed700] w-28 p-2 rounded-lg hover:text-white">
          Buy Now
        </button>
      </div>
      <img
        src="/homepage-img.png"
        className="w-auto transform transition-transform ease-in duration-7000 translate-x-0"
        alt=""
      />
    </div>
  );
}

