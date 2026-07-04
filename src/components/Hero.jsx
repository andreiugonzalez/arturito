import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coastal-light">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-coastal-water/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-coastal-sand/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-coastal-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <div className="p-4 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
            <Wind className="w-12 h-12 text-coastal-water" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-coastal-deep tracking-tight mb-6"
        >
          Conoce a <span className="text-coastal-water">Arthurito</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl text-xl md:text-2xl text-gray-600 font-light"
        >
          El robot ecológico impulsado por la fuerza del viento, construido 100% con materiales reciclables.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#about"
            className="px-8 py-4 bg-coastal-deep text-white rounded-full font-medium hover:bg-coastal-water transition-colors shadow-lg shadow-coastal-deep/30 flex items-center gap-2"
          >
            Descubre su historia
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-medium">Explorar</span>
        <ArrowDown className="text-coastal-water" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
