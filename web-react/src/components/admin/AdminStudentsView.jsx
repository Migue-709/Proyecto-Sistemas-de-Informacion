import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, Mail, IdCard, GraduationCap, CheckCircle2, Clock, Filter } from 'lucide-react';

const MOCK_STUDENTS = [
  {
    id: 'V-12345678',
    name: 'María González',
    email: 'maria.gonzalez@usm.edu.ve',
    career: 'Ingeniería de Sistemas',
    faculty: 'Ingeniería y Arquitectura',
    semester: '8vo',
    projectName: 'Plataforma web de apoyo académico',
    documents: [
      {
        id: 'DOC-ANT-001',
        type: 'Anteproyecto',
        status: 'approved',
        uploadedAt: '2025-03-10',
      },
      {
        id: 'DOC-FIN-001',
        type: 'Proyecto final',
        status: 'inReview',
        uploadedAt: '2025-06-20',
      },
    ],
    status: 'inProgress',
  },
  {
    id: 'V-87654321',
    name: 'Carlos Pérez',
    email: 'carlos.perez@usm.edu.ve',
    career: 'Derecho',
    faculty: 'Derecho',
    semester: '7mo',
    projectName: 'Jornadas de orientación legal comunitaria',
    documents: [
      {
        id: 'DOC-ANT-002',
        type: 'Anteproyecto',
        status: 'draft',
        uploadedAt: null,
      },
    ],
    status: 'notStarted',
  },
  {
    id: 'V-10293847',
    name: 'Ana Rodríguez',
    email: 'ana.rodriguez@usm.edu.ve',
    career: 'Economía',
    faculty: 'FACES',
    semester: '9no',
    projectName: 'Programa de educación financiera para emprendedores',
    documents: [
      {
        id: 'DOC-ANT-003',
        type: 'Anteproyecto',
        status: 'approved',
        uploadedAt: '2025-01-15',
      },
      {
        id: 'DOC-FIN-003',
        type: 'Proyecto final',
        status: 'approved',
        uploadedAt: '2025-04-30',
      },
    ],
    status: 'completed',
  },
];

const STATUS_CONFIG = {
  notStarted: {
    label: 'No iniciado',
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    icon: Clock,
  },
  inProgress: {
    label: 'En progreso',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
    icon: Clock,
  },
  completed: {
    label: 'Completado',
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
    icon: CheckCircle2,
  },
};

const DOCUMENT_STATUS_CONFIG = {
  draft: {
    label: 'Borrador',
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  },
  inReview: {
    label: 'En revisión',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200',
  },
  approved: {
    label: 'Aprobado',
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  },
};

export default function AdminStudentsView() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [facultyFilter, setFacultyFilter] = useState('all');
  const [semesterFilter, setSemesterFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(MOCK_STUDENTS[0]?.id ?? null);

  const facultyOptions = useMemo(
    () => Array.from(new Set(MOCK_STUDENTS.map((s) => s.faculty))),
    [],
  );

  const semesterOptions = useMemo(
    () => Array.from(new Set(MOCK_STUDENTS.map((s) => s.semester))),
    [],
  );

  const filtered = useMemo(() => {
    let data = [...MOCK_STUDENTS];

    const term = search.trim().toLowerCase();
    if (term) {
      data = data.filter(
        (s) =>
          s.name.toLowerCase().includes(term) ||
          s.id.toLowerCase().includes(term) ||
          s.email.toLowerCase().includes(term) ||
          s.career.toLowerCase().includes(term) ||
          s.projectName.toLowerCase().includes(term),
      );
    }

    if (statusFilter !== 'all') {
      data = data.filter((s) => s.status === statusFilter);
    }

    if (facultyFilter !== 'all') {
      data = data.filter((s) => s.faculty === facultyFilter);
    }

    if (semesterFilter !== 'all') {
      data = data.filter((s) => s.semester === semesterFilter);
    }

    return data;
  }, [search, statusFilter, facultyFilter, semesterFilter]);

  const selectedStudent = useMemo(
    () => filtered.find((s) => s.id === selectedId) ?? filtered[0] ?? null,
    [filtered, selectedId],
  );

  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto space-y-6 lg:space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Estudiantes registrados
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
              Consulta los estudiantes con acceso al Servicio Comunitario, su programa académico y el estado del
              servicio (no iniciado, en progreso o completado). Puedes filtrar por estado, facultad, semestre o
              buscar por nombre, cédula, correo o proyecto.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300">
                <Filter size={14} />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs sm:text-sm"
                >
                  <option value="all">Estado: Todos</option>
                  <option value="notStarted">No iniciado</option>
                  <option value="inProgress">En progreso</option>
                  <option value="completed">Completado</option>
                </select>
              </div>
              <select
                value={facultyFilter}
                onChange={(e) => setFacultyFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
              >
                <option value="all">Facultad: Todas</option>
                {facultyOptions.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              <select
                value={semesterFilter}
                onChange={(e) => setSemesterFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
              >
                <option value="all">Semestre: Todos</option>
                {semesterOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-full max-w-xs self-end">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nombre, cédula, correo o proyecto..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 focus:border-blue-400 dark:focus:border-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden max-h-[640px] flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Listado de estudiantes</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">{filtered.length} resultados</span>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
            {filtered.map((student) => {
              const statusCfg = STATUS_CONFIG[student.status] ?? STATUS_CONFIG.notStarted;
              const Icon = statusCfg.icon;

              return (
                <button
                  key={student.id}
                  type="button"
                  onClick={() => setSelectedId(student.id)}
                  className={`w-full text-left px-4 py-3 flex flex-col gap-1 hover:bg-blue-50 dark:hover:bg-gray-700/60 transition-colors ${
                    selectedStudent?.id === student.id ? 'bg-blue-50/70 dark:bg-gray-700/70' : ''
                  }`}
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{student.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <IdCard size={12} />
                    {student.id}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${statusCfg.color}`}
                  >
                    <Icon size={12} />
                    {statusCfg.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-6 space-y-4">
          {selectedStudent ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Cédula {selectedStudent.id}</p>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {selectedStudent.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {selectedStudent.career} · {selectedStudent.faculty} · Semestre {selectedStudent.semester}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p className="flex items-center gap-1">
                    <Mail size={14} />
                    {selectedStudent.email}
                  </p>
                  <p className="flex items-center gap-1">
                    <GraduationCap size={14} />
                    Proyecto: {selectedStudent.projectName}
                  </p>
                  <p className="flex items-center gap-1">
                    <User size={14} />
                    Estado del servicio:{' '}
                    {(() => {
                      const cfg = STATUS_CONFIG[selectedStudent.status] ?? STATUS_CONFIG.notStarted;
                      const Icon = cfg.icon;
                      return (
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${cfg.color}`}
                        >
                          <Icon size={12} />
                          {cfg.label}
                        </span>
                      );
                    })()}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                  Documentos entregados
                </p>
                {selectedStudent.documents && selectedStudent.documents.length > 0 ? (
                  <div className="overflow-x-auto text-xs">
                    <table className="min-w-full text-left border-separate border-spacing-y-1">
                      <thead className="text-[11px] text-gray-500 dark:text-gray-400">
                        <tr>
                          <th className="py-1 pr-4">Tipo</th>
                          <th className="py-1 pr-4">Estado</th>
                          <th className="py-1 pr-4">Fecha de subida</th>
                          <th className="py-1 pr-4">Código</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedStudent.documents.map((doc) => {
                          const cfg = DOCUMENT_STATUS_CONFIG[doc.status] ?? DOCUMENT_STATUS_CONFIG.draft;
                          return (
                            <tr key={doc.id} className="align-middle">
                              <td className="py-1 pr-4 text-gray-800 dark:text-gray-100">{doc.type}</td>
                              <td className="py-1 pr-4">
                                <span
                                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${cfg.color}`}
                                >
                                  {cfg.label}
                                </span>
                              </td>
                              <td className="py-1 pr-4 text-gray-600 dark:text-gray-300">
                                {doc.uploadedAt ? doc.uploadedAt : 'Sin fecha registrada'}
                              </td>
                              <td className="py-1 pr-4 text-gray-500 dark:text-gray-400 font-mono text-[11px]">
                                {doc.id}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Aún no hay documentos registrados para este estudiante.
                  </p>
                )}
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Selecciona un estudiante en el listado superior para ver sus datos y documentos entregados.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
