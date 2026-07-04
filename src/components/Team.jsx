import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Star } from 'lucide-react';

const Team = () => {
  const members = [
    { name: "Andriu Gonzalez", role: "Desarrollador / Creador" },
    { name: "Renato Horta", role: "Desarrollador / Creador" },
    { name: "Gerald Campusano", role: "Desarrollador / Creador" },
    { name: "Vicente Faundes", role: "Desarrollador / Creador" },
  ];

  return (
    <section id="team" className="py-24 bg-coastal-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-4">
            <Star className="text-coastal-accent w-10 h-10" fill="currentColor" />
          </div>
          <h2 className="text-sm font-bold text-coastal-accent tracking-widest uppercase mb-3">El Equipo</h2>
          <h3 className="text-4xl font-extrabold text-coastal-deep mb-4">
            Grupo Renato Estrellita
          </h3>
          <div className="flex items-center justify-center gap-2 text-gray-600 font-medium bg-white px-6 py-3 rounded-full shadow-sm inline-flex mb-8 border border-gray-100">
            <GraduationCap className="w-5 h-5 text-coastal-water" />
            Ingeniería Civil en Computación e Informática
          </div>
          <p className="text-lg text-gray-600">
            El equipo detrás del diseño y construcción de Arthurito. Uniendo la ingeniería, el software y la ecología.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow border border-gray-50 group"
            >
              <div className="w-20 h-20 mx-auto bg-coastal-light rounded-full flex items-center justify-center mb-6 group-hover:bg-coastal-water transition-colors">
                <Users className="w-10 h-10 text-coastal-deep group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-coastal-deep mb-1">{member.name}</h4>
              <p className="text-sm text-coastal-accent font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
