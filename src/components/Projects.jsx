import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS to showcase my work and skills.',
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'A simple weather application that fetches real-time weather data using a public API.',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to manage daily tasks with a clean and intuitive UI.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
} 