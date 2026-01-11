import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Eye, EyeOff, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function AdminConfigurationView() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    approvals: true,
    audit: true,
  });

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleProfileImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Configuración del panel</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ajusta las preferencias del Panel de Autoridades para adaptar la experiencia a tu rol.
        </p>
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
                <p className="text-gray-900 dark:text-white font-medium mb-1">Modo oscuro</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Activa el tema oscuro para reducir la fatiga visual al revisar proyectos y reportes.
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
            <h2 className="text-gray-900 dark:text-white">Perfil de autoridad</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-xl font-semibold overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Foto de perfil" className="w-full h-full object-cover" />
                ) : (
                  <span>A</span>
                )}
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm mb-2"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Cambiar foto de perfil
                </motion.button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />
                <p className="text-xs text-gray-600 dark:text-gray-400">JPG, PNG o GIF (max. 2MB).</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4 text-sm">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Nombre de la autoridad"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Cargo</label>
                <input
                  type="text"
                  placeholder="Rector, Decano, Coordinador..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Correo institucional</label>
                <input
                  type="email"
                  placeholder="autoridad@usm.edu.ve"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Dependencia</label>
                <input
                  type="text"
                  placeholder="Rectorado, Decanato, Escuela..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 text-sm"
              type="button"
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
            <h2 className="text-gray-900 dark:text-white">Preferencias de avisos</h2>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 gap-4">
              <div>
                <p className="text-gray-900 dark:text-white mb-1">Cambios en proyectos de servicio</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Recibe avisos cuando un proyecto se envíe, apruebe o rechace.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setNotifications((prev) => ({ ...prev, approvals: !prev.approvals }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.approvals ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.approvals ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 gap-4">
              <div>
                <p className="text-gray-900 dark:text-white mb-1">Alertas del historial de cambios</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Notificaciones cuando se registren acciones relevantes en el historial.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setNotifications((prev) => ({ ...prev, audit: !prev.audit }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.audit ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.audit ? 'translate-x-6' : 'translate-x-1'
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
            <h2 className="text-gray-900 dark:text-white">Seguridad de la cuenta</h2>
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
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Nueva contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Confirmar nueva contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm"
            >
              Actualizar contraseña (placeholder)
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
