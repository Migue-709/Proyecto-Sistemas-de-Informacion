import React from 'react';
import { motion } from 'framer-motion';
import logoNombre from '../assets/images/logoynombre.png';
import instagramLogo from '../assets/images/instagramlogo.png';
import xLogo from '../assets/images/xlogo.png';

export default function FooterSection() {
  const externalLinks = {
    'Portal USM': 'https://usm.edu.ve/',
    'Terna USM': 'https://usm.terna.net/',
  };

  return (
      <footer className="bg-[#01327c] text-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
              <div className="mb-4">
                <img
                  src={logoNombre}
                  alt="Universidad Santa María"
                  className="h-28 w-auto"
                />
              </div>
              <div className="flex items-center gap-4 mt-4 ml-8">
                <a
                  href="https://www.instagram.com/usm_vzla/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram USM"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram USM"
                    className="h-7 w-7 object-contain"
                  />
                </a>
                <a
                  href="https://x.com/usm_vzla?t=Ewsxdb3msN2xLLYgrY5Zeg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter USM"
                >
                  <img
                    src={xLogo}
                    alt="Twitter USM"
                    className="h-7 w-7 object-contain"
                  />
                </a>
              </div>
          </motion.div>

          {[
            {
              title: 'Enlaces Rápidos',
              links: ['Portal USM', 'Terna USM', 'Normativas'],
            },
            {
              title: 'Contacto',
              links: [
                'Coordinación de Servicio Comunitario',
                'serviciocomunitario@usm.edu.ve',
                '+58 (212) 555-0000',
              ],
            },
          ].map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <h5 className="font-bold mb-4 text-white">{column.title}</h5>
              <ul className="space-y-2 text-gray-100 text-sm">
                {column.links.map((link) => {
                  const href = externalLinks[link] || '#';
                  const isExternal = Boolean(externalLinks[link]);

                  return (
                    <motion.li key={link} whileHover={{ x: 5 }}>
                      <a
                        href={href}
                        className="hover:text-white transition-colors"
                        {...(isExternal
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {link}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

          <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-100 text-sm">
              © 2026 Universidad Santa María. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-gray-100 text-sm">
              {['Términos de Uso', 'Privacidad', 'Soporte Técnico'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

