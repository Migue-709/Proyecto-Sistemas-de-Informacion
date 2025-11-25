import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Target, TrendingUp, ArrowUp } from 'lucide-react';

function StatCard({ icon: Icon, title, value, change, changeType, gradient, iconBg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="text-white" size={24} />
          </div>

          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
            changeType === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            <ArrowUp size={14} />
            <span className="text-xs">{change}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-gray-900 mb-0">{value}</p>
        </div>
      </div>

      <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`} />
    </motion.div>
  );
}

export default function StatsCards() {
  const stats = [
    {
      icon: Clock,
      title: 'Horas Completadas',
      value: 'X / Y',
      change: '+N',
      changeType: 'up',
      gradient: 'from-blue-500 to-blue-600',
      iconBg: 'from-blue-500 to-blue-600',
    },
    {
      icon: CheckCircle2,
      title: 'Tareas Completadas',
      value: 'X / Y',
      change: '+N',
      changeType: 'up',
      gradient: 'from-green-500 to-green-600',
      iconBg: 'from-green-500 to-green-600',
    },
    {
      icon: Target,
      title: 'Progreso General',
      value: 'XX%',
      change: '+N%',
      changeType: 'up',
      gradient: 'from-purple-500 to-purple-600',
      iconBg: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Días Transcurridos',
      value: 'N',
      change: '±N',
      changeType: 'up',
      gradient: 'from-orange-500 to-orange-600',
      iconBg: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} index={index} />
      ))}
    </div>
  );
}
