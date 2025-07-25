import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS to showcase my work and skills.',
    link: '#',
    icon: '🌐',
  },
  {
    title: 'Weather App',
    description: 'A simple weather application that fetches real-time weather data using a public API.',
    link: '#',
    icon: '☀️',
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to manage daily tasks with a clean and intuitive UI.',
    link: '#',
    icon: '✅',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 fade-in">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600 flex flex-col items-start hover:bg-blue-50"
          >
            <span className="text-3xl mb-2">{project.icon}</span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline font-semibold mt-auto" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
} 