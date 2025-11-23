import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // AAutenticacion (pa luego)
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');

    alert('Inicio de sesión exitoso');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#edf4fe] relative">
      {/* Botón volver al inicoi */}
      <button
        className="absolute top-4 left-4 bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-6 py-2 text-sm shadow transition-colors"
        onClick={() => navigate('/')}
        style={{ zIndex: 20 }}
      >
        ← Volver al inicio
      </button>
      <div className="bg-white rounded-2xl shadow-lg px-6 py-8 w-full max-w-md flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-[#1746b0] mb-1 text-center">Iniciar Sesión</h2>
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo institucional"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746b0]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746b0]"
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
        {/* Botón para ir a registro e inicio */}
        <div className="mt-4 text-center flex flex-col gap-2 items-center">
          <div>
            <span className="text-sm text-gray-700">¿No tienes cuenta? </span>
            <button
              className="text-[#1746b0] underline text-sm font-semibold"
              onClick={() => navigate('/registro')}
            >
              Regístrate aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
