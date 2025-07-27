import React from 'react';

export default function Header() {
  return (
    <>
      <header className="glass-card shadow-lg sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Vibrant Avatar */}
            <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-400 to-green-400 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white">A</span>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Akhilesh Pratap Singh</h1>
              <p className="text-sm text-blue-500 font-semibold">Web Developer</p>
            </div>
          </div>
          <nav className="space-x-4">
            {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-indigo-500 font-medium transition-colors px-1"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-pink-400 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-100 via-white to-pink-100 py-20 text-center mb-8 overflow-hidden rounded-3xl shadow-xl mx-2">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg animate-fade-in">Akhilesh Pratap Singh</h2>
        <p className="text-2xl md:text-3xl text-indigo-600 font-bold mb-2 animate-fade-in">Web Developer</p>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 animate-fade-in">Crafting modern, responsive, and beautiful web experiences with <span className="text-pink-500 font-semibold">React</span> and <span className="text-green-400 font-semibold">Tailwind CSS</span>. Let’s build something amazing together!</p>
        <a href="#projects" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 via-pink-400 to-green-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">See My Work</a>
      </section>
    </>
  );
} 