import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import usmlogo from '../../assets/images/usmlogo.png';

function NavItem({ icon: Icon, label, active, badge, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
          : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
      }`}
    >
      {active && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}

      <Icon size={20} className={active ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
      <span className={`flex-1 text-left ${active ? '' : 'group-hover:text-blue-700 dark:group-hover:text-blue-400'}`}>{label}</span>

      {badge && (
        <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">{badge}</span>
      )}

      {active && <ChevronRight size={16} className="text-white/70" />}
    </motion.button>
  );
}

export default function Sidebar({ activeSection, onSectionChange }) {
  const [activeItem, setActiveItem] = useState(activeSection || 'dashboard');
  const navigate = useNavigate();

  const mainNavItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'documents', icon: FileText, label: 'Documentos', badge: 'N' },
    { id: 'schedule', icon: Calendar, label: 'Cronograma' },
    { id: 'institutions', icon: Users, label: 'Instituciones' },
    { id: 'reports', icon: BarChart3, label: 'Reportes' },
  ];

  const secondaryNavItems = [
    { id: 'configuration', icon: Settings, label: 'Configuración' },
    { id: 'help', icon: HelpCircle, label: 'Ayuda' },
  ];

  return (
    <div className="w-72 h-full lg:h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-40 h-40 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-700 border border-blue-100 dark:border-gray-600 flex items-center justify-center shadow-md shadow-blue-200/20 dark:shadow-blue-500/10 overflow-hidden">
            <img src={usmlogo} alt="USM Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-gray-900 dark:text-white">USM</h2>
              <span className="text-gray-300 dark:text-gray-600 text-lg font-light select-none">|</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">Facultad del Usuario</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Servicio Comunitario</p>
          </div>
        </div>
      </div>
  <nav className="flex-1 px-4 space-y-1 relative z-10 overflow-y-auto pb-4">
        <div className="mb-6">
          {mainNavItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              badge={item.badge}
              onClick={() => {
                setActiveItem(item.id);
                if (onSectionChange) {
                  const map = {
                    dashboard: 'overview',
                    documents: 'documents',
                    schedule: 'schedule',
                    institutions: 'institutions',
                    reports: 'reports',
                  };
                  onSectionChange(map[item.id] || 'overview');
                }
              }}
            />
          ))}
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          {secondaryNavItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              onClick={() => {
                setActiveItem(item.id);
                if (onSectionChange) {
                  const map = {
                    configuration: 'configuration',
                    help: 'help',
                  };
                  onSectionChange(map[item.id] || 'overview');
                }
              }}
            />
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 relative z-10">
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1">
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">Progreso Total</p>
              <p className="text-blue-400 dark:text-blue-500 italic">Sin datos</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-700/50 flex items-center justify-center">
              <span className="text-blue-300 dark:text-blue-400 text-xs">--%</span>
            </div>
          </div>
          <div className="w-full h-2 bg-blue-200 dark:bg-blue-900/30 rounded-full overflow-hidden">
          </div>
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 group"
          onClick={() => navigate('/')}
        >
          <LogOut size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
          <span className="flex-1 text-left">Cerrar Sesión</span>
        </motion.button>
      </div>
    </div>
  );
}
