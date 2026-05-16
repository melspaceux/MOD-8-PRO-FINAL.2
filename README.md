# Catálogo Interactivo de Productos

Este proyecto es una aplicación web desarrollada con React que permite a los usuarios explorar un catálogo de productos de forma interactiva. Es parte del Proyecto Final del curso.

## Objetivo
El objetivo de este proyecto es aprender a crear una aplicación Front End de forma paulatina, aplicando conceptos avanzados de React y profundizando en el desarrollo de interfaces modernas y escalables.

## Acuerdos de Trabajo
- **Dinámica:** Trabajo Individual.
- **Metodología:** Autogestión siguiendo los lineamientos del curso y el marco de trabajo SCRUM para la organización de tareas.
- **Control de Versiones:** Uso de Git y GitHub como repositorio principal.
- **Commits:** Se realizarán commits descriptivos para cada hito alcanzado.
- **Documentación:** El archivo README.md se mantendrá actualizado con el progreso del proyecto.

## Backend y Comunicación
Para este proyecto se ha seleccionado la **Fake Store API** como backend principal para el catálogo de productos.
- **URL Base:** `https://fakestoreapi.com`
- **Lógica de Comunicación:** Se utiliza la librería **Axios** para realizar las peticiones HTTP desde el frontend.
- **Servicios:** La configuración y funciones de llamada a la API se encuentran en `src/services/api.js`.

## CI/CD y Despliegue
Este proyecto utiliza un flujo de **Integración Continua (CI)** y **Despliegue Continuo (CD)**:
- **CI (GitHub Actions):** Cada push a la rama `main` activa un workflow automático que instala dependencias y verifica que el proyecto compila correctamente.
- **CD (Vercel):** La aplicación está conectada a **Vercel**, lo que permite despliegues automáticos cada vez que se actualiza el código en el repositorio de GitHub.

### Cómo desplegar:
1. Conecta tu repositorio de GitHub a Vercel.
2. Vercel detectará automáticamente la configuración de Vite.
3. El archivo `vercel.json` asegura que las rutas de React Router funcionen correctamente en producción.

## Estructura del Proyecto
- `.github/workflows/`: Pipelines de automatización.
- `src/`: Carpeta principal del código fuente.
  - `assets/`: Imágenes, fuentes y archivos estáticos.
  - `components/`: Componentes reutilizables de la interfaz.
  - `context/`: Gestión de estados globales.
  - `hooks/`: Hooks personalizados.
  - `pages/`: Vistas completas de la aplicación.
  - `services/`: Configuración de servicios y llamadas a APIs externas.
- `public/`: Archivos públicos que no pasan por el proceso de build.
- `README.md`: Documentación, acuerdos y descripción.
