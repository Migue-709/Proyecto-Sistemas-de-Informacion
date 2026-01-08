import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Clock, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function SystemFeaturesSection() {
  return (
    <section id="requisitos" className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">Funcionalidades del Sistema</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#003d82]"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Gestión de Proyectos',
              description:
                'Acceso al catálogo completo de proyectos comunitarios aprobados por la universidad. Consulta descripciones, ubicaciones, horarios y requisitos específicos de cada proyecto.',
              features: [
                'Búsqueda por área de interés y ubicación',
                'Inscripción directa a proyectos disponibles',
                'Información de contacto del coordinador',
              ],
              icon: BookOpen,
            },
            {
              title: 'Registro de Horas',
              description:
                'Sistema digital para el registro y validación de horas de servicio comunitario. Todas las horas registradas son verificadas por el tutor del proyecto.',
              features: [
                'Formulario de registro con fecha y descripción',
                'Validación por parte del tutor asignado',
                'Historial completo de actividades realizadas',
              ],
              icon: Clock,
            },
            {
              title: 'Seguimiento en Tiempo Real',
              description:
                'Panel de control personalizado donde puedes visualizar tu progreso, horas cumplidas, pendientes y estado general de tu servicio comunitario.',
              features: [
                'Dashboard con estadísticas actualizadas',
                'Gráficos de progreso y metas',
                'Notificaciones de validaciones pendientes',
              ],
              icon: BarChart3,
            },
            {
              title: 'Generación de Certificados',
              description:
                'Una vez completadas las 120 horas requeridas, el sistema genera automáticamente tu certificado oficial de cumplimiento del servicio comunitario.',
              features: [
                'Certificado digital con firma electrónica',
                'Descarga inmediata en formato PDF',
                'Código de verificación de autenticidad',
              ],
              icon: Award,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,61,130,0.1)' }}
                className="bg-white p-10 border border-gray-200 transition-all cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#003d82] flex items-center justify-center mb-6"
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3 text-gray-700">
                  {item.features.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 cursor-default"
                    >
                      <CheckCircle className="text-[#003d82] flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
