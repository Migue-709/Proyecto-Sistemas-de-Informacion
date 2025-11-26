import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Eye, EyeOff, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ConfigurationView() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    activities: true,
    deadlines: true,
    reports: false,
  });

  return (
    <div className="max-w-[1200px] mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Configuración</h1>
        <p className="text-gray-600 dark:text-gray-400">Personaliza tu experiencia y preferencias del sistema.</p>
      </div>

      <div className="space-y-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <Monitor className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-gray-900 dark:text-white">Preferencias del sistema</h2>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {darkMode ? (
                    <Moon className="text-blue-600 dark:text-blue-400" size={18} />
                  ) : (
                    <Sun className="text-blue-600 dark:text-blue-400" size={18} />
                  )}
                  <p className="text-gray-900 dark:text-white font-medium">Modo oscuro</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Activa el tema oscuro para reducir la fatiga visual en entornos con poca luz.
                </p>
              </div>
              <button
                type="button"
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <User className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-gray-900 dark:text-white">Perfil de usuario</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-2xl font-semibold">
                U
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm mb-2"
                >
                  Cambiar foto de perfil
                </motion.button>
                <p className="text-xs text-gray-600 dark:text-gray-400">JPG, PNG o GIF (max. 2MB).</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Nombre del usuario"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Cédula</label>
                <input
                  type="text"
                  placeholder="Documento de identidad"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Teléfono</label>
                <input
                  type="tel"
                  placeholder="Número de contacto"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Carrera</label>
                <input
                  type="text"
                  placeholder="Programa académico"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 text-sm"
            >
              Guardar cambios (placeholder)
            </motion.button>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <Bell className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-gray-900 dark:text-white">Notificaciones</h2>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 gap-4">
              <div>
                <p className="text-gray-900 dark:text-white mb-1">Notificaciones por correo</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Recibir resúmenes e información importante en tu bandeja.</p>
              </div>
              <button
                type="button"
                onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.email ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.email ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>


            <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 gap-4">
              <div>
                <p className="text-gray-900 dark:text-white mb-1">Recordatorios de fechas límite</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Avisos antes de entregas importantes o cierres de periodo.</p>
              </div>
              <button
                type="button"
                onClick={() => setNotifications({ ...notifications, deadlines: !notifications.deadlines })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.deadlines ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.deadlines ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <Lock className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-gray-900 dark:text-white">Seguridad</h2>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Contraseña actual</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Nueva contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Confirmar nueva contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 text-sm"
            >
              Actualizar contraseña
            </motion.button>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-gray-900 dark:text-white mb-2">Autenticación de dos factores</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                No disponible actualmente.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs border border-dashed border-gray-300 dark:border-gray-600 cursor-default"
              >
                2FA no disponible aún
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
