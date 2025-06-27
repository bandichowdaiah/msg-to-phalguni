import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LotusFlower from './LotusFlower';

const StorySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-divine-cream to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <LotusFlower className="absolute top-20 left-10 floating-animation" size={40} />
        <LotusFlower className="absolute top-40 right-20 floating-animation-delayed" size={50} />
        <LotusFlower className="absolute bottom-20 left-1/4 floating-animation" size={35} />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-divine-blue mb-6">
            Words from the Heart
          </h2>
          <div className="w-24 h-1 bg-divine-golden mx-auto rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 divine-shadow relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <LotusFlower size={48} className="opacity-80" />
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl font-playfair text-divine-blue italic text-center mb-8">
              "Hi Phalguni..."
            </p>
            
            <p className="text-base md:text-lg">
              I don't know if you'll read this, but if you are, I believe I liked and loved the right girl in my life. 
              You are amazing and perfect. You've helped me indirectly without even knowing it, and I want to thank you for that.
            </p>
            
            <p className="text-base md:text-lg">
              I can't love you the way your parents do, but I will love you the way you wanted to be loved. 
              When you said life is short and not to waste time loving people who don't love you, I wanted to tell you 
              that I want to spend this short life with you.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-divine-cream to-pink-50 p-6 rounded-2xl border-l-4 border-divine-rose"
            >
              <p className="text-base md:text-lg font-medium text-divine-blue">
                I didn't approach you because I feel like I will become a burden after some days and you will get bored 
                and forced to betray me, that's why I decided not to approach you.
              </p>
            </motion.div>
            
            <p className="text-base md:text-lg">
              I am saying this in this way because I know you don't like me, and I don't want to disturb you, 
              but I wanted to share this with you no matter what. I feel like you are made for me, and it feels 
              like my soul knows your soul.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center pt-6"
            >
              <p className="text-lg md:text-xl font-playfair text-divine-purple italic">
                "If that is true, we will meet again in this life."
              </p>
              <p className="text-base text-gray-600 mt-4">
                Everything happens for a reason, and everything is prewritten.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;