import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/signup" className="text-white">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;