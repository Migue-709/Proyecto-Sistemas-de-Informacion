
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Users, ClipboardList, Plus } from 'lucide-react';

export default function InstitutionsView() {
	return (
		<div className="max-w-[1600px] mx-auto p-8 space-y-8">
			<div className="flex items-center justify-between gap-4 flex-wrap">
				<div>
					<h1 className="text-gray-900 mb-2">Instituciones</h1>
					<p className="text-gray-600">
						Información sobre instituciones disponibles para el servicio comunitario.
					</p>
				</div>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
				>
					<Plus size={20} />
					<span>Nueva institución</span>
				</motion.button>
			</div>

			<div className="grid lg:grid-cols-3 gap-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-center"
				>
					<div className="flex items-start gap-4">
						<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
							<Building2 className="text-blue-600" size={28} />
						</div>
						<div className="space-y-2">
							<h2 className="text-gray-900">Institución principal</h2>
							<p className="text-gray-600 text-sm">
								Aún no hay una institución principal registrada para este proyecto de servicio comunitario.
							</p>
							<div className="grid sm:grid-cols-3 gap-4 mt-4">
								<div className="rounded-xl border border-dashed border-gray-200 p-3 flex items-center gap-2 text-gray-500 text-sm">
									<MapPin size={16} className="text-gray-400" />
									<span>Dirección pendiente</span>
								</div>
								<div className="rounded-xl border border-dashed border-gray-200 p-3 flex items-center gap-2 text-gray-500 text-sm">
									<Users size={16} className="text-gray-400" />
									<span>Responsables por definir</span>
								</div>
								<div className="rounded-xl border border-dashed border-gray-200 p-3 flex items-center gap-2 text-gray-500 text-sm">
									<ClipboardList size={16} className="text-gray-400" />
									<span>Convenio no configurado</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4"
				>
					<h3 className="text-gray-900">Resumen de instituciones</h3>
					<div className="space-y-3 text-sm text-gray-600">
						<div className="flex items-center justify-between">
							<span>Instituciones registradas</span>
							<span className="font-medium text-gray-900">0</span>
						</div>
						<div className="flex items-center justify-between">
							<span>Estudiantes activos</span>
							<span className="font-medium text-gray-900">0</span>
						</div>
					</div>
				</motion.div>
			</div>

			<div className="space-y-4">
				<h3 className="text-gray-900">Otras instituciones</h3>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="rounded-2xl border border-dashed border-gray-200 p-8 bg-white text-center text-gray-500"
				>
					<Building2 className="mx-auto mb-3 text-gray-400" size={32} />
					<p className="mb-1">Todavía no hay instituciones registradas.</p>
					<p className="text-sm">
						Cuando se agreguen, aparecerán aquí con información detallada.
					</p>
				</motion.div>
			</div>
		</div>
	);
}

