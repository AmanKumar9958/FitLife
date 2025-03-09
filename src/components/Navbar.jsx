import React from 'react'
import { useState } from 'react'
import { LuDumbbell } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className='w-full dark:bg-gray-900 text-white'>
            <div className='flex items-center justify-between py-8 px-20 h-22'>
                <div className='text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2'>
                    <span><LuDumbbell /></span>
                    <div>
                        <span>Fit</span>
                        <span className='text-[#fb923c]'>Life</span>
                    </div>
                </div>
                {/* Navigation List */}
                <div className='flex items-center gap-4'>
                    <a href='#' className='text-[#fb923c] text-lg font-bold hover:scale-105'>Home</a>
                    <a href='#' className='text-[#fb923c] text-lg font-bold hover:scale-105'>About</a>
                    <a href='#' className='text-[#fb923c] text-lg font-bold hover:scale-105'>Services</a>
                    <a href='#' className='text-[#fb923c] text-lg font-bold hover:scale-105'>Contact</a>
                </div>

                {/* Functionality */}
                <div className='flex items-center gap-8'>
                    {/* Search Icon */}
                    <div className='text-2xl text-black cursor-pointer p-2 rounded-full hover:bg-[#fb923c]'>
                        <CiSearch />
                    </div>

                    {/* Cart Button */}
                    <div className='text-2xl text-black cursor-pointer p-2 rounded-full hover:bg-[#fb923c]'>
                        <CiShoppingCart />
                    </div>
                </div>
                <button onClick={toggleMode} className='px-4 py-2 hover:bg-[#fb923c] border-2 border-[#fb923c] dark:bg-gray-700 rounded-md cursor-pointer'>{darkMode ? '☀' : '🌙'}</button>
            </div>
        </div>
    )
}

export default Navbar