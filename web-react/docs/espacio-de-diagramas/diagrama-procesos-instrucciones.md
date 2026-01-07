# Qué es un diagrama de procesos en ingeniería de software

Un diagrama de procesos representa, de forma visual y secuencial, las actividades, decisiones, actores y artefactos involucrados en un flujo de trabajo de software (por ejemplo: ciclo de vida de requerimientos, pipeline CI/CD o flujo de despliegue). Sirve para alinear a los equipos sobre qué sucede, en qué orden, quién participa y qué entradas/salidas existen.

Este documento parte de una explicación introductoria y progresa hacia prácticas avanzadas para uso industrial: modelado, automatización, control y gobernanza, asegurando que los diagramas puedan ser usados como fuente de verdad y base para la ejecución y la mejora continua.

## Cuándo usarlo
- Para comprender o documentar un flujo existente (descubrir cuellos de botella, retrabajos, riesgos).
- Para diseñar o proponer un flujo objetivo (estandarizar prácticas, reducir variabilidad).
- Para comunicar acuerdos operativos entre roles (dev, QA, SRE, producto).
- Para preparar automatizaciones o procesos ejecutables (orquestadores, BPMN/Workflows).
- Para auditar, cumplir normativas y demostrar control de procesos en entornos con requisitos regulatorios.

## Beneficios clave (industrial)
- Visibilidad y gobernanza: fuente de verdad compartida con trazabilidad de cambios y dueños claros.
- Ejecución automatizada: permite mapear pasos a tareas automáticas o semi-automáticas, integrables con orquestadores.
- Mejora continua y métricas: facilita medir eficiencia, tiempos de ciclo y puntos de falla (SLAs/SLOs).
- Auditoría y cumplimiento: documentación reproducible para auditorías y controles.
- Reducción de riesgos: modelado de excepciones, compensaciones y límites transaccionales.

## Símbolos y notaciones (BPMN 2.0 simplificado / Mermaid)
- Inicio/Fin: óvalo.
- Actividad/Tarea: rectángulo (userTask, serviceTask, scriptTask según BPMN).
- Decisión/Condición: rombo (gateway - exclusive, parallel, inclusive).
- Conectores: flechas que indican dirección del flujo (sequence flow vs message flow).
- Subproceso/Call Activity: rectángulo con doble borde o referencia a diagrama independiente.
- Piscinas/Líneas de nado (swimlanes): separan responsables, sistemas o dominios.
- Artefactos/Entradas-Salidas: documentos, tickets, binarios, ambientes.
- Eventos: temporizadores, mensajes, errores (intermediate/boundary events) para modelar latencia o fallas.

En Mermaid, usamos `flowchart` y `subgraph` para swimlanes; para procesos ejecutables o complejos, preferir BPMN (Camunda Modeler/PlantUML) si se requiere ejecución.

## Principios de ingeniería de procesos
- Claridad: eliminar ambigüedades; una tarea debe describir qué, cómo y quién (verbo + objeto + rol).
- Propiedad: cada paso debe tener un dueño (RACI aplicado a diagramas).
- Unicidad de propósito: cada diagrama/modelo responde a una pregunta de negocio o técnica clara.
- Observabilidad: modelar puntos de medición (timming, métricas, logs, correlación de trazas).
- Resiliencia y seguridad: modelar timeouts, reintentos, compensaciones y validación de datos sensibles.
- Automatización-primero: siempre que sea posible, modelar tareas pensadas para ser automatizadas y testables.
- Versionado y trazabilidad: conservar histórico, metadatos (versión, autor, fecha, impacto).
- Mantenibilidad: mantener niveles de abstracción claros y reutilizables (subprocesos, plantillas).

## Metodologías y técnicas avanzadas
- SIPOC y VSM (Value Stream Mapping): para identificar proveedores, entradas, procesos, salidas y clientes; reducir desperdicio.
- RACI / DACI: clarificar roles y decisiones.
- PDCA / Kaizen / Lean: establecer ciclos de mejora continua sobre los procesos modelados.
- Event Storming & Domain-Driven Design: identificar límites del dominio y diseñar orquestación vs coreografía.
- DMAIC y Six Sigma: para procesos críticos con métricas de calidad.

## Modelado: AS-IS vs TO-BE y niveles de detalle (LOD)
- LOD0 (macro): visión ejecutiva con inicios y fines y los principales hitos.
- LOD1 (proceso): pasos principales, roles y decisiones claves.
- LOD2 (tarea): subtareas, puntos de integración, eventos de error.
- LOD3 (implementación): detalles técnicos, llamadas a APIs, consideraciones de seguridad y compensación.

Buenas prácticas:
- Mantener un diagrama principal (LOD0/LOD1) y linkear a diagramas LOD2/LOD3 como subprocesos.
- Marcar claramente AS-IS y TO-BE para evitar confundir operación actual con objetivos futuros.

## Diagramación avanzada y patrones (ejemplos)
- Orquestación vs Coreografía: usa orquestador central cuando necesites control y visibilidad; coreografía para sistemas distribuidos con eventos.
- Sagas/Compensaciones: modela pasos compensatorios para transacciones distribuidas (ej.: cancelar-reserva, revertir pagos).
- Boundary events y timeouts: para evitar procesos bloqueados por tareas humanas u operaciones externas.
- Retries, backoff y circuit-breakers: para pasos de integración con terceros.
- Paralelismo y joins: modelar sincronización y esperas; usar gateways para evitar condiciones de carrera.
- Decision services: extraer reglas de negocio (BRMS) cuando las decisiones son complejas o volátiles.
- Human tasks y SLAs: modelar colas, tiempos de espera y escalamiento para aprobaciones manuales.
- Logging & Correlation ID: asegura que todos los pasos pueden correlacionarse para trazas distribuidas.

## Mapear diagramas a la ejecución y a la automatización
- Identificar qué nodos son "ServiceTasks" (automatizables), cuál es "UserTask" (interacción humana) y cuál es "ScriptTask".
- Diseñar para idempotencia: las acciones automatizadas deben poder reintentarse sin efectos adversos.
- Externalizar integraciones en adaptadores/cola de mensajes para desacoplar y facilitar pruebas.
- Aprovechar orquestadores BPMN (Camunda, Zeebe) o workflow-as-code (Temporal, AWS Step Functions) para pasar de diagramas a ejecución.

## Testing, validación y simulación
- Validación sintáctica: usar validadores (Camunda Modeler, plantuml-lint para BPMN o validadores de Mermaid).
- Test de flujo: simular procesos para validar caminos felices y alternativos.
- Unit/integration tests: para tareas automatizadas, usar pruebas que simulen inputs/outputs esperados.
- Contratos y pruebas de mensajes: si el proceso consume/produce eventos, mantener contract tests con proveedores.
- Validación de SLAs/SLOs: pruebas de carga y performance para pasos críticos.

## Gobernanza, control de cambios y CI/CD
- Diagrama como código: mantener .mmd/.bpmn en `./diagramas/` y versionarlo en Git.
- PR y revisión: cambiar diagramas mediante Pull Requests; revisar impacto funcional y operativo.
- Validación en CI: compilar con `mmdc` (Mermaid) o validar BPMN en el pipeline; ejecutar linters y verificadores.
- Metadata mínima en cada archivo: título, autor, versión, fecha, contactos, ámbito (AS-IS|TO-BE), impacto.
- Control de cambios basado en riesgo: cambios mayores requieren aprobación (ej. cambios que afectan SLAs o seguridad).

## Observabilidad y métricas operativas
- Medir: tiempo de ciclo, tiempo de espera por tarea, throughput, tasa de reintentos, tasa de fallas, tasa de rework.
- Asociar métricas a nodos: marcar en el diagrama los KPIs relevantes y su SLO objetivo.
- Monitoreo: exponer métricas a herramientas de observabilidad (Prometheus, Datadog) y dashboards.
- Alertas y Runbooks: definir umbrales y procedimientos de escalamiento en caso de degradación.

## Seguridad y cumplimiento
- Identificar flujos con datos sensibles; modelarlos y marcar restricciones (encriptación, retención).
- Separación de deberes: tareas que cambian datos sensibles o estados críticos requieren roles distintos.
- Auditoría: modelar eventos de auditoría y conservar logs firmados donde aplique.
- Integración con políticas de acceso: limitar edición/ejecución según permisos y roles.

## Convenciones y estilos (consistencia)
- Nombres: verbo + objeto + (rol opcional) -> "Validar ticket (QA)".
- IDs y versionado: `PROC-01_FlujoMacro_v1.2` o `PROC-01-FLUJO-MACRO@2025-12-08`.
- Plantilla de cabecera para cada archivo `.mmd`/`.bpmn`:
  - Título
  - Objetivo y alcance
  - Autor / Dueño
  - Versión y fecha
  - Notas de cambio (breve)

## Anti-patrones a evitar
- Diagramas "monstruo": demasiada información en un solo diagrama.
- Decisiones sin criterios: rombos sin condición explícita.
- Falta de dueños: tareas sin responsable o con responsabilidades cruzadas.
- Modelos no validados: diagramas sólo teóricos sin simulación ni pruebas.
- Exceso de detalle técnico en LOD0/1: evitar mostrar APIs y endpoints en nivel macro.

## Integración en el flujo de trabajo del equipo
- Usar PR para cambios; validar en CI y compilar con `mmdc`:
  - `mmdc -i ./diagramas/01-flujo-macro.mmd -o ./diagramas/01-flujo-macro.svg`
- Revisiones periódicas: calendarizar revisiones de proceso y mantener la versión TO-BE alineada con el roadmap.
- Socialización: presentaciones internas, talleres de Event Storming y validación con stakeholders.

## Checklist avanzada antes de publicar (industrial)
- [ ] Inicio y fin definidos y documentados.
- [ ] Nivel de detalle (LOD) apropiado al público objetivo.
- [ ] Cada paso tiene responsable y entrada/salida clara.
- [ ] Decisiones con criterios claros y rutas etiquetadas.
- [ ] Riesgos y excepciones modelados (retries, compensaciones, timeouts).
- [ ] Métricas y SLOs definidos y asignados a nodos críticos.
- [ ] Validación sintáctica (Mermaid/BPMN) pasada en CI.
- [ ] Archivo fuente versionado en Git y compilado en CI (artefacto `.svg`/`.png`).
- [ ] PR con revisión de al menos un subject-matter expert y un owner.
- [ ] Clasificación de impacto y aprobación (cambios críticos requieren sign-off).
- [ ] Consideraciones de seguridad y cumplimiento anotadas.
- [ ] Runbooks/escalamiento documentado para pasos críticos.
- [ ] Tests o simulaciones que validen caminos críticos y excepciones.

## Herramientas recomendadas (industrial)
- Modelado y ejecución: Camunda Modeler (BPMN 2.0), Zeebe, Temporal.
- Diagram-as-code: Mermaid, PlantUML.
- Compilación y verificación: `mmdc`, linters de BPMN, validadores (Camunda Modeler incl.).
- Repositorio y CI: GitHub/GitLab + CI que compile y valide diagramas.
- Observabilidad: Prometheus/Grafana, Datadog, Sentry para correlación de errores.

## Plantilla de header mínima para cada diagrama
```markdown
# Título
Objetivo: (una frase clara)
Alcance: (límites: inicio - fin)
Dueño: nombre@dominio
Versión: v1.0
AS-IS|TO-BE: TO-BE
Notas: cambios, decisiones relevantes
```

## Resumen final
Los diagramas de procesos son artefactos técnicos y de negocio que deben ser diseñados desde la visión del producto hasta la operación. Para uso industrial, los diagramas deben ser claros, ejecutables o mapeables a automatización, versionados, validados y gobernados. Cualquier equipo que trate procesos críticos debe incorporar metodologías de medición (SLOs/KPIs), pruebas, observabilidad y control de cambios para que los diagramas aporten valor real y sostenibilidad operativa.

## Checklist rápida antes de publicar (original)
- [ ] ¿Inicio y fin definidos?
- [ ] ¿Cada paso tiene responsable y entrada/salida?
- [ ] ¿Las decisiones tienen salidas exclusivas y etiquetadas?
- [ ] ¿Se distinguen rutas alternativas y excepciones?
- [ ] ¿El público objetivo entiende el nivel de detalle?
- [ ] ¿El archivo fuente está versionado en el repo?
