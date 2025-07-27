import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative font-sans min-h-screen flex flex-col overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-animated-gradient -z-10" />
      {/* Animated Shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-400 animated-shape animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-green-400 animated-shape animate-pulse" />
      {/* Main Content */}
      <Header />
      <main className="max-w-3xl mx-auto px-4 flex-1 w-full">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 