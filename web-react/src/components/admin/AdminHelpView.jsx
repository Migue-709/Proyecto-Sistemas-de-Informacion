import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Book, FileText, Search, ChevronRight, Users, ShieldCheck, History } from 'lucide-react';

export default function AdminHelpView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      category: 'projects',
      question: '¿Cómo revisar un anteproyecto o proyecto final?',
      answer:
        'Desde la sección "Proyectos y entregas" puedes abrir el detalle del estudiante, descargar el documento y registrar tu decisión.',
    },
    {
      id: 2,
      category: 'projects',
      question: '¿Quién puede aprobar o rechazar proyectos?',
      answer:
        'Dependiendo del reglamento interno, los coordinadores, directores de escuela o decanos pueden emitir la decisión. El sistema registra cada acción en el historial de cambios.',
    },
    {
      id: 3,
      category: 'students',
      question: '¿Cómo filtrar a los estudiantes por facultad o estado?',
      answer:
        'En la sección "Estudiantes" puedes usar los filtros superiores para limitar el listado por facultad, semestre o estado del servicio comunitario.',
    },
    {
      id: 4,
      category: 'history',
      question: '¿Dónde veo el historial de acciones sobre un proyecto?',
      answer:
        'En la sección "Historial de cambios" encontrarás un registro cronológico de las acciones realizadas sobre proyectos y entregas.',
    },
    {
      id: 5,
      category: 'account',
      question: '¿Cómo actualizar mis datos como autoridad?',
      answer:
        'En la sección "Configuración" puedes actualizar tu nombre, cargo, dependencia y preferencias de notificación.',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'students', label: 'Estudiantes' },
    { id: 'history', label: 'Historial' },
    { id: 'account', label: 'Cuenta' },
  ];

  const resources = [
    {
      title: 'Manual para autoridades',
      description: 'Lineamientos para la gestión del Servicio Comunitario en la USM.',
      icon: Book,
    },
    {
      title: 'Reglamento y normativa',
      description: 'Marco legal y normativo del Servicio Comunitario estudiantil.',
      icon: FileText,
    },
    {
      title: 'Buenas prácticas de seguimiento',
      description: 'Recomendaciones para el acompañamiento académico y comunitario.',
      icon: Users,
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1400px] mx-auto p-8 space-y-8">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20"
        >
          <HelpCircle className="text-white" size={40} />
        </motion.div>
        <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Centro de ayuda para autoridades</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Encuentra respuestas rápidas sobre el uso del Panel de Autoridades.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Busca una funcionalidad o duda..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all text-lg shadow-sm"
          />
        </div>
      </motion.div>

      <div className="flex justify-center gap-6 flex-wrap">
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900 dark:text-white">Preguntas frecuentes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <HelpCircle className="text-blue-600 dark:text-blue-400" size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-gray-900 dark:text-white mb-6">Recursos institucionales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <ChevronRight
                    className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{resource.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-center"
      >
        <h2 className="text-white mb-4">¿Aún necesitas ayuda?</h2>
        <p className="text-blue-100 mb-6">
          Puedes canalizar dudas específicas con la coordinación de Servicio Comunitario o con el equipo de TI.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-white text-blue-700 shadow-lg hover:shadow-xl transition-all"
        >
          Contactar soporte institucional
        </motion.button>
      </motion.div>
    </div>
  );
}
