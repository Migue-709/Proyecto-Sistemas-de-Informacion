import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, UserCheck, Calendar, MessageSquare, Award, Clock, AlertCircle } from 'lucide-react';

function ActivityItem({ icon: Icon, title, description, time, iconBg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
    >
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white" size={18} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h5 className="text-gray-900 truncate">{title}</h5>
          <span className="text-xs text-gray-500 flex items-center gap-1 flex-shrink-0">
            <Clock size={12} />
            {time}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default function RecentActivity() {
  const activities = [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900 mb-1">Actividad Reciente</h3>
          <p className="text-sm text-gray-600">No hay actividad reciente.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <AlertCircle className="text-blue-400 mb-2" size={32} />
        <p className="text-gray-500 text-center">Aún no hay actividad registrada.<br/>Cuando la haya, aparecerá aquí.</p>
      </div>
    </motion.div>
  );
}
