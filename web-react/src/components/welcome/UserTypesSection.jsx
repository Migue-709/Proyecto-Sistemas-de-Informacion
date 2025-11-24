import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Users, CheckCircle2 } from 'lucide-react';

const userTypes = [
  {
    icon: <GraduationCap size={32} />, title: 'Estudiantes', description: 'Acceso completo a tu expediente de servicio comunitario.', features: [
      'Inscripción digital rápida',
      'Carga de documentos en línea',
      'Seguimiento de horas cumplidas',
      'Solicitud de certificados',
      'Notificaciones en tiempo real',
    ],
  },
  {
    icon: <Users size={32} />, title: 'Docentes y Coordinadores', description: 'Herramientas para gestionar y supervisar estudiantes.', features: [
      'Panel de control completo',
      'Validación de documentos',
      'Asignación de proyectos',
      'Generación de reportes',
      'Aprobación de horas',
    ],
  },
];

export default function UserTypesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4 text-sm font-medium">
            Para Todos
          </span>
          <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-900">
            Una plataforma adaptada a cada usuario
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Diseñada específicamente para las necesidades de cada rol en el proceso del servicio comunitario.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
          {userTypes.map((user, index) => (
            <motion.div
              key={user.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 group-hover:border-blue-300 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    {user.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{user.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{user.description}</p>
                <ul className="space-y-2 mb-6">
                  {user.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="w-full border border-blue-300 text-blue-700 hover:border-blue-500 hover:bg-blue-50 rounded-full py-2 text-sm font-semibold transition-colors"
                >
                  Explorar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl">
            <div className="text-left text-white">
              <p className="font-semibold mb-1">¿Listo para comenzar?</p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-2 font-semibold text-sm"
            >
              Iniciar Sesión
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
