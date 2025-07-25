import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Resume</h2>
      <a
        href="/Akhilesh_Pratap_Singh_CV.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Download CV
      </a>
    </section>
  );
} 