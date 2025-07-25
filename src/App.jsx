import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="max-w-3xl mx-auto px-4 flex-1">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 