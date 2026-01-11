import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  ClipboardList,
  Calendar,
  Building2,
  CheckCircle,
  Clock,
  XCircle,
  Info,
} from 'lucide-react';

const statusStyles = {
  notSent: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  pending: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
  approved:
    'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
  rejected: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
};

export default function ServiceProjectView() {
  const [activePhase, setActivePhase] = useState('anteproyecto');
  const [selectedFileName, setSelectedFileName] = useState('Ningún archivo seleccionado');

  const anteprojectStatus = {
    code: 'notSent',
    label: 'No enviado todavía',
    description:
      'Cuando cargues el anteproyecto desde esta sección y el coordinador lo revise, aquí verás su estado y observaciones.',
  };

  const finalProjectStatus = {
    code: 'notSent',
    label: 'No enviado todavía',
    description:
      'Esta fase se habilita cuando tu anteproyecto ha sido aprobado. Luego podrás subir aquí el proyecto final.',
  };

  const currentStatus = activePhase === 'anteproyecto' ? anteprojectStatus : finalProjectStatus;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      'Esta sección es solo un placeholder. Aun no sirve xd.'
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Mi Proyecto de Servicio Comunitario
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl text-sm sm:text-base">
          Desde aquí podrás cargar el anteproyecto y, posteriormente, el proyecto final de tu Servicio
          Comunitario. 
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 lg:grid-cols-3 items-start"
      >
        <div className="lg:col-span-2 space-y-4">
          <div className="inline-flex rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-800/60 px-3 py-1 text-xs text-blue-700 dark:text-blue-300 items-center gap-2">
            <Info size={14} />
            <span>
              Paso 1: Anteproyecto · Paso 2: Proyecto final.
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <button
              type="button"
              onClick={() => setActivePhase('anteproyecto')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${{
                true: 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30',
                false:
                  'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700',
              }[activePhase === 'anteproyecto']}`}
            >
              Anteproyecto
            </button>
            <button
              type="button"
              onClick={() => setActivePhase('final')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${{
                true: 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30',
                false:
                  'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700',
              }[activePhase === 'final']}`}
            >
              Proyecto final
            </button>
          </div>

          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                {activePhase === 'anteproyecto' ? (
                  <FileText className="text-blue-600 dark:text-blue-400" size={22} />
                ) : (
                  <ClipboardList className="text-blue-600 dark:text-blue-400" size={22} />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {activePhase === 'anteproyecto' ? 'Entrega de Anteproyecto' : 'Entrega de Proyecto Final'}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Completa los campos de resumen y adjunta el documento en PDF. Más adelante, estos datos se
                  usarán para la revisión y el seguimiento por parte de las autoridades.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre del proyecto
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none"
                    placeholder="Ej: Programa de acompañamiento académico en la comunidad..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Objetivo general
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none resize-none"
                    placeholder="Redacta el objetivo general del proyecto..."
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Objetivos específicos (hasta 4)
                  </label>
                  {[1, 2, 3, 4].map((index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
                      placeholder={`Objetivo específico ${index}`}
                    />
                  ))}
                </div>

                <div className="md:col-span-2 grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Institución donde cumplirá el servicio
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <Building2 size={16} />
                      </span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
                        placeholder="Nombre de la institución"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Fecha de inicio
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <Calendar size={16} />
                      </span>
                      <input
                        type="date"
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Fecha aproximada de cierre
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <Calendar size={16} />
                      </span>
                      <input
                        type="date"
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Justificación
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none resize-none"
                      placeholder="Explica por qué es necesario este proyecto en la comunidad..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Introducción
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none resize-none"
                      placeholder="Redacta una breve introducción al proyecto..."
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Resumen
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none resize-none"
                    placeholder="Escribe un resumen breve del contenido del documento..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Documento en PDF
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="projectFile"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 cursor-pointer hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700 dark:hover:bg-blue-900/50"
                      >
                        Seleccionar archivo PDF
                      </label>
                      <span className="text-xs text-gray-600 dark:text-gray-300 truncate max-w-[180px]">
                        {selectedFileName}
                      </span>
                      <input
                        id="projectFile"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setSelectedFileName(file ? file.name : 'Ningún archivo seleccionado');
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Solo se admite PDF. Tamaño máximo de archivo sugerido: 10 MB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Al enviar esta información, el documento pasará a estado "En espera" para revisión del
                  coordinador.
                </p>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/30 transition-colors"
                  >
                    Enviar para revisión
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="space-y-4 lg:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                {activePhase === 'anteproyecto' ? (
                  <FileText className="text-blue-600 dark:text-blue-400" size={20} />
                ) : (
                  <ClipboardList className="text-blue-600 dark:text-blue-400" size={20} />
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Estado de la entrega
                </p>
                <div
                  className={`inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full border text-xs ${statusStyles[currentStatus.code]}`}
                >
                  {currentStatus.code === 'pending' && <Clock size={14} />}
                  {currentStatus.code === 'approved' && <CheckCircle size={14} />}
                  {currentStatus.code === 'rejected' && <XCircle size={14} />}
                  {currentStatus.code === 'notSent' && <Clock size={14} />}
                  <span>{currentStatus.label}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {currentStatus.description}
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
