# Plan exhaustivo para diagramas de procesos en Mermaid

Objetivo: documentar y generar todos los diagramas de procesos en Mermaid que describen el "Sistema de Gestión y Control para Servicio Comunitario" del ante-proyecto, verificando su compilación con `mmdc` y manteniendo todo en español.

## Alcance y roles
- Alcance: flujo completo desde postulación hasta certificación de horas, gestión de proyectos, control de acceso y reportes.
- Roles/Sistemas: Estudiante, Tutor/Profesor de Servicio Comunitario, Coordinación FACES, Académico/Autoridades, Sistema de Autenticación (USM), Plataforma Web (módulos SC), Repositorio de datos.

## Conjunto de diagramas a producir (Mermaid únicamente)
1. **Flujo macro TO-BE de Servicio Comunitario** (postulación → asignación → ejecución → validación → certificación).
2. **Gestión y aprobación de proyectos** (creación de proyecto, revisión coordinación, publicación, asignación de estudiantes).
3. **Registro y validación de horas/actividades** (estudiante reporta, tutor valida, coordinación consolida).
4. **Control de acceso y perfiles** (inicio de sesión, validación de pertenencia USM, selección de rol, permisos por módulo).
5. **Gestión de evidencias y entregables** (subida de documentos, revisión, aceptación/rechazo con observaciones).
6. **Generación de reportes y auditoría** (coordinación consolida métricas, autoridades consumen informes, bitácora de cambios).

## Artefactos y convenciones
- Formato fuente: archivos `.mmd` en `./diagramas/` con nombres descriptivos (ej. `01-flujo-macro.mmd`).
- Sintaxis: Mermaid `flowchart` (con subgraph para swimlanes) o `journey` si aplica; no usar notaciones ajenas a Mermaid.
- Idioma de textos y etiquetas: español.
- Cada archivo tendrá cabecera de contexto (título, objetivo, actores).

## Pasos para cada diagrama
1) **Bocetar secuencia** con los pasos del proceso y roles involucrados según el ante-proyecto.
2) **Redactar Mermaid** con nodos claros (verbo + objeto) y decisiones binarias etiquetadas.
3) **Guardar como `.mmd`** en `./diagramas/` siguiendo el orden de la lista.
4) **Compilar con mmdc**: `mmdc -i ./diagramas/<nombre>.mmd -o ./diagramas/<nombre>.svg` (o `.png`).
5) **Corregir hasta que compile** sin errores; documentar ajustes si hay ambigüedades.
6) **Verificación manual**: revisar legibilidad (flechas, rutas exclusivas, responsables en subgraph, inicios/fin claros).

## Plan de ejecución y cierre
- Orden de trabajo: seguir numeración 1→6; no cerrar el plan hasta que los 6 diagramas compilen con `mmdc`.
- Evidencia: conservar tanto `.mmd` como el artefacto generado (`.svg`/`.png`) en `./diagramas/`.
- Control de cambios: si surge un flujo nuevo en el ante-proyecto, añadir un diagrama adicional y repetir el ciclo.
- Criterio de finalización: todos los diagramas listados escritos en Mermaid, compilados exitosamente con `mmdc` y revisados por legibilidad.
