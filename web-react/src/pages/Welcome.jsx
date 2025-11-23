import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: 'Regístrate',
    description:
      'Crea tu cuenta con tus datos institucionales y completa tu perfil.',
  },
  {
    title: 'Explora Proyectos',
    description:
      'Elige entre proyectos verificados que se ajusten a tus intereses.',
  },
  {
    title: 'Inicia tu Servicio',
    description:
      'Registra tus horas, sube evidencias y sigue tu progreso en línea.',
  },
];


export default function Welcome() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState('right');
  const navigate = useNavigate();

  const goPrev = () => {
    setDirection('left');
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const goNext = () => {
    setDirection('right');
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-[#edf4fe] flex flex-col">
      <nav className="bg-gradient-to-b from-gray-400 to-transparent h-16 flex items-center px-4 fixed top-0 left-0 w-full z-50">
        <img
          src="/src/assets/images/usmlogo.png"
          alt="USM Logo"
          className="h-16 mr-4"
        />
        <div className="text-blue-700 font-bold text-sm leading-tight flex flex-col">
          <span>UNIVERSIDAD</span>
          <span>SANTA MARÍA</span>
        </div>
        <div className="flex-1" />
        <button
          className="bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-8 py-2 text-base shadow-none transition-colors duration-200"
          style={{ minWidth: 160 }}
          onClick={() => navigate('/login')}
        >
          Iniciar Sesión
        </button>
      </nav>
      <main className="flex flex-1 px-8 pt-28 items-center min-h-screen relative overflow-hidden">
        {/* Círculos en el fondo */}
        <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
          <div className="absolute top-4 left-8 w-64 h-64 bg-[#d2def6] rounded-full opacity-100 blur-sm animate-float-slow" />
          <div className="absolute top-1/2 left-1/5 w-40 h-40 bg-[#d2def6] rounded-full opacity-100 blur-none animate-float-medium" />
          <div className="absolute bottom-8 right-16 w-56 h-56 bg-[#d2def6] rounded-full opacity-90 blur-sm animate-float-fast" />
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-[#d2def6] rounded-full opacity-90 blur-none animate-float-medium" />
        </div>
        {/*Circulos en fondo */}
        <div className="flex-1 max-w-xl z-10">
          <h1 className="text-[#1e40af] font-extrabold text-5xl mb-4 font-sans leading-tight">
            Portal de Servicio <br /> Comunitario
          </h1>
          <p className="text-gray-700 text-lg max-w-xl font-sans mb-8">
            Conectamos estudiantes con comunidades para construir un mejor futuro a través del servicio social y el compromiso ciudadano
          </p>
          <button
            className="bg-[#1e40af] text-white py-3 px-6 rounded-lg font-bold text-lg flex items-center hover:bg-[#1c3a99]"
            onClick={() => navigate('/registro')}
          >
            Acceder al Portal
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center z-10">
        </div>
      </main>
      <div className="h-16 bg-gradient-to-b from-[#edf4fe] to-white" />
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#1e40af] font-extrabold text-3xl mb-4">
              Beneficios del Sistema
            </h2>
            <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta 1*/}
            <div className="bg-[#dbeafe] rounded-2xl p-8 shadow-md transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-1 hover:border-2 hover:border-[#1e40af]">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center mb-6">
                <span className="text-[#1e40af] text-2xl">⏱</span>
              </div>
              <h3 className="text-[#1e40af] font-bold text-xl mb-2">
                Gestión Integral
              </h3>
              <p className="text-gray-700 text-sm">
                Control completo del proceso de servicio comunitario desde el registro hasta la culminación del proyecto.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#dbeafe] rounded-2xl p-8 shadow-md transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-1 hover:border-2 hover:border-[#1e40af]">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center mb-6">
                <span className="text-[#1e40af] text-2xl">📊</span>
              </div>
              <h3 className="text-[#1e40af] font-bold text-xl mb-2">
                Seguimiento Digital
              </h3>
              <p className="text-gray-700 text-sm">
                Controla tus horas y progreso en tiempo real con notificaciones automáticas.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#dbeafe] rounded-2xl p-8 shadow-md transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-1 hover:border-2 hover:border-[#1e40af]">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center mb-6">
                <span className="text-[#1e40af] text-2xl">⭐</span>
              </div>
              <h3 className="text-[#1e40af] font-bold text-xl mb-2">
                Proyectos Verificados
              </h3>
              <p className="text-gray-700 text-sm">
                Accede a oportunidades aprobadas y supervisadas por la universidad.
              </p>
            </div>

            {/* Tarjeta 4 - Reportes Automatizados */}
            <div className="bg-[#dbeafe] rounded-2xl p-8 shadow-md transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-1 hover:border-2 hover:border-[#1e40af]">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center mb-6">
                <span className="text-[#1e40af] text-2xl">📄</span>
              </div>
              <h3 className="text-[#1e40af] font-bold text-xl mb-2">
                Reportes Automatizados
              </h3>
              <p className="text-gray-700 text-sm">
                Genera documentación oficial automáticamente con información validada y actualizada en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10 w-full bg-gradient-to-b from-white to-[#dbeafe]" />

      <section className="px-8 py-20" style={{ backgroundColor: '#dbeafe' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#1e40af] font-extrabold text-3xl mb-4">Proceso Simple</h2>
            <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center gap-8">
            <div
              className={`bg-[#f8fafc] rounded-2xl p-8 shadow-md w-full text-center transition-transform duration-500 ease-in-out
                ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
              key={currentStep}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e40af] text-white font-bold">
                  {currentStep + 1}
                </div>
              </div>
              <h3 className="text-[#1e40af] font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm max-w-xl mx-auto">{step.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-colors"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setDirection(index > currentStep ? 'right' : 'left');
                      setCurrentStep(index);
                    }}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentStep ? 'bg-[#1e40af]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-colors"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10 w-full bg-gradient-to-b from-[#dbeafe] to-white" />

      {/* Footer */}
      <footer className="w-full bg-[#01327c] text-white py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Izquierda */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <img
              src="/src/assets/images/logousmblanco.png"
              alt="Logo USM Blanco"
              className="h-14 mb-3"
            />
            <p className="text-xs text-center md:text-left">
              Copyright © 2025 - Universidad Santa María.<br />
              Todos los derechos reservados.
            </p>
          </div>

          {/* Centro */}
          <div className="flex flex-col items-center md:w-1/3">
            <span className="font-bold mb-2">Legal</span>
            <a href="#" className="text-xs hover:underline">Política de Privacidad</a>
            <a href="#" className="text-xs hover:underline">Políticas de Cookies</a>
          </div>

          {/* Derecha */}
          <div className="flex flex-col items-center md:items-end md:w-1/3">
            <span className="font-bold mb-2">Contacto</span>
            <a href="mailto:info@usm.edu.ve" className="text-xs hover:underline mb-2">info@usm.edu.ve</a>
            <div className="flex gap-3 mt-1">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/images/xlogo.png" alt="Twitter/X" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/images/instagramlogo.png" alt="Instagram" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
