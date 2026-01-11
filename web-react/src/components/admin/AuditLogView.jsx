import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, User, ArrowRight } from 'lucide-react';

const AUDIT_LOG_KEY = 'usm_sc_admin_audit_log';

export default function AuditLogView() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUDIT_LOG_KEY);
      if (raw) {
        setEntries(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Error loading audit log', e);
    }
  }, []);

  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto space-y-6 lg:space-y-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Historial de cambios de Servicio Comunitario
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
            Registro inalterable de entradas y modificaciones realizadas por las autoridades sobre proyectos de servicio
            comunitario. No existe opción de eliminar estos registros desde la interfaz.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Últimos movimientos</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">{entries.length} registros</span>
          </div>
          <div className="max-h-[520px] overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
            {entries.length === 0 && (
              <p className="px-4 py-6 text-sm text-gray-500 dark:text-gray-400">
                Aún no se han registrado cambios desde este panel de autoridades.
              </p>
            )}
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="px-4 py-3 text-sm flex flex-col gap-1 bg-white/60 dark:bg-gray-800/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={14} className="text-[#003d82]" />
                    <span>{new Date(entry.changedAt).toLocaleString()}</span>
                  </div>
                  <span className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {entry.field}
                  </span>
                </div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  Proyecto {entry.projectId}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <User size={12} />
                    {entry.changedBy}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FileText size={12} />
                    <span className="italic">de</span>
                    <span className="font-mono">
                      {entry.previous && typeof entry.previous.value === 'boolean'
                        ? entry.previous.value
                          ? 'Aprobado'
                          : 'Pendiente'
                        : '--'}
                    </span>
                    <ArrowRight size={12} />
                    <span className="font-mono">
                      {entry.next && typeof entry.next.value === 'boolean'
                        ? entry.next.value
                          ? 'Aprobado'
                          : 'Pendiente'
                        : '--'}
                    </span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
