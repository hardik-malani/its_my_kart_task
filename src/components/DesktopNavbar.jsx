import React, { useState } from "react";
import { FaBars, FaUser, FaShoppingBag } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPerson, IoMdCart } from "react-icons/io";
import { Tooltip, Button } from "@material-tailwind/react";

export default function DesktopNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const techItems = [
    "All Categories",
    "Smartphone",
    "Laptop",
    "Tablet",
    "Headphones",
    "Smartwatch",
    "Bluetooth Speaker",
  ];

  const [showOption, setShowOption] = useState(techItems[0]);
  const [iconRotation, setIconRotation] = useState(0);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setIconRotation(iconRotation + 180); // Rotate by 180 degrees
  };

  const iconStyle = {
    transform: `rotate(${iconRotation}deg)`,
    transition: "transform 0.3s ease",
  };

  return (
    <div className="py-4 px-3 w-screen lg:flex flex-col hidden">
      <div className="flex flex-row justify-evenly">
        <span className="text-3xl font-semibold ml-5 mt-1">It's My Kart</span>
        <div className="flex flex-row space-x-5">
          <button className="my-2 mx-2 hover:cursor-pointer">
            <FaBars size={20} />
          </button>
          <div className="w-[40rem] mt-1 border-2 border-[#fed700] rounded-3xl flex flex-row">
            <input
              type="text"
              className="w-[24rem] ml-2 border-none px-3 focus:outline-none focus:border-none my-2"
              placeholder="Search..."
            />
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2"
            >
              <span className="text-base relative w-36">{showOption}</span>
              <AiOutlineCaretDown style={iconStyle}></AiOutlineCaretDown>
              {showDropdown && (
                <div className="absolute top-[100px] right-[22vw] bg-white p-2 border-2 border-black rounded-sm z-10 transform -translate-x-1/2 w-40">
                  <ul>
                    {techItems.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer p-2 hover:bg-blue-500"
                        onClick={() => setShowOption(techItems[index])}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
            <div className="bg-[#fed700] w-10 ml-[37px] rounded-r-3xl flex justify-center items-center">
              <button>
                <AiOutlineSearch></AiOutlineSearch>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row space-x-8 mr-5 mt-1">
            <Tooltip
              className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
              content="Wishlist"
              placement="bottom-end"
            >
              <button className="flex flex-row px-2 space-x-2 mt-3  text-sm">
                <FaRegHeart size={25} />
              </button>
            </Tooltip>
            <Tooltip
              className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
              content="My Account"
              placement="bottom-end"
            >
              <button className="flex flex-row px-2 space-x-2 mt-3  text-sm">
                <IoMdPerson size={25} />
              </button>
            </Tooltip>
            <div className="flex">
            <Tooltip
              className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
              content="Cart"
              placement="bottom-end"
            >
              <button className="flex flex-row px-2 space-x-2 mt-3  text-sm">
                <IoMdCart size={25} />
              </button>
            </Tooltip>
            <span className="mt-3">$0.00</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
