import React from 'react';
import { motion } from 'framer-motion';
import PeacockFeather from './PeacockFeather';
import FloatingParticles from './FloatingParticles';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden divine-gradient">
      <FloatingParticles />
      
      {/* Background peacock feathers */}
      <div className="absolute inset-0 opacity-20">
        <PeacockFeather className="absolute top-10 left-10 floating-animation" size={60} />
        <PeacockFeather className="absolute top-20 right-20 floating-animation-delayed" size={80} />
        <PeacockFeather className="absolute bottom-20 left-1/4 floating-animation" size={50} />
        <PeacockFeather className="absolute bottom-10 right-10 floating-animation-delayed" size={70} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 text-shadow"
        >
          A Message That Never Reached You
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-divine-cream mb-8 font-light"
        >
          Sometimes the most beautiful words find their way through different paths
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="glass-morphism rounded-full px-8 py-4 inline-block"
        >
          <p className="text-white font-inter text-lg italic">
            "If souls recognize each other, this is where our story begins..."
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-divine-golden hover:bg-divine-saffron text-divine-blue px-8 py-3 rounded-full font-semibold transition-all duration-300 pulse-glow"
          >
            Read Our Story
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;