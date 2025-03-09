import React from 'react';
import { LuDumbbell } from "react-icons/lu";
import { motion } from 'framer-motion';

const EquipCard = () => {
    const data = [
        {
            logo: <LuDumbbell />,
            title: "Yoga Equipment",
            description: "Premium mats, blocks, and straps for perfect alignment"
        },
        {
            logo: <LuDumbbell />,
            title: "Strength Training",
            description: "Dumbbells, kettlebells, and resistance bands"
        },
        {
            logo: <LuDumbbell />,
            title: "Gym Apparel",
            description: "Performance wear for maximum comfort"
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        What We Offer
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                        Premium fitness solutions for every level
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((eachData, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-orange-100 dark:bg-gray-700 rounded-full">
                                    <LuDumbbell className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                                    {eachData.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {eachData.description}
                                </p>
                                
                                <button className="mt-4 px-6 py-2 text-orange-600 dark:text-orange-400 hover:text-white rounded-full border border-orange-500 hover:bg-orange-500 transition-colors">
                                    Explore
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center mt-12"
                >
                    <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                        View All Categories
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default EquipCard;