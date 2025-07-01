// app/loading.js
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-2 animate-pulse">
        <p className="text-2xl font-semibold">Yuklanmoqda...</p>
        <div className="h-1 w-40 bg-blue-500 rounded mx-auto"></div>
      </div>
    </div>
  );
}
