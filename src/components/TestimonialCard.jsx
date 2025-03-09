import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = () => {
    const data = [
        {
            dp: 'src/assets/dp1.jpg',
            name: 'Aman Kumar',
            description: "Top-notch equipment and excellent customer service. My workouts have never been better!",
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            dp: 'src/assets/dp2.jpg',
            name: 'Gopal Kumar',
            description: "The quality of products exceeded my expectations. Fast delivery too!",
            rating: "⭐⭐⭐⭐⭐",
        },
        {
            dp: 'src/assets/dp3.jpg',
            name: 'Rohit Kumar',
            description: "Good service overall, would love to see more variety in future",
            rating: "⭐⭐⭐⭐",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-orange-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        What Our Customers
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Are Saying About Us
                    </h2>
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
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                            
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-100 mb-6">
                                    <img 
                                        src={eachData.dp} 
                                        alt={eachData.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/100';
                                        }}
                                    />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {eachData.name}
                                </h3>
                                
                                <div className="text-amber-500 text-lg mb-4">
                                    {eachData.rating}
                                </div>
                                
                                <p className="text-gray-600 text-center leading-relaxed mb-4">
                                    "{eachData.description}"
                                </p>
                                
                                <svg 
                                    className="w-12 h-12 text-orange-500 opacity-10"
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialCard;