import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import campusImage from '../../assets/images/fondousm.png';
import formationImage from '../../assets/images/formacionusm.png';

const heroImages = [
  { src: campusImage, alt: 'Campus Universidad Santa María' },
  { src: formationImage, alt: 'Formación en la Universidad Santa María' },
];

export default function HeroSection() {
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goLogin = () => navigate('/login');
  const goRegister = () => navigate('/register');

  return (
    <section id="inicio" className="bg-white pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 min-h-[650px]">
          <div className="lg:col-span-7 px-6 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-bold text-[#003d82] mb-6 tracking-[0.2em] flex items-center gap-2"
              >
                <div className="w-8 h-0.5 bg-[#003d82]"></div>
                PLATAFORMA OFICIAL USM
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-[#1a1a1a] mb-8 leading-[1.05]"
              >
                Sistema para
                <br />
                <span className="text-[#003d82]">Servicio</span>
                <br />
                Comunitario
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-[#003d82] mb-8"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-700 mb-12 leading-relaxed"
              >
                Gestión integral y registro oficial de horas de servicio comunitario para estudiantes de la
                Universidad Santa María.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <motion.button
                  type="button"
                  onClick={goLogin}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#003d82] text-white px-10 py-4 font-semibold hover:bg-[#002d62] transition-colors flex items-center justify-center gap-2 group"
                >
                  ACCEDER AL SISTEMA
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={goRegister}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-[#003d82] text-[#003d82] px-10 py-4 font-semibold hover:bg-[#003d82] hover:text-white transition-all"
                >
                  REGISTRO NUEVO
                </motion.button>
              </motion.div>

              
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden">
            <motion.div className="absolute inset-0 lg:relative h-[450px] lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden z-10"></div>
              <motion.div
                key={heroImages[currentImageIndex].src}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full relative"
              >
                <ImageWithFallback
                  src={heroImages[currentImageIndex].src}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#003d82] rounded-full p-2 shadow-md transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#003d82] rounded-full p-2 shadow-md transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

