import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Calendar, Heart } from 'lucide-react';
import StorySection from './StorySection';
import img1 from '../1.jpg';
import img2 from '../2.jpg';
import img3 from '../3.jpg';
import img4 from '../4.jpg';
import img5 from '../5.jpg';

const images = [img1, img2, img3, img4, img5];

const AttemptsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showStoryModal, setShowStoryModal] = React.useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-divine-cream relative">
      {/* Modal for Wattpad Story */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowStoryModal(false)}
            >
              &times;
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Story part ${idx + 1}`}
                  className="w-full h-32 object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.open(img, '_blank')}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-divine-blue mb-6">
            Paths I Tried to Take
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every attempt was a bridge I hoped would reach your heart
          </p>
          <div className="w-24 h-1 bg-divine-rose mx-auto rounded mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Wattpad Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 divine-shadow relative overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-divine-rose opacity-10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-divine-rose p-3 rounded-2xl mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair text-divine-blue">Wattpad Story</h3>
                  <p className="text-gray-500">Digital Literature</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-divine-rose to-pink-400 rounded-2xl p-6 mb-6 text-white">
                <h4 className="text-xl font-bold mb-2">"Last Words"</h4>
                <p className="opacity-90">A story written with you in mind, hoping the universe would guide you to it</p>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Published: January 1, 2025</span>
              </div>
              
              <p className="text-gray-700 italic">
                "I wrote this story hoping you would find it, but somehow it never reached you..."
              </p>
              
              <div className="mt-6 p-4 bg-divine-cream rounded-xl">
                <p className="text-sm text-divine-blue font-medium">
                  Every chapter, every word was crafted thinking of you
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  className="bg-divine-rose hover:bg-pink-600 text-white py-2 px-6 rounded-xl font-semibold transition-colors duration-300 shadow"
                  onClick={() => setShowStoryModal(true)}
                >
                  View Wattpad Story & Photos
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Game Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 divine-shadow relative overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-divine-purple opacity-10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-divine-purple p-3 rounded-2xl mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair text-divine-blue">Special Game</h3>
                  <p className="text-gray-500">Interactive Experience</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-divine-purple to-indigo-400 rounded-2xl p-6 mb-6 text-white">
                <h4 className="text-xl font-bold mb-2">A Game Made for You</h4>
                <p className="opacity-90">Every level, every element designed with you in my thoughts</p>
              </div>
              
              <p className="text-gray-700 mb-6">
                I created this interactive experience as another unique way to express my feelings, 
                hoping it would be something special that would make you smile.
              </p>
              
              <button
                className="w-full bg-divine-purple hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
                onClick={() => window.open('https://phals-ridesnbites.vercel.app/', '_blank')}
              >
                Experience the Game
              </button>
              
              <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                <p className="text-sm text-divine-purple font-medium text-center">
                  "Every pixel placed with love"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 font-playfair italic">
            "Multiple paths, one destination - your heart"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AttemptsSection;