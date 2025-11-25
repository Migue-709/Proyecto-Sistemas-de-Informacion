import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40 backdrop-blur-lg bg-white/80">
      <div>
        <h1 className="text-gray-900 mb-1">Bienvenido, Nombre del Usuario</h1>
        <p className="text-sm text-gray-500">Rol o programa del usuario</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-80 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-11 h-11 rounded-xl hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center"
        >
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center border-2 border-white">
            N
          </span>
        </motion.button>

        <div className="w-px h-8 bg-gray-200" />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm">
            U
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm text-gray-900">Nombre del Usuario</p>
            <p className="text-xs text-gray-500">Rol del usuario</p>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </motion.button>
      </div>
    </div>
  );
}
