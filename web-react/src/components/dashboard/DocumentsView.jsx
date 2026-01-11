import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Trash2, CheckCircle, Clock, XCircle, Search } from 'lucide-react';

export default function DocumentsView() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Documento 1 (placeholder)',
      type: 'Tipo A',
      uploadDate: 'Fecha 1',
      status: 'approved',
      size: 'X MB',
    },
    {
      id: 2,
      name: 'Documento 2 (placeholder)',
      type: 'Tipo B',
      uploadDate: 'Fecha 2',
      status: 'pending',
      size: 'Y MB',
    },
    {
      id: 3,
      name: 'Documento 3 (placeholder)',
      type: 'Tipo C',
      uploadDate: 'Fecha 3',
      status: 'rejected',
      size: 'Z MB',
    },
  ];

  const stats = [
    { label: 'Total Documentos', value: 'N', icon: FileText, color: 'blue' },
    { label: 'Pendientes de Revisión', value: 'N', icon: Clock, color: 'yellow' },
    { label: 'Aprobados', value: 'N', icon: CheckCircle, color: 'green' },
    { label: 'Rechazados', value: 'N', icon: XCircle, color: 'red' },
  ];

  const statusConfig = {
    approved: { label: 'Aprobado', color: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
    pending: { label: 'Pendiente', color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' },
    rejected: { label: 'Rechazado', color: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' },
  };

  const filteredDocuments = documents.filter((doc) => {
    if (selectedFilter === 'all') return true;
    return doc.status === selectedFilter;
  });

  return (
    <div className="max-w-[1600px] mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Historial de Documentos</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Aquí podrás ver un resumen de los documentos que has enviado en el marco de tu Servicio
          Comunitario. La carga del anteproyecto y del proyecto final se realiza desde la sección
          "Entregas del Proyecto".
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-50 dark:bg-${stat.color}-900/20`}>
                <stat.icon className={`text-${stat.color}-600 dark:text-${stat.color}-400`} size={24} />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-gray-900 dark:text-white text-2xl">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {['all', 'pending', 'approved', 'rejected'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {filter === 'all' && 'Todos'}
              {filter === 'pending' && 'Pendientes'}
              {filter === 'approved' && 'Aprobados'}
              {filter === 'rejected' && 'Rechazados'}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Buscar documentos... (placeholder)"
            className="w-64 md:w-80 pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Nombre del Documento</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Tipo</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Fecha de Subida</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Estado</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Tamaño</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredDocuments.map((doc, index) => (
                <motion.tr
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="text-blue-600 dark:text-blue-400" size={20} />
                      </div>
                      <span className="text-gray-900 dark:text-white">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 dark:text-gray-400">{doc.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 dark:text-gray-400">{doc.uploadDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs border ${statusConfig[doc.status].color}`}>
                      {statusConfig[doc.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 dark:text-gray-400">{doc.size}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                      >
                        <Eye size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                      >
                        <Download size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
