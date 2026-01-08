import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, BookOpen, Clock, Award } from 'lucide-react';

export default function ProcessStepsSection() {
  return (
    <section id="proceso" className="py-24 px-6 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            Proceso de Servicio Comunitario
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#003d82] mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sigue estos pasos para completar exitosamente tu servicio comunitario
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Registro en el sistema',
                description:
                  'Crea tu cuenta con tu correo institucional USM. Completa tu perfil académico y verifica que hayas aprobado el 50% de tu pensum.',
                icon: Users,
                align: 'left',
              },
              {
                step: '02',
                title: 'Selección de proyecto',
                description:
                  'Explora el catálogo de proyectos aprobados. Revisa ubicaciones, horarios y requisitos. Inscríbete en el proyecto de tu preferencia.',
                icon: FileText,
                align: 'right',
              },
              {
                step: '03',
                title: 'Ejecución de actividades',
                description:
                  'Participa activamente en el proyecto asignado. Cumple con los horarios acordados y las actividades programadas por el tutor.',
                icon: BookOpen,
                align: 'left',
              },
              {
                step: '04',
                title: 'Registro de horas',
                description:
                  'Registra cada sesión de trabajo en el sistema. El tutor del proyecto validará tus horas cumplidas de forma semanal.',
                icon: Clock,
                align: 'right',
              },
              {
                step: '05',
                title: 'Certificación',
                description:
                  'Al completar las 120 horas, descarga tu certificado oficial. Preséntalo en Control de Estudios para tu expediente de grado.',
                icon: Award,
                align: 'left',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const isLeft = item.align === 'left';
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`md:grid md:grid-cols-2 gap-8 items-center ${
                    !isLeft ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={!isLeft ? 'md:col-start-2' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: isLeft ? 10 : -10 }}
                      className="bg-white p-8 border-l-4 border-[#003d82] shadow-lg cursor-default"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 bg-[#003d82] flex items-center justify-center flex-shrink-0"
                        >
                          <Icon className="text-white" size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#003d82] mb-2">PASO {item.step}</div>
                          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div
                    className={`hidden md:flex items-center justify-center ${
                      !isLeft ? 'md:col-start-1' : ''
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-[#003d82] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl"
                    >
                      {item.step}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

