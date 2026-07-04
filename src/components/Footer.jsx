import React from 'react';
import { Wind, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coastal-deep py-12 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Wind className="h-8 w-8 text-coastal-water" />
            <span className="font-bold text-2xl tracking-tight text-white">
              Arthurito
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-coastal-water transition-colors">Inicio</a>
            <a href="#about" className="hover:text-coastal-water transition-colors">El Robot</a>
            <a href="#gallery" className="hover:text-coastal-water transition-colors">Galería</a>
            <a href="#video" className="hover:text-coastal-water transition-colors">Video</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Proyecto Arthurito. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Hecho con <Heart size={16} className="text-coastal-accent" /> para el planeta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
