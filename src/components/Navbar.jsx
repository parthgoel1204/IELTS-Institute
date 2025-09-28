import React from 'react';
import logo from '../public/logo.png'; 
const Navbar = () => {
    return (
        <nav className="bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <a href="/" > 
                <img src={logo} alt="Logo" className="h-20 w-auto"/>  
              </a>
            </div>
            <div>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">About</a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;
