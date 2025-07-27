import React from 'react';

export default function Footer() {
  return (
    <footer className="glass-card bg-gradient-to-r from-indigo-100 via-pink-100 to-green-100 py-6 text-center text-gray-600 text-sm mt-8 shadow-lg flex flex-col items-center">
      <span className="mb-1">✨</span>
      <span>
        &copy; {new Date().getFullYear()} <span className="text-indigo-500 font-semibold">Akhilesh Pratap Singh</span>. All rights reserved.
      </span>
    </footer>
  );
} 