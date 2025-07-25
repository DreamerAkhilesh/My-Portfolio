import React from 'react';

export default function Header() {
  return (
    <>
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-purple-100 py-20 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Akhilesh Pratap Singh</h2>
        <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-2">Web Developer</p>
        <p className="text-gray-700 max-w-xl mx-auto">Crafting modern, responsive, and beautiful web experiences with React and Tailwind CSS. Let’s build something amazing together!</p>
      </section>
    </>
  );
} 