import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScheduleView() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="max-w-[1600px] mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Cronograma de Actividades</h1>
          <p className="text-gray-600">Planifica y visualiza tus actividades de servicio comunitario.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
        >
          <Plus size={20} />
          <span>Nueva Actividad</span>
        </motion.button>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900">
                {currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                  }
                  className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                  }
                  className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm text-gray-600 py-2">
                  {day}
                </div>
              ))}

              {getDaysInMonth(currentMonth).map((day, index) => (
                <motion.div
                  key={index}
                  whileHover={day ? { scale: 1.05 } : {}}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm relative cursor-pointer transition-all ${
                    day === null ? 'text-transparent' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {day}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="text-sm text-gray-600">Calendario sin actividades registradas aún</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-gray-900">Próximas Actividades</h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-white border border-dashed border-gray-200 text-center text-gray-500"
          >
            <CalendarIcon className="mx-auto mb-2 text-gray-400" size={24} />
            <p>No hay actividades próximas registradas todavía.</p>
          </motion.div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-4">Actividades Completadas</h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-white border border-dashed border-gray-200 text-center text-gray-500"
        >
          <CalendarIcon className="mx-auto mb-2 text-gray-400" size={24} />
          <p>Aún no se ha completado ninguna actividad.</p>
        </motion.div>
      </div>
    </div>
  );
}
