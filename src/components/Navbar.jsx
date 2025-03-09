import React, { useState } from 'react'
import { LuDumbbell } from "react-icons/lu";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const navItems = ['Home', 'About', 'Services', 'Contact']
    
    const toggleMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark');
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className='w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 fixed top-0 z-50 shadow-sm'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className='flex items-center gap-2 group'
                    >
                        <div className='p-2 bg-gradient-to-tr from-orange-400 to-amber-500 rounded-lg'>
                            <LuDumbbell className='text-white text-xl' />
                        </div>
                        <span className='text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent'>
                            FitLife
                        </span>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className='hidden md:flex items-center gap-8'>
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                href='#'
                                className='relative text-gray-600 dark:text-gray-300 hover:text-orange-500 font-medium px-2 py-1 transition-colors'
                            >
                                {item}
                                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full' />
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center gap-6'>
                        {/* Search */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-900/20 cursor-pointer'
                        >
                            <CiSearch className='text-xl text-gray-600 dark:text-gray-300' />
                        </motion.div>

                        {/* Cart */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-900/20 cursor-pointer relative'
                        >
                            <CiShoppingCart className='text-xl text-gray-600 dark:text-gray-300' />
                            <span className='absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                                3
                            </span>
                        </motion.div>

                        {/* Dark Mode Toggle */}
                        <motion.button 
                            onClick={toggleMode}
                            whileHover={{ scale: 1.05 }}
                            className='w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors cursor-pointer'
                        >
                            <motion.div 
                                className='w-4 h-4 bg-white rounded-full shadow-md'
                                animate={{ x: darkMode ? 24 : 0 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar