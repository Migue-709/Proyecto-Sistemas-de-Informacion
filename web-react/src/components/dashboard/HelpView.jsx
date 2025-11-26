import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Book,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  Search,
  ChevronRight,
} from 'lucide-react';

export default function HelpView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: '¿Cuántas horas debo completar?',
      answer:
        'Debes completar un mínimo de 120 horas de servicio comunitario distribuidas durante el proyecto.',
    },
    {
      id: 2,
      category: 'general',
      question: '¿Puedo cambiar de institución?',
      answer:
        'No, cada estudiante solo puede estar asignado a una institución durante todo el período de servicio comunitario.',
    },
    {
      id: 3,
      category: 'documents',
      question: '¿Qué documentos debo subir?',
      answer:
        'Debes subir informes semanales, evidencias fotográficas, listas de asistencia y cualquier otro documento que respalde tus actividades.',
    },
    {
      id: 4,
      category: 'documents',
      question: '¿Cuál es el tamaño máximo de archivo?',
      answer:
        'El tamaño máximo permitido por documento es de 10MB. Los formatos aceptados son PDF, DOC, DOCX, JPG y PNG.',
    },
    {
      id: 5,
      category: 'activities',
      question: '¿Con cuánta anticipación debo reportar una actividad?',
      answer:
        'Se recomienda reportar las actividades con al menos 48 horas de anticipación para su aprobación.',
    },
    {
      id: 6,
      category: 'activities',
      question: '¿Puedo realizar actividades fuera del horario establecido?',
      answer:
        'Sí, pero deben ser coordinadas previamente con tu tutor académico y el coordinador de la institución.',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'general', label: 'Generales' },
    { id: 'documents', label: 'Documentos' },
    { id: 'activities', label: 'Actividades' },
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: 'Correo Electrónico',
      detail: 'servicio.comunitario@usm.edu.ve',
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      detail: '+58 212-555-0100',
      color: 'green',
    },
  ];

  const resources = [
    {
      title: 'Manual del Estudiante',
      description: 'Guía completa sobre el servicio comunitario',
      icon: Book,
    },
    {
      title: 'Formatos y Plantillas',
      description: 'Descarga formatos oficiales para documentos',
      icon: FileText,
    },
    {
      title: 'Preguntas Frecuentes',
      description: 'Respuestas a las dudas más comunes',
      icon: HelpCircle,
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
        <h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">Centro de Ayuda</h1>
        <p className="text-gray-600 dark:text-gray-400">¿En qué podemos ayudarte hoy?</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Busca tu pregunta..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all text-lg shadow-sm"
          />
        </div>
      </motion.div>

      <div className="flex justify-center gap-6 flex-wrap">
        {contactOptions.map((option, index) => {
          const Icon = option.icon;
          const colorClasses =
            option.color === 'blue'
              ? { bg: 'bg-blue-50', text: 'text-blue-600' }
              : { bg: 'bg-emerald-50', text: 'text-emerald-600' };

          return (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer min-w-[280px] max-w-xs flex-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                option.color === 'blue'
                  ? 'bg-blue-50 dark:bg-blue-900/20'
                  : 'bg-emerald-50 dark:bg-emerald-900/20'
              }`}>
                <Icon className={
                  option.color === 'blue'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-emerald-600 dark:text-emerald-400'
                } size={24} />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">{option.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{option.detail}</p>
            </motion.div>
          );
        })}
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
          <div className="flex gap-2">
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
        <h2 className="text-gray-900 dark:text-white mb-6">Recursos Útiles</h2>
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
                  <ChevronRight className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" size={20} />
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
        <p className="text-blue-100 mb-6">Nuestro equipo de soporte está disponible para ayudarte</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-white text-blue-700 shadow-lg hover:shadow-xl transition-all"
        >
          Contactar Soporte
        </motion.button>
      </motion.div>
    </div>
  );
}
