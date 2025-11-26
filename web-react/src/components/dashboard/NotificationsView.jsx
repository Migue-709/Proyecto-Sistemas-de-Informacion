
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail, Calendar, AlertCircle } from 'lucide-react';

export default function NotificationsView() {
	return (
		<div className="max-w-[1400px] mx-auto p-8 space-y-8">
			<div className="flex items-center justify-between flex-wrap gap-4">
				<div>
					<h1 className="text-gray-900 mb-2">Notificaciones</h1>
					<p className="text-gray-600">
						Aquí verás tus notificaciones y avisos.
					</p>
				</div>
			</div>

			<div className="grid lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2 space-y-4">
					<div className="flex items-center justify-between mb-2">
						<h2 className="text-gray-900">Centro de notificaciones</h2>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="rounded-2xl bg-white border border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center text-gray-500"
					>
						<Bell className="mb-3 text-gray-400" size={40} />
						<p className="mb-1 text-gray-700">Todavía no tienes notificaciones.</p>
					</motion.div>
				</div>

				<div className="space-y-4">
					<h2 className="text-gray-900">Resumen</h2>
					<div className="grid gap-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="p-5 rounded-2xl bg-white border border-gray-200 flex items-center justify-between gap-4"
						>
							<div>
								<p className="text-sm text-gray-500">Nuevas</p>
								<p className="text-2xl font-semibold text-gray-900">0</p>
							</div>
							<div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
								<Bell className="text-blue-600" size={22} />
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.05 }}
							className="p-5 rounded-2xl bg-white border border-gray-200 flex items-center justify-between gap-4"
						>
							<div>
								<p className="text-sm text-gray-500">Sin leer</p>
								<p className="text-2xl font-semibold text-gray-900">0</p>
							</div>
							<div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
								<Mail className="text-emerald-600" size={22} />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

