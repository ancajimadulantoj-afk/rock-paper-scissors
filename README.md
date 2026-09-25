# Rock, Paper, Scissors

Un juego interactivo de piedra, papel o tijeras creado como proyecto del curso The Odin Project.

## Acerca del proyecto

Este proyecto se hizo en dos etapas: primero una versión por consola (usando `prompt()` y `console.log()`), y luego una versión con interfaz gráfica completa, donde el jugador elige haciendo clic en botones y los resultados se muestran en tiempo real en la página.

## Funcionalidades incluidas

- Elección del jugador mediante 3 botones (rock, paper, scissors) con íconos
- Elección aleatoria de la computadora con `Math.random()`
- Marcador en tiempo real, siempre visible
- Historial de mensajes con scroll propio, mostrando la ronda más reciente primero
- Fin de partida automático al llegar a 5 rondas ganadas, con botones deshabilitados
- Botón de reinicio que aparece solo al terminar la partida, restaurando el juego por completo
- Efectos visuales con `:hover` y `transition` en los botones

## Construido con

- HTML5
- CSS3
- JavaScript

## Lo que aprendí

- Manipulación del DOM: crear, modificar y eliminar elementos dinámicamente
- Manejo de eventos con `addEventListener`
- Ámbito de variables (global vs. local) y por qué importa para mantener estado entre interacciones
- Uso de `disabled` para controlar la interactividad de elementos
- Buenas prácticas para evitar acumulación de elementos duplicados en el DOM
- Estilos con `:hover` y `transition` para dar retroalimentación visual
- Flujo de trabajo con ramas de Git (crear rama, publicar, hacer commits incrementales)