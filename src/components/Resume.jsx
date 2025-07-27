import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 flex justify-center fade-in">
      <div className="glass-card border-l-8 border-pink-400 shadow-xl p-8 max-w-xl w-full text-center relative">
        <h2 className="text-2xl font-bold mb-6 text-pink-500 tracking-tight drop-shadow-lg">Resume</h2>
        <a
          href="/Akhilesh_Pratap_Singh_CV.pdf"
          download
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 via-indigo-400 to-green-400 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-bold text-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Download CV
        </a>
      </div>
    </section>
  );
} 