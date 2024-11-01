import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MessageSquare, BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white">
              <Scale className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">LegalChat</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/chat" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    AI Chat
                  </div>
                </Link>
                <Link to="/services" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                  <div className="flex items-center">
                    <Scale className="h-4 w-4 mr-1" />
                    Services
                  </div>
                </Link>
                <Link to="/resources" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Resources
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/chat">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md font-medium">
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;