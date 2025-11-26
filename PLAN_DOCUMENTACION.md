# Plan de Documentación para Diagramas de Procesos

## Objetivo
Documentar los procesos del sistema de gestión de Servicio Comunitario de la Universidad Santa María para crear diagramas de procesos en PlantUML.

---

## Procesos Identificados

### 1. Navegación General
- **Entrada**: Usuario accede a la aplicación
- **Rutas**: `/` (Welcome) → `/login` | `/register` | `/dashboard`
- **Actores**: Usuario (Estudiante/Docente)

### 2. Registro de Usuario
- **Entrada**: Usuario selecciona "Registro"
- **Pasos**:
  1. Selección de tipo (Estudiante/Docente)
  2. Completar formulario según tipo
  3. Envío de datos
- **Salida**: Usuario registrado

### 3. Inicio de Sesión
- **Entrada**: Usuario accede a `/login`
- **Pasos**:
  1. Ingreso de credenciales (correo/contraseña)
  2. Validación
  3. Redirección a Dashboard
- **Salida**: Sesión activa

### 4. Dashboard - Panel Principal
- **Secciones**:
  - Overview (Estadísticas, Progreso, Tareas)
  - Documentos
  - Cronograma
  - Instituciones
  - Reportes
  - Configuración
  - Ayuda
  - Notificaciones

### 5. Gestión de Documentos
- **Acciones**:
  1. Subir documento
  2. Ver documentos (filtros: todos/pendientes/aprobados/rechazados)
  3. Descargar/Eliminar

### 6. Gestión de Cronograma
- **Acciones**:
  1. Crear actividad
  2. Visualizar calendario
  3. Ver próximas actividades

---

## Estructura de Diagramas
Los diagramas PlantUML se encuentran en: `/docs/diagramas/`

| Archivo | Descripción |
|---------|-------------|
| `proceso_navegacion.puml` | Flujo de navegación general |
| `proceso_registro.puml` | Proceso de registro de usuarios |
| `proceso_login.puml` | Proceso de inicio de sesión |
| `proceso_dashboard.puml` | Navegación y funciones del Dashboard |
| `proceso_documentos.puml` | Gestión de documentos |
| `proceso_cronograma.puml` | Gestión de actividades |

---

## Convenciones PlantUML
- Actores: `actor Usuario`
- Participantes: `participant Sistema`
- Actividades: `rectangle "Acción" as accion`
- Decisiones: `if (condición?) then (sí)` / `else (no)`
