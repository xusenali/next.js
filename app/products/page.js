'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';

const getTodos = async () => {
  const res = await axios.get('https://dummyjson.com/products');
  return res.data;
};

const Products = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getTodos,
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi!</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mahsulotlar:</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.products.map((product) => (
          <li key={product.id} className="shadow-sm shadow-white text-white rounded-lg p-3 flex flex-col items-center">
            <Image
              src={product?.images[0]}
              alt={product.title}
              width={200}
              height={50}
              className="rounded"
            />
            <h3 className="mt-2 font-semibold text-2xl">{product.title}</h3>
            <p className="text-sm text-gray-300 my-5">{product.price} $</p>
            <button className='w-full border rounded p-3'>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
