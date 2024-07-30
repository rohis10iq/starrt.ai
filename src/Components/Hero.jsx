/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-20">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Find Your Path in Tech
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover the best technologies and fields based on your skills, interests, and qualities.
      </motion.p>
      <motion.button
        className="bg-blue-600 text-white px-6 py-2 rounded-full"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default Hero;
