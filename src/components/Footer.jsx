import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Yuvika Jindal
            </h3>
            <p className="text-gray-600">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Code size={16} className="text-blue-500" />
            <span>fueled by</span>
            <Coffee size={16} className="text-yellow-600" />
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Yuvika Jindal. All rights reserved. | Designed & Developed with modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;