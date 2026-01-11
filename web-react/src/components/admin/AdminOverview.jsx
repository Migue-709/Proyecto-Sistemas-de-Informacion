import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Users, FileText, AlertTriangle } from 'lucide-react';

export default function AdminOverview({ onGoToApprovals }) {
  const cards = [
    {
      title: 'Proyectos con anteproyecto pendiente',
      value: 'X',
      description: 'Anteproyectos enviados por coordinadores/tutores que requieren revisión.',
      icon: ClipboardCheck,
      accent: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Proyectos en ejecución',
      value: 'X',
      description: 'Proyectos aprobados y actualmente activos en comunidades.',
      icon: Users,
      accent: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Proyectos con informe final pendiente',
      value: 'X',
      description: 'Proyectos que culminaron pero aún no tienen aprobación final.',
      icon: FileText,
      accent: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Alertas y observaciones recientes',
      value: 'X',
      description: 'Cambios o incidencias reportadas por coordinadores o estudiantes.',
      icon: AlertTriangle,
      accent: 'from-red-500 to-rose-600',
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Resumen general de Servicio Comunitario
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Vista consolidada para rectoría, decanatos, direcciones y coordinaciones.
          </p>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGoToApprovals}
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#003d82] text-white text-sm font-semibold shadow-md hover:bg-[#002d62] transition-colors gap-2"
        >
          <ClipboardCheck size={18} />
          Ir a gestión de aprobaciones
        </motion.button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm flex flex-col gap-3 cursor-default"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} text-white`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{card.value}</p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
