import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videos = [
    { id: 1, title: 'Avance 1', src: '/cosasarturito/avancesarturito1.mp4' },
    { id: 2, title: 'Avance 2', src: '/cosasarturito/videoarturitoavance2.mp4' },
    { id: 3, title: 'Avance 3', src: '/cosasarturito/videoarturitoavance3.mp4' },
    { id: 4, title: 'Pruebas', src: '/cosasarturito/pruebasarturito.mp4' },
  ];

  return (
    <section id="video" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-coastal-water/5 skew-y-3 transform origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-coastal-accent tracking-widest uppercase mb-3">En Acción</h2>
          <h3 className="text-4xl font-extrabold text-coastal-deep mb-6">
            Arthurito en movimiento
          </h3>
          <p className="text-lg text-gray-600">
            Observa los avances y pruebas que demuestran cómo la fuerza del viento da vida a este proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {videos.map((vid, index) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl bg-coastal-deep/5 border-4 border-white aspect-video relative group">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={vid.src} type="video/mp4" />
                  Tu navegador no soporta el formato de video.
                </video>
              </div>
              <h4 className="text-center mt-6 text-xl font-bold text-coastal-deep">{vid.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
