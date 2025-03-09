import React from 'react';
import { motion } from 'framer-motion';

const Discount = () => {
    return (
        <div className='w-full py-20 bg-gradient-to-r from-orange-50 to-amber-50 relative overflow-hidden'>
            {/* Decorative elements */}
            <div className='absolute -top-20 -left-20 w-48 h-48 bg-orange-100 rounded-full opacity-40' />
            <div className='absolute -bottom-32 -right-32 w-64 h-64 bg-amber-100 rounded-full opacity-40' />
            
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='max-w-6xl mx-auto text-center px-4'
            >
                {/* Headings */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='mb-8'
                >
                    <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
                        GET 20% DISCOUNT
                    </h1>
                    <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
                        On Your First Order!
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed'
                >
                    Ready to transform your workouts? We guarantee the highest quality gear tailored for your fitness journey.
                </motion.p>

                {/* Buttons */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className='flex flex-col sm:flex-row gap-4 justify-center'
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all'
                    >
                        Claim Your Discount →
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-8 py-4 border-2 border-orange-500 text-orange-600 text-lg font-semibold rounded-full hover:bg-orange-50 transition-colors'
                    >
                        Get Updates
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Glowing effect */}
            <div className='absolute inset-0 bg-gradient-radial from-orange-100/40 to-transparent pointer-events-none' />
        </div>
    )
}

export default Discount;