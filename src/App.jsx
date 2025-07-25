import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-4">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
} 