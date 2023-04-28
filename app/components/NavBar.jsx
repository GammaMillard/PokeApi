import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className='sticky  flex justify-between px-10 py-4 '>
            <div className="logo"></div>
            <ul className='flex gap-8'>
                <li className='p-2 hover:bg-pink-500 transition-colors duration-300 rounded-lg'><Link href='/pokemons'>Pokemons</Link></li>
                <li className='p-2 hover:bg-pink-500 transition-colors duration-300 rounded-lg'><Link href='/guide'>Guide</Link></li>
                <li className='p-2 hover:bg-pink-500 transition-colors duration-300 rounded-lg'><Link href='/play'>Play</Link></li>
            </ul>
            <div className={`hidden`}>
                <div className='h-px w-full'></div>
                <div className='h-px w-full'></div>
                <div className='h-px w-full'></div>
            </div>
        </nav>
    )
}

export default NavBar