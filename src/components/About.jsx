import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Wind, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Wind className="w-8 h-8 text-coastal-water" />,
      title: "Energía Eólica",
      description: "Se mueve exclusivamente utilizando la fuerza del viento, sin necesidad de baterías ni electricidad."
    },
    {
      icon: <Recycle className="w-8 h-8 text-coastal-water" />,
      title: "100% Reciclado",
      description: "Construido enteramente con materiales recuperados, dándoles una segunda vida útil."
    },
    {
      icon: <Leaf className="w-8 h-8 text-coastal-water" />,
      title: "Impacto Ecológico",
      description: "Un proyecto diseñado para concientizar sobre el cuidado del medio ambiente y las energías limpias."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-coastal-accent tracking-widest uppercase mb-3">El Proyecto</h2>
          <h3 className="text-4xl font-extrabold text-coastal-deep mb-6">
            Nacido de la brisa marina
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Arthurito no es solo un robot, es un mensaje. Creado a partir de materiales que otros desecharon,
            cobra vida con la fuerza más natural de todas: el viento. Su diseño está inspirado en el movimiento
            armónico de la naturaleza, demostrando que la tecnología y la ecología pueden caminar juntas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-coastal-light/50 rounded-2xl p-8 hover:bg-coastal-sand/20 transition-colors border border-gray-100 shadow-sm"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-coastal-deep mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
