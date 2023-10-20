import React from "react";
import { FaTelegram } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className="w-screen bg-[#fed700] lg:flex justify-evenly p-2 hidden">
      <div className="w-[50%] flex flex-row space-x-9 py-2">
        <div className="flex space-x-4">
          <FaTelegram size={30}></FaTelegram>
          <span className="text-xl">Sign Up To Newsletter</span>
        </div>
        <div>
          <span>...and receive &nbsp;</span>
          <span className="font-semibold">$20 coupon for first shopping</span>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex border rounded-3xl w-[80%]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-[80%] rounded-l-3xl p-2 px-4 focus:outline-none focus:border-none"
          />
          <button className="bg-gray-800 w-[20%] rounded-e-3xl text-white hover:bg-gray-900 ease-in-300">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
