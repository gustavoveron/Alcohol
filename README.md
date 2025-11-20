# Estudio sobre Perfiles de Decisión y Hábitos de Consumo

Este repositorio contiene el código fuente y los recursos para una batería experimental online desarrollada por el **Laboratorio de Inteligencia Artificial Aplicada (LIAA)** (UBA/CONICET).

El estudio investiga la relación entre la toma de decisiones bajo incertidumbre, la percepción interoceptiva y los hábitos de consumo de alcohol.

## 📋 Contenido del Experimento

La batería está programada en **PsychoJS (PsychoPy)** y consta de dos bloques principales:

### 1. Cuestionarios (Escalas)
Se administran 4 instrumentos psicométricos digitalizados:
* **AUDIT:** Test de Identificación de Trastornos por Uso de Alcohol.
* **TAS-20:** Escala de Alexitimia de Toronto (evaluación de emociones).
* **BPQ-SF:** Cuestionario de Percepción Corporal (sensibilidad interoceptiva).
* **PACS:** Escala de Craving de Alcohol de Penn.

### 2. Tarea Experimental
* **Iowa Gambling Task (IGT):** Una versión gamificada de la clásica tarea de toma de decisiones. Los participantes comienzan con un saldo virtual y deben aprender a maximizar sus ganancias eligiendo entre mazos ventajosos y desventajosos a lo largo de 100 ensayos.

## 🚀 Despliegue e Instalación

Este experimento ha sido adaptado específicamente para ejecutarse en la plataforma **DataPruebas** (basada en Django), pero es compatible con cualquier servidor web estándar con mínimas modificaciones.

### Estructura de Archivos Clave

* **`index.html`**: Punto de entrada. Carga las librerías `PreloadJS` y `PsychoJS` e inicia el script principal.
* **`Questionaire_IGT.js`**: **CORE DEL EXPERIMENTO.** Contiene toda la lógica de la tarea.
    * *Nota:* Este archivo fue modificado manualmente para manejar la comunicación con la API de DataPruebas (ver sección *Integración API*).
* **Archivos `.csv`** (`audit.csv`, `tas20.csv`, etc.): Contienen las preguntas y opciones de respuesta que alimentan los bucles del experimento.
* **Archivos `psychojs-*.js`**: Librerías del motor PsychoJS necesarias para la ejecución.

## 📊 Output de Datos

El experimento genera un archivo CSV por participante que incluye:
* Respuestas ítem por ítem de los cuestionarios.
* Tiempos de reacción (RT) por pregunta.
* Secuencia completa de elecciones en la IGT (Mazo A, B, C, D).

**Diseño y Desarrollo:** Dr. Gustavo L. Verón
**Institución:** Laboratorio de Inteligencia Artificial Aplicada (LIAA) - ICC - UBA/CONICET
