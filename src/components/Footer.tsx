import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-divine-blue py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-5 h-5 text-divine-rose mr-2" />
          <span className="text-white font-playfair">Made with Divine Love</span>
          <Heart className="w-5 h-5 text-divine-rose ml-2" />
        </div>
        <p className="text-divine-cream text-sm opacity-80">
          A digital love letter written in code and hope
        </p>
        <p className="text-divine-golden text-xs mt-2">
          "Some messages are meant to travel through time and space to find their way home"
        </p>
      </div>
    </footer>
  );
};

export default Footer;