import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";

export default function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="h-[50px] sticky top-0 w-screen bg-[#fed700] lg:hidden flex justify-between">
      <div>
        <button className="my-2 mx-2 hover:cursor-pointer">
          <FaBars size={30} />
        </button>
        <span className="md:text-2xl font-semibold ml-2 md:ml-5 relative bottom-1">
          It's My Kart
        </span>
      </div>
      <div className="space-x-10 my-3 mx-2">
        <button onClick={toggleSearch}>
        {isSearchOpen ? <RiCloseLine size={30} /> : <AiOutlineSearch size={30}></AiOutlineSearch>}
        </button>
        <button>
          <BsPeople size={25}></BsPeople>
        </button>
        <button>
          <HiShoppingBag size={25}></HiShoppingBag>
        </button>
      </div>
      {isSearchOpen && (
        <div className='fixed top-[50px] left-0 w-full bg-white p-2 shadow-xl py-3 z-10'>
          <div className='flex'>
            <AiOutlineSearch size={20} />
            <input type="text" className='w-full ml-2 border-none px-3 focus:outline-none focus:border-none' placeholder="Search..." />
          </div>
        </div>
      )}
    </div>
  );
}
