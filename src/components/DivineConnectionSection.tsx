import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Mandala from './Mandala';
import LotusFlower from './LotusFlower';

const DivineConnectionSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-divine-cream to-divine-blue relative overflow-hidden">
      {/* Background mandalas */}
      <div className="absolute inset-0">
        <Mandala className="absolute top-10 left-10 opacity-20" size={150} animate />
        <Mandala className="absolute bottom-20 right-20 opacity-20" size={200} animate />
        <Mandala className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" size={400} animate />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
            When Souls Recognize Each Other
          </h2>
          <div className="w-24 h-1 bg-divine-golden mx-auto rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-morphism rounded-3xl p-8 md:p-12 text-center relative"
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <LotusFlower size={60} />
          </div>
          
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-playfair text-white italic mb-8 leading-relaxed"
          >
            "It feels like my soul knows your soul"
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-divine-cream space-y-6"
          >
            <p>
              In the vast tapestry of existence, some connections transcend the physical realm. 
              They speak of ancient bonds, of souls that have danced together across lifetimes.
            </p>
            
            <p>
              When I look at you, I don't just see a person - I see a reflection of something 
              eternal, something that my heart recognizes without explanation.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-divine-golden bg-opacity-20 rounded-2xl p-6 mt-8"
            >
              <p className="text-divine-golden font-semibold text-xl">
                "Some bonds are written in the stars, carved in destiny itself"
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center space-x-4">
            <LotusFlower size={30} className="floating-animation opacity-60" />
            <LotusFlower size={25} className="floating-animation-delayed opacity-60" />
            <LotusFlower size={30} className="floating-animation opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DivineConnectionSection;