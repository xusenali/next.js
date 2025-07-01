'use client';

import Image from 'next/image';

export const metageneretedate = {
    title: 'Profile',
    description: 'salom'
}

const ProfilePage = () => {
  const user = {
    name: 'Xusen Bozorov',
    email: 'xusen@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
  };

  return (
    <div className="min-h-100 text-white flex items-center justify-center px-4">
      <div className=" p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <Image
          src={user.avatar}
          alt="Foydalanuvchi rasmi"
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
          Profilni tahrirlash
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
