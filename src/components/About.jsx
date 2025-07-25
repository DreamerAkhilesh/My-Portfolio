import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 fade-in">
      <div className="flex flex-col items-center mb-2">
        <span role="img" aria-label="waving hand" className="text-4xl mb-2">👋</span>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
      </div>
      <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto px-4">
        Hey there! I'm <strong>Akhilesh Pratap Singh</strong>, a web developer from IET Lucknow with a deep passion for crafting intuitive and scalable digital experiences.
        <br /><br />
        I love building full-stack web applications using technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>Django</strong>. From designing elegant frontends to architecting backend systems, I enjoy the entire development journey.
        <br /><br />
        I'm currently working on a real-world <strong>milk delivery system</strong> designed to handle subscriptions, wallet payments, and admin-side controls—something I'm proud to have built from scratch.
        <br /><br />
        Besides development, I actively contribute to the <strong>Training & Placement Cell</strong> of my college, where I handle student coordination and corporate communications.
        <br /><br />
        Always learning. Always building. Let’s connect and create something amazing!
      </p>
    </section>
  );
}
