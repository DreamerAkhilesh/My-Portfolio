import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm mt-8">
      <span>
        &copy; {new Date().getFullYear()} <span className="text-blue-600 font-semibold">Akhilesh Pratap Singh</span>. All rights reserved.
      </span>
    </footer>
  );
} 