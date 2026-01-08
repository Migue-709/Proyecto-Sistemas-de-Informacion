import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoBlanco from '../assets/images/blancousmlogo.png';
import logoColor from '../assets/images/usmlogo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goLogin = () => navigate('/login');

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? 'bg-white shadow-md' : 'bg-[#003d82]'
      }`}
    >
      <nav className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1"
          >
            <div className="h-11 flex items-center">
              <img
                src={scrolled ? logoColor : logoBlanco}
                alt="Universidad Santa María"
                className="h-9 w-auto transition-opacity duration-700 ease-in-out"
              />
            </div>
            <div className="leading-tight">
              <div
                className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-[#003d82]' : 'text-white'
                }`}
              >
                UNIVERSIDAD SANTA MARÍA
              </div>
              <div
                className={`text-[10px] tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-gray-500' : 'text-white/70'
                }`}
              >
                SERVICIO COMUNITARIO
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-7">
            {['Inicio', 'Información', 'Funcionalidades', 'Proceso', 'Acceso'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm font-medium hover:opacity-70 transition-all relative group ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    scrolled ? 'bg-[#003d82]' : 'bg-white'
                  }`}
                ></span>
              </motion.a>
            ))}
            <motion.button
              type="button"
              onClick={goLogin}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 font-semibold transition-all ${
                scrolled
                  ? 'bg-[#003d82] text-white hover:bg-[#002d62]'
                  : 'bg-white text-[#003d82] hover:bg-gray-100'
              }`}
            >
              INGRESAR
            </motion.button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors ${scrolled ? 'text-[#003d82]' : 'text-white'}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-4 space-y-4 border-t pt-4"
            style={{ borderColor: scrolled ? '#e5e7eb' : 'rgba(255,255,255,0.1)' }}
          >
            {['Inicio', 'Información', 'Funcionalidades', 'Proceso', 'Acceso'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block hover:opacity-70 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              onClick={goLogin}
              className={`w-full px-6 py-2.5 font-semibold ${
                scrolled ? 'bg-[#003d82] text-white' : 'bg-white text-[#003d82]'
              }`}
            >
              INGRESAR
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

