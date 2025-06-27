import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import AttemptsSection from './components/AttemptsSection';
import DivineConnectionSection from './components/DivineConnectionSection';
import FinalMessageSection from './components/FinalMessageSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <StorySection />
          <AttemptsSection />
          <DivineConnectionSection />
          <FinalMessageSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;