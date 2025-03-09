import React from 'react';
import { LuDumbbell } from "react-icons/lu";
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    const footerLinks = [
        { title: "Important Links", links: ["Home", "About", "Services", "Login"] },
        { title: "Company Links", links: ["Our Services", "Contact", "Privacy Policy"] },
        { title: "Resources", links: ["Blog", "FAQs", "Guides", "Support"] }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-lg">
                                <LuDumbbell className="text-3xl text-white animate-pulse" />
                            </div>
                            <h2 className="text-3xl font-bold">
                                <span className="text-gray-100">Fit</span>
                                <span className="text-orange-400">Life</span>
                            </h2>
                        </div>
                        <p className="text-gray-400">Transform your life with our fitness solutions</p>
                        
                        <div className="flex gap-4 mt-4">
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors"
                                href="#"
                            >
                                <FiFacebook className="text-xl" />
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors"
                                href="#"
                            >
                                <FiTwitter className="text-xl" />
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors"
                                href="#"
                            >
                                <FiInstagram className="text-xl" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    {footerLinks.map((section, index) => (
                        <motion.div 
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-lg font-bold text-gray-100 uppercase tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <motion.li 
                                        key={link}
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                                    >
                                        {link}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-8" />

                {/* Copyright */}
                <div className="text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} FitLife. All rights reserved. 
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-orange-400 transition-colors">
                            Terms of Service
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;