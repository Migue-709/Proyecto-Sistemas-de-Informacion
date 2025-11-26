import React from 'react';
import xlogo from '../assets/images/xlogo.png';
import instagramlogo from '../assets/images/instagramlogo.png';

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="mb-4 font-semibold text-white text-lg">Universidad Santa María</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Sistema integral de gestión y control del servicio comunitario. Transformando la administración académica.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors text-sm"
              >
                <img src={xlogo} alt="X" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors text-sm"
              >
                <img src={instagramlogo} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white text-base">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Guía de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white text-base">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Normativa Legal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Manual del Usuario</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tutoriales</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Términos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white text-base">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Correo</span>
                <span>servicio.comunitario@usm.edu.ve</span>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Teléfono</span>
                <span>+58 asifnanfjaf</span>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Ubicación</span>
                <span>Caracas, Venezuela</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 Universidad Santa María. Todos los derechos reservados.
          </p>
          <div className="flex gap-5 text-xs md:text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
