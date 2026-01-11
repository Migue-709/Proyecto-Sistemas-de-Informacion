import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail } from 'lucide-react';

export default function AdminNotificationsView() {
  return (
    <div className="max-w-[1400px] mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Notificaciones</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            En este apartado se concentrarán las notificaciones dirigidas a las autoridades sobre proyectos, entregas y
            actividades relacionadas con el Servicio Comunitario.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-900 dark:text-white">Centro de notificaciones</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white dark:bg-gray-800 border border-dashed border-gray-200 dark:border-gray-700 p-10 flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400"
          >
            <Bell className="mb-4 text-gray-400 dark:text-gray-500" size={42} />
            <p className="mb-1 text-gray-700 dark:text-gray-200 text-base">
              Aún no hay notificaciones configuradas para el Panel de Autoridades.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl">
              Cuando se integre la lógica de backend, aquí se mostrarán avisos de nuevos proyectos enviados, decisiones
              de aprobación, recordatorios de plazos y otros eventos relevantes.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h2 className="text-gray-900 dark:text-white">Resumen</h2>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nuevas</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Bell className="text-blue-600 dark:text-blue-400" size={22} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sin leer</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                <Mail className="text-emerald-600 dark:text-emerald-400" size={22} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
