import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Shield, BarChart3, Bell, Cloud } from 'lucide-react';

const features = [
  {
    icon: <FileText size={24} />, title: 'Gestión de Documentos', description: 'Carga, valida y gestiona todos los documentos necesarios de forma digital. Sin filas, sin esperas.'
  },
  {
    icon: <Clock size={24} />, title: 'Seguimiento en Tiempo Real', description: 'Monitorea el progreso de tu servicio comunitario con actualizaciones instantáneas y transparentes.'
  },
  {
    icon: <Shield size={24} />, title: 'Seguridad Garantizada', description: 'Tus datos y documentos protegidos con buenas prácticas de seguridad digital.'
  },
  {
    icon: <BarChart3 size={24} />, title: 'Reportes Automáticos', description: 'Genera reportes detallados y estadísticas con un solo clic.'
  },
  {
    icon: <Bell size={24} />, title: 'Notificaciones Inteligentes', description: 'Recibe alertas sobre plazos, aprobaciones y actualizaciones de tu servicio.'
  },
  {
    icon: <Cloud size={24} />, title: 'Acceso desde Cualquier Lugar', description: 'Disponible 24/7 desde cualquier dispositivo conectado a Internet.'
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4 text-sm font-medium">
            Funcionalidades
          </span>
          <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-900">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Una plataforma completa diseñada para simplificar cada paso del proceso del servicio comunitario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/60 border border-gray-200/60 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl">
                <div className="mb-4">
                  <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-gray-900 font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
