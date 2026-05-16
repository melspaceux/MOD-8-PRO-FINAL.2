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

## Estructura del Proyecto
- `src/`: Carpeta principal del código fuente.
  - `assets/`: Imágenes, fuentes y archivos estáticos.
  - `components/`: Componentes reutilizables de la interfaz.
  - `context/`: Gestión de estados globales.
  - `hooks/`: Hooks personalizados.
  - `pages/`: Vistas completas de la aplicación.
  - `services/`: Configuración de servicios y llamadas a APIs externas.
- `public/`: Archivos públicos que no pasan por el proceso de build.
- `README.md`: Documentación, acuerdos y descripción.
