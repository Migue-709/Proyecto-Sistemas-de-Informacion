import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

function TaskItem({ title, dueDate, priority, completed, index }) {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800';
      case 'low':
      default:
        return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
    }
  };

  const getPriorityLabel = () => {
    switch (priority) {
      case 'high':
        return 'Alta';
      case 'medium':
        return 'Media';
      case 'low':
      default:
        return 'Baja';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 ${
        completed
          ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md cursor-pointer'
      }`}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
          completed ? 'bg-green-500 border-green-500' : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
        }`}
      >
        {completed && <CheckCircle2 className="text-white" size={16} />}
      </motion.button>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h5 className={`${completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>{title}</h5>
          <span className={`${getPriorityColor()} text-xs px-2 py-0.5 flex-shrink-0 rounded-full border`}>{getPriorityLabel()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar size={14} />
          <span>{dueDate}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function UpcomingTasks() {
  const tasks = [];
  const pendingTasks = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900 dark:text-white mb-1">Próximas Tareas</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">No hay tareas pendientes.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <AlertCircle className="text-blue-400 dark:text-blue-500 mb-2" size={32} />
        <p className="text-gray-500 dark:text-gray-400 text-center">Aún no tienes tareas asignadas.<br/>Cuando se asignen, aparecerán aquí.</p>
      </div>
    </motion.div>
  );
}
