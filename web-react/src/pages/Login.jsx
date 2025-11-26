import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoUsm from '../assets/images/fondousm.png';
import logoUsmBlanco from '../assets/images/logousmblanco.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');

    // Inicio de sesión exitoso simulado mientras tanto
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#edf4fe] relative flex">

      <button
        className="absolute top-4 left-4 bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-6 py-2 text-sm shadow transition-colors"
        onClick={() => navigate('/')}
        style={{ zIndex: 20 }}
      >
        ← Volver al inicio
      </button>
      <div className="hidden md:flex w-1/2 relative overflow-hidden">
        <img
          src={fondoUsm}
          alt="Campus USM"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-[#0a3db4]/40" />

        <div className="absolute inset-0 bg-[#0a3db4]/70 clip-diagonal-left" />
        <div className="absolute inset-0 flex flex-col justify-center pl-10 gap-4 text-white">
          <img src={logoUsmBlanco} alt="Universidad Santa María" className="w-40" />
          <p className="text-lg md:text-xl font-medium max-w-xs">
            Plataforma de gestión de Servicio Comunitario de la Universidad Santa María.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-[#f5f5f5] flex items-center justify-center p-8">
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#1746b0] mb-1 text-center">Iniciar Sesión</h2>
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo institucional"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746b0] dark:text-black"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746b0] dark:text-black"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-xs text-center">{error}</div>}
          <button
            type="submit"
            className="bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-8 py-2 text-base mt-2"
          >
            Iniciar Sesión
          </button>
          </form>
          <div className="mt-4 text-center flex flex-col gap-2 items-center">
            <div>
              <span className="text-sm text-gray-700">¿No tienes cuenta? </span>
              <button
                className="text-[#1746b0] underline text-sm font-semibold"
                onClick={() => navigate('/register')}
              >
                Regístrate aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
