import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoUsm from '../assets/images/fondousm.png';
import logoUsmBlanco from '../assets/images/blancousmlogo.png';


export default function Register() {
  const [invitationCode, setInvitationCode] = useState('');
  const [codeStatus, setCodeStatus] = useState('idle'); // idle | valid | invalid
  const [codeError, setCodeError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleValidateCode = () => {
    const trimmed = invitationCode.trim();

    if (!trimmed) {
      setCodeStatus('invalid');
      setCodeError('Debes ingresar el código de invitación.');
      return;
    }

    if (trimmed.length < 6) {
      setCodeStatus('invalid');
      setCodeError('El código de invitación no parece válido. Verifica e inténtalo de nuevo.');
      return;
    }

    setCodeStatus('valid');
    setCodeError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (codeStatus !== 'valid') {
      setCodeError('Debes validar un código de invitación válido antes de continuar.');
      return;
    }

    if (!email.endsWith('@usm.edu.ve')) {
      setEmailError('El correo debe ser institucional (@usm.edu.ve)');
      return;
    }

    setEmailError('');
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
            Registro para estudiantes y personal docente del Servicio Comunitario USM.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-[#f5f5f5] flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-3xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#1e40af] mb-6 text-center">Registro mediante invitación</h2>

          <form
            className="bg-white rounded-2xl shadow p-4 md:p-6 w-full flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1746b0] text-center">Acceso al sistema de Servicio Comunitario</h3>
              <p className="text-center text-gray-600 text-sm max-w-xl mx-auto">
                Ingresa el código de invitación que recibiste por correo institucional. El tipo de acceso (estudiante o
                autoridad) se asignará automáticamente según ese código.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-end gap-3">
                <div className="flex-1 flex flex-col">
                  <label className="text-sm font-semibold mb-0.5">Código de invitación *</label>
                  <input
                    type="text"
                    placeholder="Ej: USM-ABC123"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm"
                    value={invitationCode}
                    onChange={(e) => setInvitationCode(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleValidateCode}
                  className="whitespace-nowrap bg-[#1746b0] hover:bg-[#1746b0]/90 text-white font-semibold rounded-xl px-5 py-2 text-sm"
                >
                  Validar código
                </button>
              </div>

              {codeStatus === 'valid' && (
                <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md px-3 py-2">
                  Código válido. Al completar el registro, tu perfil quedará asociado al rol definido en la invitación.
                </p>
              )}
              {codeStatus === 'invalid' && codeError && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">{codeError}</p>
              )}

              <div className="bg-blue-50 text-blue-800 text-xs rounded-md px-3 py-2 flex flex-col gap-1 border border-blue-100">
                <span className="font-semibold">¿No tienes un código de invitación?</span>
                <span>
                  El acceso al sistema se realiza solo mediante invitación. Si eres estudiante o autoridad, puedes
                  solicitarlo al equipo de Servicio Comunitario escribiendo a{' '}
                  <a
                    href="mailto:servicio.comunitario@usm.edu.ve?subject=Solicitud%20de%20c%C3%B3digo%20de%20invitaci%C3%B3n"
                    className="underline font-semibold"
                  >
                    servicio.comunitario@usm.edu.ve
                  </a>
                  .
                </span>
              </div>
            </div>

            <fieldset
              disabled={codeStatus !== 'valid'}
              className={`mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 dark:text-black ${
                codeStatus !== 'valid' ? 'opacity-60 pointer-events-none' : ''
              }`}
            >
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-0.5">Nombres *</label>
                <input
                  type="text"
                  placeholder="Ingresa tus nombres"
                  className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-0.5">Apellidos *</label>
                <input
                  type="text"
                  placeholder="Ingresa tus apellidos"
                  className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm"
                  required
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold mb-0.5">Correo electrónico institucional *</label>
                <input
                  type="email"
                  placeholder="tucorreo@usm.edu.ve"
                  className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span className="text-xs text-red-600 mt-1">{emailError}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-0.5">Teléfono de contacto</label>
                <input
                  type="tel"
                  placeholder="0414-1234567"
                  className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-0.5">Observaciones (opcional)</label>
                <input
                  type="text"
                  placeholder="Ej: Facultad / Escuela / Cargo"
                  className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1746b0] bg-[#f6f8fa] text-sm"
                />
              </div>
            </fieldset>

            {codeStatus !== 'valid' && (
              <p className="text-xs text-gray-500 mt-1">
                Primero valida tu código de invitación para completar tus datos personales.
              </p>
            )}

            <button
              type="submit"
              className="bg-[#0a3db4] hover:bg-[#1746b0] text-white font-bold rounded-xl px-6 py-2 text-base mt-2 shadow-md transition-colors"
            >
              Completar registro
            </button>
          </form>

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
    </div>
  );
}
