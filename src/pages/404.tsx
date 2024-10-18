// pages/404.js
import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for does not exist.</p>
      <Link href="/" passHref>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
