import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Bell, ChevronDown, Settings, HelpCircle, LogOut, Menu } from 'lucide-react';

function TopBar({ onSectionChange, onToggleSidebar }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleGoToConfiguration = () => {
    onSectionChange && onSectionChange('configuration');
    setShowProfileMenu(false);
  };

  const handleGoToHelp = () => {
    onSectionChange && onSectionChange('help');
    setShowProfileMenu(false);
  };

  return (
    <div className="h-16 sm:h-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Botón menú telefono */}
        <button
          type="button"
          onClick={onToggleSidebar}
          className="inline-flex items-center justify-center rounded-xl p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <h1 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white mb-0.5">
            Bienvenido, Nombre del Usuario
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Rol o programa del usuario</p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 relative">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-56 md:w-72 lg:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all duration-300"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-11 h-11 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center text-gray-600 dark:text-gray-300"
          onClick={() => onSectionChange && onSectionChange('notifications')}
        >
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center border-2 border-white dark:border-gray-800">
            N
          </span>
        </motion.button>

        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            onClick={() => setShowProfileMenu((prev) => !prev)}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm">
              U
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm text-gray-900 dark:text-white">Nombre del Usuario</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Estudiante</p>
            </div>
            <ChevronDown
              size={16}
              className={`text-gray-400 dark:text-gray-500 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`}
            />
          </motion.button>

          {showProfileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-lg font-semibold">
                    U
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white">Nombre del Usuario</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">usuario@usm.edu.ve</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-blue-100 dark:bg-blue-900/50 rounded-full overflow-hidden">
                  </div>
                  <span className="text-xs text-blue-500 dark:text-blue-400">--%</span>
                </div>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  onClick={handleGoToConfiguration}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-sm"
                >
                  <Settings size={18} />
                  <span>Configuración</span>
                </button>
                <button
                  type="button"
                  onClick={handleGoToHelp}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-sm"
                >
                  <HelpCircle size={18} />
                  <span>Ayuda</span>
                </button>
                <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all text-sm"
                  onClick={() => navigate('/')}
                >
                  <LogOut size={18} />
                  <span>Cerrar sesión</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

    </div>
  );
}

export default TopBar;
