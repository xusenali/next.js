// app/error.js
'use client'; // bu **client component** bo'lishi kerak

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Xatolik:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-2">Xatolik yuz berdi!</h2>
      <p className="mb-4">{error?.message || "Noma’lum xatolik"}</p>
      <button
        onClick={() => reset()}
        className="bg-white text-red-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        Qayta urinish
      </button>
    </div>
  );
}
