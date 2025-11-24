import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Cloud, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <FileText size={32} className="text-pink-500" />,
    title: 'Registro',
    description: 'Crea tu cuenta en minutos y accede a la plataforma.'
  },
  {
    icon: <Sparkles size={32} className="text-purple-500" />,
    title: 'Postulación',
    description: 'Presenta tu propuesta o postúlate a un proyecto de servicio.'
  },
  {
    icon: <Cloud size={32} className="text-orange-400" />,
    title: 'Ejecución/Carga',
    description: 'Realiza tus actividades y carga el avance y los recaudos.'
  },
  {
    icon: <CheckCircle2 size={32} className="text-green-600" />,
    title: 'Cierre',
    description: 'Finaliza el proceso y descarga tu constancia digital.'
  },
];

export default function ProcessStepsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-2xl md:text-3xl font-bold">
            Proceso Simple
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
            Así de fácil es comenzar tu servicio comunitario digital:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg"
            >
              <div className="mb-4">{step.icon}</div>
              <p className="font-semibold text-lg mb-1 text-white">{step.title}</p>
              <p className="text-blue-100 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
