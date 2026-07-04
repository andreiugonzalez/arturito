import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { id: 1, title: 'Prototipo', src: '/cosasarturito/prototipoarturito.jpeg' },
    { id: 2, title: 'Pre-final', src: '/cosasarturito/prefinal.jpeg' },
    { id: 3, title: 'Diseño Final', src: '/cosasarturito/diseñofinal.jpeg' },
    { id: 4, title: 'Vista de Arturito', src: '/cosasarturito/arturitovista.jpeg' },
  ];

  return (
    <section id="gallery" className="py-24 bg-coastal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-coastal-accent tracking-widest uppercase mb-3">Galería</h2>
          <h3 className="text-4xl font-extrabold text-coastal-deep mb-6">
            Imágenes del Proyecto
          </h3>
          <p className="text-lg text-gray-600">
            Un vistazo de cerca a los detalles y el proceso de creación de Arthurito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl bg-gray-200 aspect-video shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-coastal-deep/90 via-coastal-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h4 className="text-white text-xl font-bold">{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
