import React from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageSquare } from 'lucide-react';

function QuickAction({ icon: Icon, title, description, gradient, index, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 text-left hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white transition-colors duration-300" size={24} />
        </div>
        <h4 className="text-gray-900 dark:text-white mb-1 transition-colors duration-300">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{description}</p>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.button>
  );
}

export default function QuickActions({ onSectionChange }) {
  const actions = [
    {
      icon: Upload,
      title: 'Subir Documento',
      description: 'Carga documentos requeridos para tu servicio comunitario',
      gradient: 'from-blue-500 to-blue-600',
      target: 'serviceProject',
    },
    {
      icon: MessageSquare,
      title: 'Solicitar Ayuda',
      description: 'Contacta a tu coordinador o tutor académico',
      gradient: 'from-pink-500 to-pink-600',
      target: 'help',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900 dark:text-white mb-1">Acciones Rápidas</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Accede a las funciones más utilizadas</p>
        </div>
      </div>

      <div className={`grid grid-cols-2 ${actions.length > 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
        {actions.map((action, index) => (
          <QuickAction
            key={index}
            {...action}
            index={index}
            onClick={() => {
              if (typeof onSectionChange === 'function') onSectionChange(action.target);
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
