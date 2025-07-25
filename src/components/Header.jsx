import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Akhilesh Pratap Singh</h1>
          <p className="text-sm text-gray-600">Web Developer</p>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#resume" className="text-gray-700 hover:text-blue-600">Resume</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
} 