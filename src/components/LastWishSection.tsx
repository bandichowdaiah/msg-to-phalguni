import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Heart, Moon } from 'lucide-react';

const LastWishSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Night sky background with stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-divine-blue via-purple-900 to-divine-purple">
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Blurred lights effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-divine-golden rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-divine-rose rounded-full opacity-15 blur-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-divine-peacock rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
            If Nothing Magical Happens…
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
              <Moon className="w-8 h-8 text-divine-golden" />
              <Heart className="w-8 h-8 text-divine-rose" />
              <Star className="w-8 h-8 text-divine-peacock" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-divine-cream space-y-8 leading-relaxed"
          >
            <p className="text-2xl md:text-3xl font-playfair text-white mb-8">
              If nothing magical happens, and if we never meet in this life…
            </p>
            
            <p className="text-xl font-playfair text-divine-golden mb-6">
              Please, I have one last wish:
            </p>
            
            <div className="bg-divine-golden bg-opacity-20 rounded-2xl p-8 mb-8">
              <p className="text-xl md:text-2xl font-playfair text-white mb-4">
                If you ever get married, invite me to your wedding.
              </p>
              <p className="text-lg text-divine-cream">
                I just want to see who the lucky person is who gets to spend their life with someone as amazing as you.
              </p>
            </div>
            
            <p className="text-lg text-divine-cream">
              Don't wonder, "Why should I invite him?" — I know I might mean nothing to you. But you mean so much to me.
            </p>
            
            <div className="bg-divine-rose bg-opacity-10 rounded-2xl p-6 border border-divine-rose border-opacity-30">
              <p className="text-lg text-divine-cream italic">
                I promise I'll come quietly, like a shadow, watch from afar, and leave without a trace.
              </p>
            </div>
            
            <p className="text-xl font-playfair text-divine-golden">
              Just let me be there for that moment, to see you happy.
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
            With a heart full of love and acceptance,
          </p>
          <p className="text-divine-golden text-xl font-playfair mt-2">
            Someone who will always wish you happiness
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LastWishSection; 