import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Users, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 max-w-3xl mx-auto text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="block text-gray-800">Portal de Gestión del</span>
          <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Servicio Comunitario
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg"
        >
          Transformamos el proceso del servicio comunitario con una plataforma digital completa.
          Sin papeles, sin complicaciones. Todo en un solo lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base shadow-md transition-colors group"
          >
            Comenzar
            <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold text-sm md:text-base transition-colors"
          >
            Conocer más
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-8 md:p-10 grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white shadow-lg">
                <FileText size={32} />
              </div>
              <span className="text-gray-700 font-medium">100% Digital</span>
              <p className="text-gray-500 text-sm mt-1">Sin documentos físicos</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white shadow-lg">
                <Users size={32} />
              </div>
              <span className="text-gray-700 font-medium">Multi-usuario</span>
              <p className="text-gray-500 text-sm mt-1">Estudiantes y docentes</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white shadow-lg">
                <Sparkles size={32} />
              </div>
              <span className="text-gray-700 font-medium">Automatizado</span>
              <p className="text-gray-500 text-sm mt-1">Proceso simplificado</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-blue-400/50 flex justify-center p-1">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-blue-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
