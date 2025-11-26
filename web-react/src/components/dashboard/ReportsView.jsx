import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  FileText,
  Clock,
  Users,
  Award,
} from 'lucide-react';

export default function ReportsView() {
  const stats = [
    {
      label: 'Horas totales',
      value: 'N',
      total: '/ N',
      icon: Clock,
      color: 'blue',
      trend: '+0%',
    },
    {
      label: 'Actividades realizadas',
      value: 'N',
      total: '/ N',
      icon: Award,
      color: 'green',
      trend: '+0%',
    },
    {
      label: 'Documentos subidos',
      value: 'N',
      total: 'archivos',
      icon: FileText,
      color: 'yellow',
      trend: '+0',
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Reportes y Estadísticas</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Visualiza el progreso y desempeño de tu servicio comunitario cuando haya datos registrados.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 hover:shadow-xl transition-all"
        >
          <Download size={20} />
          <span>Exportar reporte</span>
        </motion.button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    stat.color === 'blue'
                      ? 'bg-blue-50 dark:bg-blue-900/20'
                      : stat.color === 'green'
                      ? 'bg-emerald-50 dark:bg-emerald-900/20'
                      : stat.color === 'purple'
                      ? 'bg-violet-50 dark:bg-violet-900/20'
                      : 'bg-amber-50 dark:bg-amber-900/20'
                  }`}
                >
                  <Icon
                    className={
                      stat.color === 'blue'
                        ? 'text-blue-600 dark:text-blue-400'
                        : stat.color === 'green'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : stat.color === 'purple'
                        ? 'text-violet-600 dark:text-violet-400'
                        : 'text-amber-500 dark:text-amber-400'
                    }
                    size={24}
                  />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                  {stat.trend}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-900 dark:text-white text-3xl">{stat.value}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{stat.total}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-gray-900 dark:text-white mb-1">Progreso de horas por mes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Aquí verás el acumulado de horas cuando existan registros.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="text-gray-400 dark:text-gray-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Rango de meses pendiente</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 text-gray-500 dark:text-gray-400 border border-dashed border-gray-200 dark:border-gray-700 rounded-2xl py-10">
            <BarChart3 className="mb-3 text-gray-400 dark:text-gray-500" size={40} />
            <p className="mb-1 text-gray-700 dark:text-gray-300">Aún no hay datos para mostrar este gráfico.</p>
            <p className="text-sm">Cuando registres tus horas, este gráfico se activará automáticamente.</p>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <h3 className="text-gray-900 dark:text-white mb-4">Reportes recientes</h3>
          <div className="rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400 text-sm">
            Aún no se ha generado ningún reporte. Cuando generes tus primeros reportes, se listarán aquí para consulta y
            descarga.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50"
        >
          <h3 className="text-gray-900 dark:text-white mb-4">Generar reporte</h3>
          <div className="space-y-3 text-sm">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Aquí podrás elegir rápidamente qué tipo de reporte generar cuando haya datos disponibles.
            </p>
            <div className="grid gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 text-left hover:shadow-md transition-all cursor-default"
              >
                <p className="text-gray-900 dark:text-white mb-1">Reporte semanal</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Últimos 7 días</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 text-left hover:shadow-md transition-all cursor-default"
              >
                <p className="text-gray-900 dark:text-white mb-1">Reporte mensual</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Mes actual</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 text-left hover:shadow-md transition-all cursor-default"
              >
                <p className="text-gray-900 dark:text-white mb-1">Reporte completo</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Todo el período</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
