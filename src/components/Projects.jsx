import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS to showcase my work and skills.',
    link: '#',
    icon: '🌐',
    tech: ['React', 'Tailwind'],
  },
  {
    title: 'Weather App',
    description: 'A simple weather application that fetches real-time weather data using a public API.',
    link: '#',
    icon: '☀️',
    tech: ['React', 'API'],
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to manage daily tasks with a clean and intuitive UI.',
    link: '#',
    icon: '✅',
    tech: ['React'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 fade-in">
      <h2 className="text-2xl font-bold mb-8 text-center text-indigo-600 tracking-tight drop-shadow-lg">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card border-t-4 border-indigo-400 flex flex-col items-start shadow-xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-pink-400 relative overflow-hidden"
          >
            <span className="text-4xl mb-2 drop-shadow-lg">{project.icon}</span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex gap-2 mb-2">
              {project.tech && project.tech.map((t) => (
                <span key={t} className="bg-gradient-to-r from-indigo-400 to-pink-400 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">{t}</span>
              ))}
            </div>
            <a href={project.link} className="text-indigo-600 hover:text-pink-500 hover:underline font-semibold mt-auto transition-colors" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
} 