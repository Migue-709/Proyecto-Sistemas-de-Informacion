import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, BarChart3 } from 'lucide-react';

export default function LegalInfoSection() {
  return (
    <>
      <section className="bg-[#f8f9fa] border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Requisito oficial',
                value: '120 horas',
                subtitle: 'Obligatorias para graduación',
              },
              {
                icon: Users,
                title: 'Estudiantes registrados',
                value: 'X',
                subtitle: 'Período académico actual',
              },
              {
                icon: BarChart3,
                title: 'Proyectos activos',
                value: 'X',
                subtitle: 'Comunidades atendidas',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="flex gap-4 bg-white p-6 border border-gray-200 cursor-default transition-shadow hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-16 h-16 bg-[#003d82] flex items-center justify-center flex-shrink-0"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{item.title}</div>
                    <div className="text-3xl font-bold text-[#1a1a1a]">{item.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.subtitle}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="información" className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Marco Legal del Servicio Comunitario
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-[#003d82] mb-8"
              ></motion.div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                De acuerdo con la Ley de Servicio Comunitario del Estudiante de Educación Superior (Gaceta Oficial
                N° 38.272 del 14 de septiembre de 2005), todos los estudiantes de educación superior están obligados a
                prestar servicio comunitario.
              </p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#f8fafc] border-l-4 border-[#003d82] p-6 my-8"
              >
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Artículo 6</h3>
                <p className="text-gray-700 italic leading-relaxed">
                  "El servicio comunitario es un requisito para la obtención del título de educación superior, no
                  creará derechos u obligaciones de carácter laboral y debe prestarse sin remuneración alguna."
                </p>
              </motion.div>

              <p className="text-gray-700 leading-relaxed">
                La Universidad Santa María, en cumplimiento de esta normativa, ha desarrollado este sistema digital
                para facilitar la gestión, seguimiento y certificación del servicio comunitario de sus estudiantes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#003d82] text-white p-10">
                <h3 className="text-2xl font-bold mb-8">Aspectos Fundamentales</h3>

                <div className="space-y-6">
                  {[
                    {
                      num: '1',
                      title: 'Duración',
                      desc: 'Mínimo de 120 horas académicas de servicio comunitario a lo largo de la carrera universitaria.',
                    },
                    {
                      num: '2',
                      title: 'Momento de ejecución',
                      desc: 'A partir del 50% de la carga académica aprobada en tu plan de estudios.',
                    },
                    {
                      num: '3',
                      title: 'Proyectos válidos',
                      desc: 'Deben estar aprobados y supervisados por la Coordinación de Servicio Comunitario USM.',
                    },
                    {
                      num: '4',
                      title: 'Certificación',
                      desc: 'Al cumplir las 120 horas, recibirás certificado oficial emitido por la universidad.',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="transition-transform cursor-default"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 border-2 border-white flex items-center justify-center flex-shrink-0 mt-1"
                        >
                          <span className="font-bold">{item.num}</span>
                        </motion.div>
                        <div>
                          <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                          <p className="text-white/90 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
