import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Star, Infinity } from 'lucide-react';
import PeacockFeather from './PeacockFeather';

const FinalMessageSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-divine-blue to-divine-purple relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <PeacockFeather className="absolute top-20 right-10 floating-animation" size={50} />
        <PeacockFeather className="absolute bottom-20 left-10 floating-animation-delayed" size={60} />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
            If Destiny Allows
          </h2>
          <div className="w-24 h-1 bg-divine-golden mx-auto rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-morphism rounded-3xl p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-divine-rose" />
              <Star className="w-8 h-8 text-divine-golden" />
              <Infinity className="w-8 h-8 text-divine-peacock" />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-2xl md:text-3xl font-playfair text-white mb-8 leading-relaxed"
          >
            "If we meet again in this life, it means it will not be a coincidence."
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-divine-cream space-y-6 mb-8"
          >
            <p>
              Everything happens for a reason, and everything is prewritten. Perhaps this message, 
              like all the attempts before it, is part of a larger design we cannot yet see.
            </p>
            
            <p>
              Whether this reaches you or not, whether our paths cross again or remain parallel, 
              I am grateful for the impact you've had on my life, even from a distance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-divine-golden bg-opacity-20 rounded-2xl p-8"
          >
            <p className="text-divine-golden text-xl font-playfair italic mb-4">
              "Until the stars align and bring us together again..."
            </p>
            <p className="text-divine-cream">
              This love letter will remain here, a testament to feelings that are pure, honest, and eternal.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-12"
        >
          <p className="text-divine-cream text-lg font-playfair italic opacity-80">
            With love, hope, and infinite patience,
          </p>
          <p className="text-divine-golden text-xl font-playfair mt-2">
            Someone who believes in divine timing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalMessageSection;