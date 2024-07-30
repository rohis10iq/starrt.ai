/* eslint-disable no-unused-vars */
import React from 'react';

const NavBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">unnamed</div>
        <div className="flex space-x-4">
          <a href="#features" className="hover:text-gray-700">Features</a>
          <a href="#about" className="hover:text-gray-700">About</a>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
        </div>
        <div className="space-x-4">
          <a href="#signup" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">Sign Up</a>
          <a href="#login" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-200">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
