/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    "Personalized Recommendations",
    "Detailed Roadmaps",
    "Expert Guidance",
    "Track Your Progress",
  ];

  return (
    <section id="features" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{feature}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
