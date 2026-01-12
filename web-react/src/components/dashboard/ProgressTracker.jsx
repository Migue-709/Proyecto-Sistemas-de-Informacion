import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react';

function ProgressStep({ title, description, status, date, isLast }) {
  const getIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="text-green-500" size={24} />;
      case 'in-progress':
        return <Clock className="text-blue-600" size={24} />;
      case 'pending':
      default:
        return <Circle className="text-gray-300" size={24} />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-green-600';
      case 'in-progress':
        return 'from-blue-500 to-blue-600';
      case 'pending':
      default:
        return 'from-gray-300 to-gray-400';
    }
  };

  return (
    <div className="relative flex gap-4">
      {!isLast && <div className="absolute left-3 top-8 w-0.5 h-full bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent" />}

      <div className="relative z-10 w-6 h-6 flex-shrink-0 mt-1">{getIcon()}</div>

      <div className="flex-1 pb-8">
        <div className="flex items-start justify-between mb-1">
          <h4 className="text-gray-900 dark:text-white">{title}</h4>
          {date && <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{description}</p>

        {status === 'in-progress' && (
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`h-full bg-gradient-to-r ${getStatusColor()}`}
              />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">60%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProgressTracker() {
  const steps = [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900 dark:text-white mb-1">Resumen del Servicio</h3>
        </div>
      </div>

      {steps.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8">
          <AlertCircle className="text-blue-400 dark:text-blue-500 mb-2" size={32} />
          <p className="text-gray-500 dark:text-gray-400 text-center">Aún no has iniciado el servicio comunitario.<br/>Cuando lo hagas, verás tu resumen aquí.</p>
        </div>
      ) : (
        <div className="space-y-1">
          {steps.map((step, index) => (
            <ProgressStep key={index} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
