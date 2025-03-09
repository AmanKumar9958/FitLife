import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Yoga = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative before:absolute before:-inset-4 before:bg-orange-100 dark:before:bg-gray-700 before:rounded-3xl before:rotate-3">
                            <img 
                                src="src/assets/yoga.png" 
                                alt="Yoga Practice" 
                                className="relative z-10 w-full h-[500px] object-contain rounded-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                                The Importance Of
                            </h1>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
                                Self-Care & Wellness
                            </h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                It is a long established fact that a reader will be distracted by readable content of
                                a page when looking at its layout. The point of using proper wellness techniques.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                Discover the perfect balance between mind and body with our curated wellness programs.
                            </p>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            Explore Wellness Programs
                            <FiArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Yoga;