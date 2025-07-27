import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 fade-in flex justify-center">
      <div className="glass-card border-l-8 border-indigo-400 shadow-xl p-8 max-w-2xl w-full relative">
        <div className="flex flex-col items-center mb-2">
          <span role="img" aria-label="waving hand" className="text-5xl mb-2 animate-bounce drop-shadow-lg">👋</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 tracking-tight">About Me</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-center">
          Hey there! I'm <strong className="text-pink-500">Akhilesh Pratap Singh</strong>, a web developer from IET Lucknow with a deep passion for crafting intuitive and scalable digital experiences.
          <br /><br />
          I love building full-stack web applications using technologies like <strong className="text-indigo-500">React</strong>, <strong className="text-pink-400">Tailwind CSS</strong>, <strong className="text-green-400">Node.js</strong>, and <strong className="text-indigo-400">Django</strong>. From designing elegant frontends to architecting backend systems, I enjoy the entire development journey.
          <br /><br />
          I'm currently working on a real-world <strong className="text-green-400">milk delivery system</strong> designed to handle subscriptions, wallet payments, and admin-side controls—something I'm proud to have built from scratch.
          <br /><br />
          Besides development, I actively contribute to the <strong className="text-indigo-500">Training & Placement Cell</strong> of my college, where I handle student coordination and corporate communications.
          <br /><br />
          <span className="font-semibold text-indigo-600">Always learning. Always building. Let’s connect and create something amazing!</span>
        </p>
      </div>
    </section>
  );
}
