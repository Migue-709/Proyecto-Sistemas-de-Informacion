import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Download, Eye, Trash2, CheckCircle, Clock, XCircle, Search } from 'lucide-react';

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
    approved: { label: 'Aprobado', color: 'text-green-600 bg-green-50 border-green-200' },
    pending: { label: 'Pendiente', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' },
    rejected: { label: 'Rechazado', color: 'text-red-600 bg-red-50 border-red-200' },
  };

  const filteredDocuments = documents.filter((doc) => {
    if (selectedFilter === 'all') return true;
    return doc.status === selectedFilter;
  });

  return (
    <div className="max-w-[1600px] mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-gray-900 mb-2">Gestión de Documentos</h1>
        <p className="text-gray-600">Administra los documentos de tu proyecto de Servicio Comunitario.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-50`}>
                <stat.icon className={`text-${stat.color}-600`} size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-gray-900 text-2xl">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-gray-900 mb-2 text-xl font-semibold">Subir Nuevo Documento</h3>
            <p className="text-gray-600 text-sm">Formatos permitidos: PDF, DOC, DOCX, JPG, PNG (Máx. 10MB).</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
          >
            <Upload size={20} />
            <span>Subir Documento</span>
          </motion.button>
        </div>
      </motion.div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {['all', 'pending', 'approved', 'rejected'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar documentos... (placeholder)"
            className="w-64 md:w-80 pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-gray-600">Nombre del Documento</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">Tipo</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">Fecha de Subida</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">Estado</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">Tamaño</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDocuments.map((doc, index) => (
                <motion.tr
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <FileText className="text-blue-600" size={20} />
                      </div>
                      <span className="text-gray-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600">{doc.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600">{doc.uploadDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs border ${statusConfig[doc.status].color}`}>
                      {statusConfig[doc.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600">{doc.size}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors"
                      >
                        <Eye size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition-colors"
                      >
                        <Download size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors"
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
