import React, { useState, useEffect, useRef } from 'react';
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
  // Ref to the audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Track if music has started
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handler to start music on first user interaction (scroll, click, or touch)
    const startMusic = () => {
      if (!musicStarted && audioRef.current) {
        console.log('User interaction detected, attempting to play music...');
        audioRef.current.volume = 1;
        audioRef.current.play().then(() => {
          console.log('Music playback started.');
          setMusicStarted(true);
          // Remove all event listeners after successful playback
          window.removeEventListener('scroll', startMusic);
          window.removeEventListener('click', startMusic);
          window.removeEventListener('touchstart', startMusic);
        }).catch((err) => {
          console.log('Music playback failed:', err);
          // Do NOT set musicStarted, so future gestures can try again
        });
      }
    };
    // Add event listeners for scroll, click, and touchstart
    if (!musicStarted) {
      window.addEventListener('scroll', startMusic, { passive: true });
      window.addEventListener('click', startMusic, { passive: true });
      window.addEventListener('touchstart', startMusic, { passive: true });
    }
    // Cleanup
    return () => {
      window.removeEventListener('scroll', startMusic);
      window.removeEventListener('click', startMusic);
      window.removeEventListener('touchstart', startMusic);
    };
  }, [musicStarted]);

  return (
    <div className="min-h-screen">
      {/* Hidden audio element for background music (temporarily visible for debugging) */}
      <audio
        ref={audioRef}
        src={"/background-music.mp3"}
        loop
        // style={{ display: 'none' }} // Remove for debugging
        onError={() => console.log('Audio failed to load!')}
      />
      {/* Loader and main content */}
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