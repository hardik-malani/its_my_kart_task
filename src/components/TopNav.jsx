import React from "react";
import { FaMapMarker, FaTruck, FaUser, FaShoppingBag } from "react-icons/fa";
import { Tooltip, Button } from "@material-tailwind/react";

export default function TopNav() {
  return (
    <div className="border-b-2 border-gray-200 w-screen py-1 lg:flex justify-between hidden">
      <div>
        <div className="text-gray-500 text-xs font-sans ml-10 tracking-wider mb-2 mt-1">
        <Tooltip
        className="border-2 border-black text-xs ml-10 opacity-0 bg-white p-1"
          content="Welcome to It's My Kart Store"
          placement="bottom-end"
        >
          <button>
          Welcome to It's My Kart Store
          </button>
        </Tooltip>
        </div>
      </div>
      <div className="flex flex-row space-x-4 mr-5 text-gray-500">
        <Tooltip
        className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
          content="Store"
          placement="bottom-end"
        >
          <button className="flex flex-row px-2 space-x-2 border-r-2 border-gray-400 text-sm">
          <FaMapMarker className="mt-1" />
          <h2>Store Locator</h2>
          </button>
          </Tooltip>
          <Tooltip
        className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
          content="Track Your Order"
          placement="bottom-end"
        >
        <button className="flex flex-row px-2 space-x-2 border-r-2 border-gray-400 text-sm">
          <FaTruck className="mt-1" />
          <h2>Track Your Order</h2>
        </button>
        </Tooltip>

        <Tooltip
        className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
          content="Shop"
          placement="bottom-end"
        >
        <button className="flex flex-row px-2 space-x-2 border-r-2 border-gray-400 text-sm">
          <FaShoppingBag className="mt-1" />
          <h2>Shop</h2>
        </button>
        </Tooltip>
        <Tooltip
        className="border-2 border-black text-xs -mt-2 ml-1 opacity-0 bg-white p-1"
          content="My Account"
          placement="bottom-end"
        >
        <div className="flex flex-row space-x-2">
          <FaUser className="mt-1" />
          <h2>My Account</h2>
        </div>
        </Tooltip>
      </div>
    </div>
  );
}
