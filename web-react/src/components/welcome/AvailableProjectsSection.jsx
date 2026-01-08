import React from 'react';
import { motion } from 'framer-motion';
import campusImage from '../../assets/images/Campus_Santa_Maria.jpg';

export default function AvailableProjectsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={campusImage}
          alt="Campus Universidad Santa María"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/25" />
      </div>
      <div className="relative max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">Proyectos Disponibles</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#003d82] mx-auto"
          ></motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          {[
            'Apoyo escolar en comunidades vulnerables|Ingeniería de Sistemas',
            'Programa de gestión de obras civiles|Ingeniería Civil',
            'Optimización de redes comunitarias|Ingeniería en Telecomunicaciones',
            'Mejora de procesos productivos locales|Ingeniería Industrial',
            'Diseño de espacios comunitarios|Arquitectura',
            'Análisis socioeconómico de comunidades|Economía',
            'Campañas de información comunitaria|Comunicación Social',
            'Asistencia contable a emprendedores|Contaduría',
            'Asesoría legal comunitaria|Derecho',
            'Programa de cooperación internacional local|Estudios Internacionales',
            'Promoción del uso racional de medicamentos|Farmacia',
            'Jornadas de salud bucal|Odontología',
            'Apoyo tecnológico en proyectos sociales|Ingeniería de Sistemas',
            'Supervisión de infraestructura comunitaria|Ingeniería Civil',
            'Gestión de inventarios en organizaciones sociales|Ingeniería Industrial',
            'Fortalecimiento de medios comunitarios|Comunicación Social',
          ]
            .reduce(
              (cols, item, index) => {
                const [title, area] = item.split('|');
                const colIndex = index < 8 ? 0 : 1;
                cols[colIndex].push({ title, area });
                return cols;
              },
              [[], []]
            )
            .map((column, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {column.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-white/90 border-l-4 border-[#003d82] px-4 py-3 cursor-default shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-[#1a1a1a] mb-0.5">{project.title}</h3>
                    <p className="text-xs text-gray-600">Carrera: {project.area}</p>
                  </motion.div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
