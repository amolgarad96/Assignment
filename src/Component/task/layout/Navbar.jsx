"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 py-6 relative">
      <div className="relative flex items-center">

        {/* mobile menu icon here*/}
        <div
          className="md:hidden absolute left-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </div>

        {/* desktop Menu here */}
        <nav className="hidden md:flex justify-center w-full gap-12 text-lg font-semibold text-gray-700">
          <a href="#" className="hover:text-black transition text-[22px]">
            Services
          </a>
          <a href="#" className="hover:text-black transition text-[22px]">
            Stylists
          </a>
          <a href="#" className="hover:text-black transition text-[22px]">
            Join Our Team
          </a>
          <a href="#" className="hover:text-black transition text-[22px]">
            Contacts
          </a>
        </nav>
      </div>

      {/* for mobile: when user click on cross icon it will close 
      here i have added onclick on parent instead each item to avoid event bubbling
       */}
  
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-black"
          >
            ✕
          </button>
        </div>

        {/* Menu Items for smaller devices*/}
        <div className="flex flex-col gap-8 px-8 text-lg font-semibold text-gray-800"
          onClick={(e) => {
            console.log("e.target.tagName::", e.target.tagName)
            if (e.target.tagName === "A") {
              setIsOpen(false);
            }
          }}
        >
          <a href="#" >Services</a>
          <a href="#" >Stylists</a>
          <a href="#" >Join Our Team</a>
          <a href="#" >Contacts</a>
        </div>
      </div>
    </div>
  );
}