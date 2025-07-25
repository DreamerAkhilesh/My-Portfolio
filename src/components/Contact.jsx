import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact</h2>
      <p className="mb-4 text-gray-700">Feel free to reach out to me via email or connect on social media!</p>
      <div className="space-x-4">
        <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
      </div>
    </section>
  );
} 