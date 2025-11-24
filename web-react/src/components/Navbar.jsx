import React from 'react';
import { useNavigate } from 'react-router-dom';
import usmlogo from '../assets/images/usmlogo.png';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <img
            src={usmlogo}
            alt="USM Logo"
            className="h-16 w-auto mr-3"
            style={{ minWidth: 64 }}
          />
          <div className="flex flex-col text-left justify-center" style={{ lineHeight: '1' }}>
            <span className="font-bold text-base md:text-lg m-0 p-0" style={{ color: '#0d65e4', marginBottom: '-5px' }}>
              UNIVERSIDAD
            </span>
            <span className="font-bold text-base md:text-lg m-0 p-0" style={{ color: '#0d65e4', marginTop: '-5px' }}>
              SANTA MARÍA
            </span>
          </div>
        </div>
        <div className="flex-1" />
        <button
          className="text-white font-semibold bg-[#0d65e4] hover:bg-[#1746b0] px-6 py-2 rounded-xl transition-colors ml-auto"
          onClick={() => navigate('/login')}
        >
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
}
