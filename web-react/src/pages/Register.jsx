import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#edf4fe] relative">
      {/* Botón volver al inicio */}
      <button
        className="absolute top-4 left-4 bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-6 py-2 text-sm shadow transition-colors"
        onClick={() => navigate('/')}
        style={{ zIndex: 20 }}
      >
        ← Volver al inicio
      </button>
      <div className="bg-white rounded-2xl shadow-lg px-4 py-2 w-full max-w-xl min-h-[10vh] flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-[#1e40af] mb-6 text-center">Registro</h2>

        {/* Selección de tipo de usuario */}
        {!userType && (
          <div className="flex flex-col gap-4 items-center">
            <span className="mb-2 text-gray-700">¿Cómo deseas registrarte?</span>
            <button
              className="bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-8 py-2 text-base w-full"
              onClick={() => setUserType('estudiante')}
            >
              Estudiante
            </button>
            <button
              className="bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-8 py-2 text-base w-full"
              onClick={() => setUserType('docente')}
            >
              Docente / Coordinador
            </button>
          </div>
        )}

        {/* Formulario estudiantes */}
        {userType === 'estudiante' && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-[#1746b0] mb-1 text-center">Registro de Estudiantes</h2>
            <p className="text-center text-[#1746b0] mb-3">Servicio Comunitario - Universidad Santa María</p>
            <form className="bg-white rounded-2xl shadow p-1 md:p-3 w-full flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#1746b0] mb-1 text-center">Formulario de Inscripción</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Cédula de Identidad *</label>
                  <input type="text" placeholder="V-12345678" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Teléfono *</label>
                  <input type="text" placeholder="0414-1234567" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Nombres *</label>
                  <input type="text" placeholder="Ingresa tus nombres" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Apellidos *</label>
                  <input type="text" placeholder="Ingresa tus apellidos" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-semibold mb-0.5">Correo Electrónico *</label>
                  <input type="email" placeholder="tucorreo@usm.edu.ve" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Carrera *</label>
                  <select className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required>
                    <option value="">Selecciona tu carrera</option>
                    <option>Derecho</option>
                    <option>Ingeniería de Sistemas</option>
                    <option>Ingeniería Civil</option>
                    <option>Comunicación Social</option>
                    <option>Administración</option>
                    <option>Contaduría</option>
                    <option>Economía</option>
                    <option>Otra</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Semestre Actual *</label>
                  <select className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required>
                    <option value="">Selecciona el semestre</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#0a3db4] hover:bg-[#1746b0] text-white font-bold rounded-xl px-6 py-2 text-base mt-1 shadow-md transition-colors"
              >
                Registrar Estudiante
              </button>
              <button
                type="button"
                className="text-[#1746b0] underline text-xs mt-0.5"
                onClick={() => setUserType(null)}
              >
                Volver
              </button>
              <hr className="my-1" />
              <div className="text-xs text-center text-gray-500">Estudiantes registrados: <span className="font-bold">0</span></div>
            </form>
          </div>
        )}

        {/* Formulario Coordinadores*/}
        {userType === 'docente' && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-[#1746b0] mb-1 text-center">Registro de Personal Docente</h2>
            <p className="text-center text-[#1746b0] mb-2 text-sm">Coordinadores, Supervisores y Tutores - USM</p>
            <form className="bg-white rounded-2xl shadow p-1 md:p-6 w-full flex flex-col gap-3">
              <div className="bg-blue-100 text-blue-800 text-xs rounded-md px-3 py-2 mb-2 flex items-center gap-2">
                <span className="text-base">ℹ️</span>
                Este registro es exclusivo para docentes, coordinadores, supervisores y autoridades que gestionarán el servicio comunitario.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Cédula de Identidad *</label>
                  <input type="text" placeholder="V-12345678" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Teléfono *</label>
                  <input type="text" placeholder="0414-1234567" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Nombres *</label>
                  <input type="text" placeholder="Ingresa los nombres" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Apellidos *</label>
                  <input type="text" placeholder="Ingresa los apellidos" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-semibold mb-0.5">Correo Electrónico Institucional *</label>
                  <input type="email" placeholder="correo@usm.edu.ve" className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Rol / Cargo *</label>
                  <select className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required>
                    <option value="">Selecciona el rol</option>
                    <option>Coordinador</option>
                    <option>Supervisor</option>
                    <option>Tutor</option>
                    <option>Docente</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Departamento / Escuela *</label>
                  <select className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm" required>
                    <option value="">Selecciona el departamento</option>
                    <option>Derecho</option>
                    <option>Ingeniería de Sistemas</option>
                    <option>Ingeniería Civil</option>
                    <option>Comunicación Social</option>
                    <option>Administración</option>
                    <option>Contaduría</option>
                    <option>Economía</option>
                    <option>Otra</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#0a3db4] hover:bg-[#1746b0] text-white font-bold rounded-xl px-6 py-2 text-base mt-1 shadow-md transition-colors"
              >
                Registrar Personal Docente
              </button>
              <button
                type="button"
                className="text-[#1746b0] underline text-xs mt-0.5"
                onClick={() => setUserType(null)}
              >
                Volver
              </button>
            </form>
          </div>
        )}
        {/* Boton al login */}
        <div className="mt-4 text-center flex flex-col gap-2 items-center">
          <div>
            <span className="text-sm text-gray-700">¿Ya tienes una cuenta? </span>
            <button
              className="text-[#1746b0] underline text-sm font-semibold"
              onClick={() => navigate('/login')}
            >
              Inicia Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
