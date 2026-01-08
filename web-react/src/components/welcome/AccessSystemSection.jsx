import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, FileText, Download, ArrowUpRight } from 'lucide-react';

export default function AccessSystemSection() {
  const navigate = useNavigate();

  const goLogin = () => navigate('/login');
  const goRegister = () => navigate('/register');

  return (
    <section id="acceso" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-gradient-to-br from-[#003d82] to-[#002d62] text-white p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Acceso al Sistema</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-white mb-8"
              ></motion.div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                El acceso al sistema está disponible para todos los estudiantes activos de la Universidad Santa María
                que hayan aprobado el 50% de su pensum académico.
              </p>
              <div className="space-y-4 text-white/80">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <Calendar className="flex-shrink-0 mt-1" size={20} />
                  <span>Horario: Lunes a Viernes de 8:00 AM a 6:00 PM</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <FileText className="flex-shrink-0 mt-1" size={20} />
                  <span>Soporte técnico disponible en horario de oficina</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <Download className="flex-shrink-0 mt-1" size={20} />
                  <span>Descarga de certificados las 24 horas del día</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white text-[#1a1a1a] p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Credenciales de Acceso</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">CÉDULA DE IDENTIDAD</label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: '#003d82' }}
                    type="text"
                    placeholder="V-12345678"
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#003d82] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">CONTRASEÑA</label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: '#003d82' }}
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#003d82] focus:outline-none transition-all"
                  />
                </div>
                <motion.button
                  type="button"
                  onClick={goLogin}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#003d82] text-white py-4 font-semibold hover:bg-[#002d62] transition-colors flex items-center justify-center gap-2 group"
                >
                  INGRESAR AL SISTEMA
                  <ArrowUpRight
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    size={20}
                  />
                </motion.button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={goLogin}
                    className="text-sm text-[#003d82] hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <div className="border-t pt-6 mt-6">
                  <p className="text-sm text-gray-600 mb-4">¿Primera vez en el sistema?</p>
                  <motion.button
                    type="button"
                    onClick={goRegister}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border-2 border-[#003d82] text-[#003d82] py-3 font-semibold hover:bg-[#003d82] hover:text-white transition-all"
                  >
                    REGISTRARSE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
