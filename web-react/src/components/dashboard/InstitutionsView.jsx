
import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const facultyInstitutionTypes = [
	{
		faculty: 'Odontología',
		description: 'Escuela de Odontología',
		institutions: [
			'Ambulatorios y centros de salud públicos con programas de atención odontológica comunitaria',
			'Clínicas odontológicas universitarias o convenios docentes-asistenciales',
			'Fundaciones y ONG que desarrollen jornadas de salud bucal en comunidades',
		],
	},
	{
		faculty: 'Farmacia',
		description: 'Escuela de Farmacia',
		institutions: [
			'Hospitales y ambulatorios públicos con servicios de farmacia hospitalaria',
			'Programas comunitarios de uso racional de medicamentos',
			'Organizaciones que trabajen en educación sanitaria y prevención de enfermedades',
		],
	},
	{
		faculty: 'Derecho',
		description: 'Escuela de Derecho y Escuela de Estudios Internacionales',
		institutions: [
			'Consultorios jurídicos populares o clínicas jurídicas universitarias',
			'Organizaciones que brinden asesoría legal gratuita a comunidades vulnerables',
			'Instituciones públicas vinculadas a la defensa de derechos humanos y ciudadanía',
		],
	},
	{
		faculty: 'FACES',
		description:
			'Escuela de Economía, Escuela de Comunicación Social, Escuela de Administración, Escuela de Contaduría Pública',
		institutions: [
			'Organismos públicos o municipales con programas de desarrollo comunitario y emprendimiento',
			'ONG y fundaciones que trabajen en formación financiera, emprendimiento o inclusión social',
			'Medios comunitarios, proyectos de comunicación para el desarrollo o educación ciudadana',
		],
	},
	{
		faculty: 'Ingeniería y Arquitectura',
		description:
			'Escuela de Ing. en Sistemas, Escuela de Arquitectura, Escuela de Ing. Civil, Escuela de Ing. en Telecomunicaciones',
		institutions: [
			'Organismos públicos dedicados a infraestructura, urbanismo, servicios básicos o telecomunicaciones',
			'Comunidades organizadas con proyectos de mejora de espacios públicos o conectividad',
			'Fundaciones u ONG que desarrollen proyectos de tecnología, hábitat o gestión de riesgos',
		],
	},
];

export default function InstitutionsView() {
	return (
		<div className="max-w-[1600px] mx-auto p-8 space-y-8">
			<div className="flex items-center justify-between gap-4 flex-wrap">
				<div>
					<h1 className="text-gray-900 dark:text-white mb-2 font-bold text-2xl">
						Instituciones para Servicio Comunitario
					</h1>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl">
						En esta sección encontrarás ejemplos de tipos de instituciones donde se
						puede realizar el servicio comunitario, según tu facultad. La
						asignación específica siempre se coordina con la unidad de Servicio
						Comunitario de la universidad.
					</p>
				</div>
			</div>

			<div className="grid lg:grid-cols-3 gap-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
				>
					<div className="flex items-start gap-4 mb-4">
						<div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
							<Building2 className="text-blue-600 dark:text-blue-400" size={28} />
						</div>
						<div className="space-y-1">
							<h2 className="text-gray-900 dark:text-white text-lg font-semibold">
								Tipos de instituciones según facultad
							</h2>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Esta información es orientativa. Las instituciones concretas se
								definen de acuerdo con la normativa y los convenios vigentes de la
								universidad.
							</p>
						</div>
					</div>

					<div className="space-y-4">
						{facultyInstitutionTypes.map((item) => (
							<div
								key={item.faculty}
								className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50/80 dark:bg-gray-900/40"
							>
								<h3 className="text-gray-900 dark:text-white font-semibold">
									{item.faculty}
								</h3>
								{item.description && (
									<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
										{item.description}
									</p>
								)}
								<ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
									{item.institutions.map((institution) => (
										<li key={institution}>{institution}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-4"
				>
					<h3 className="text-gray-900 dark:text-white">Recomendaciones generales</h3>
					<div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
						<p>
							Antes de proponer o solicitar una institución, verifica siempre con la
								coordinación de Servicio Comunitario de tu facultad.
						</p>
						<ul className="list-disc list-inside space-y-1">
							<li>
								La institución debe tener capacidad real para recibir estudiantes y
								ofrecer actividades alineadas con tu perfil académico.
							</li>
							<li>
								Prioriza proyectos con impacto social claro en comunidades o grupos
								vulnerables.
							</li>
							<li>
								Respeta siempre la normativa interna de la universidad y los
								protocolos de cada institución.
							</li>
						</ul>
					</div>
				</motion.div>
			</div>

			<div className="space-y-4">
				<h3 className="text-gray-900 dark:text-white">¿Cómo se define tu institución?</h3>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 p-8 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400"
				>
					<p className="mb-2">
						La asignación final de la institución donde realizarás tu servicio
						comunitario se coordina con las autoridades de tu facultad y la unidad
						responsable del programa.
					</p>
					<p className="text-sm">
						Si tienes dudas sobre si una institución es válida o sobre los pasos a
						seguir, comunícate con la coordinación de Servicio Comunitario de tu
						facultad.
					</p>
				</motion.div>
			</div>
		</div>
	);
}

