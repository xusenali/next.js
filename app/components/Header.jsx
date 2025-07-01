import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center w-full h-20'>
            <h1 className='text-4xl'>W</h1>
            <ul className='flex items-center gap-15 '>
                <Link href='/'> <li className='cursor-pointer '>Home</li></Link>
                <Link href={'/about'}> <li className='cursor-pointer'>About</li></Link>
                <Link href={'/products'}><li className='cursor-pointer'>Products</li></Link>
                <Link href={'/profile'}> <li className='cursor-pointer'>Profile</li></Link>
            </ul>
            <ul>
                <User />
            </ul>
        </div>
    )
}

export default Header