// app/not-found.js
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Kechirasiz, bu sahifa topilmadi.</p>
        <a href="/" className="text-blue-400 underline hover:text-blue-600 transition">
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
}
