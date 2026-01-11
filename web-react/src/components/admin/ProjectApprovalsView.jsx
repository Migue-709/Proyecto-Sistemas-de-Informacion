import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Filter, User, FileText, ChevronRight } from 'lucide-react';

const MOCK_PROJECTS = [
  {
    id: 'PRJ-001',
    name: 'Apoyo escolar en comunidades vulnerables',
    career: 'Ingeniería de Sistemas',
    coordinator: 'Coordinador Facultad Ingeniería',
    tutor: 'Prof. María Pérez',
    anteProjectApproved: { value: true, date: '2025-03-10' },
    projectReceived: { value: true, date: '2025-04-01' },
    finalProjectApproved: { value: false, date: null },
  },
  {
    id: 'PRJ-002',
    name: 'Programa de gestión de obras civiles',
    career: 'Ingeniería Civil',
    coordinator: 'Coordinador Ingeniería Civil',
    tutor: 'Prof. Juan Rodríguez',
    anteProjectApproved: { value: false, date: null },
    projectReceived: { value: false, date: null },
    finalProjectApproved: { value: false, date: null },
  },
];

const AUDIT_LOG_KEY = 'usm_sc_admin_audit_log';

function appendAuditLog(entry) {
  try {
    const currentRaw = localStorage.getItem(AUDIT_LOG_KEY);
    const current = currentRaw ? JSON.parse(currentRaw) : [];
    current.unshift(entry);
    localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Error saving audit log', e);
  }
}

export default function ProjectApprovalsView({ onNavigateToAuditLog }) {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [selectedId, setSelectedId] = useState(MOCK_PROJECTS[0]?.id ?? null);
  const [filter, setFilter] = useState('all');

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? projects[0] ?? null,
    [projects, selectedId],
  );

  const filteredProjects = useMemo(() => {
    if (filter === 'pending') {
      return projects.filter((p) => !p.finalProjectApproved.value);
    }
    if (filter === 'anteproject') {
      return projects.filter((p) => !p.anteProjectApproved.value);
    }
    return projects;
  }, [projects, filter]);

  const handleStatusChange = (projectId, field, newValue) => {
    setProjects((prev) => {
      const next = prev.map((p) => {
        if (p.id !== projectId) return p;
        const prevField = p[field];
        const updated = {
          ...p,
          [field]: {
            value: newValue,
            date: newValue ? new Date().toISOString().slice(0, 10) : null,
          },
        };

        appendAuditLog({
          id: `${projectId}-${field}-${Date.now()}`,
          projectId,
          field,
          previous: prevField,
          next: updated[field],
          changedBy: 'Autoridad USM (demo)',
          changedAt: new Date().toISOString(),
        });

        return updated;
      });
      return next;
    });
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto space-y-6 lg:space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Proyectos y entregas
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
              Revisión de anteproyecto, recepción de proyecto y aprobación final por parte de las autoridades. Cada
              cambio queda registrado en el historial, sin posibilidad de eliminación.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <Filter size={14} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent border-none outline-none text-xs sm:text-sm"
              >
                <option value="all">Todos los proyectos</option>
                <option value="pending">Pendientes de aprobación final</option>
                <option value="anteproject">Anteproyecto pendiente</option>
              </select>
            </div>
            <button
              type="button"
              onClick={onNavigateToAuditLog}
              className="text-xs sm:text-sm text-[#003d82] hover:underline"
            >
              Ver historial completo de cambios
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden lg:col-span-1 max-h-[520px] flex flex-col">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Proyectos</p>
              <span className="text-xs text-gray-500 dark:text-gray-400">{filteredProjects.length} resultados</span>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedId(project.id)}
                  className={`w-full text-left px-4 py-3 flex flex-col gap-1 hover:bg-blue-50 dark:hover:bg-gray-700/60 transition-colors ${
                    selectedProject?.id === project.id ? 'bg-blue-50/70 dark:bg-gray-700/70' : ''
                  }`}
                >
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{project.id}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
                    {project.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <User size={12} />
                    {project.career}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl lg:col-span-2 p-5 sm:p-6 space-y-5">
            {selectedProject ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{selectedProject.id}</p>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Carrera: {selectedProject.career}
                    </p>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p className="flex items-center gap-1">
                      <User size={14} className="text-[#003d82]" />
                      Coordinador: <span className="font-medium">{selectedProject.coordinator}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <FileText size={14} className="text-[#003d82]" />
                      Tutor: <span className="font-medium">{selectedProject.tutor}</span>
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mt-2">
                  {[{
                    key: 'anteProjectApproved',
                    label: 'Aprobación de anteproyecto',
                  },
                  {
                    key: 'projectReceived',
                    label: 'Proyecto recibido por coordinación',
                  },
                  {
                    key: 'finalProjectApproved',
                    label: 'Aprobación de proyecto final',
                  }].map(({ key, label }) => {
                    const field = selectedProject[key];
                    const isApproved = field.value;

                    return (
                      <div
                        key={key}
                        className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 flex flex-col gap-2"
                      >
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                          {label}
                        </p>
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                              isApproved
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200'
                            }`}
                          >
                            {isApproved ? (
                              <CheckCircle2 size={14} />
                            ) : (
                              <Clock size={14} />
                            )}
                            {isApproved ? 'Aprobado' : 'Pendiente'}
                          </span>
                          <button
                            type="button"
                            className="text-xs text-[#003d82] hover:underline flex items-center gap-1"
                            onClick={() => handleStatusChange(selectedProject.id, key, !isApproved)}
                          >
                            Cambiar estado
                            <ChevronRight size={12} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Clock size={12} />
                          {field.date ? `Última actualización: ${field.date}` : 'Sin fecha registrada'}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 border-t border-dashed border-gray-200 dark:border-gray-700 pt-3 flex items-start gap-2">
                  <Clock size={14} className="mt-0.5 text-[#003d82]" />
                  <p>
                    Cada cambio realizado en estos estados registra automáticamente un movimiento en el historial del
                    sistema, accesible para rectoría, vicerrectorado, direcciones, decanos y coordinadores.
                  </p>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">No hay proyectos seleccionados.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
