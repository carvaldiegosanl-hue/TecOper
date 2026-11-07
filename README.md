# TecOper

Sitio web de **TecOper** — ingeniería y automatización eléctrica e industrial y consultoría en transformación digital en Colombia.

Página web estática (HTML + CSS + un poco de JS, sin build). Tipografías Jost, Figtree e IBM Plex Mono autoalojadas en `fonts/` (SIL OFL 1.1). El banner principal muestra el portafolio en tarjetas 3D hechas solo con CSS (`preserve-3d`) que giran siguiendo el puntero. El formulario de contacto envía directo a tecoper.admon@gmail.com con [FormSubmit](https://formsubmit.co/) (el primer envío requiere activar el correo una vez) y los botones de contacto abren WhatsApp.

## Servicios

- **Ingeniería y Automatización** — servicio eléctrico industrial y locativo, programación de PLC, HMI y variadores, diseño de planos en AutoCAD Electrical, integración IoT industrial y montaje eléctrico y mecánico.
- **Consultoría en Transformación Digital** — digitalización de pymes con un plan priorizado por impacto y costo.

## Publicación

Publicado con **GitHub Pages** con dominio propio (archivo `CNAME`).

Sitio en vivo: <https://tecoper.com.co/>

> Nota: el canonical, Open Graph, Twitter Card y JSON-LD de `index.html` usan URLs absolutas con `https://tecoper.com.co/`. Si cambia el dominio, actualízalas.

## Desarrollo

No requiere instalación ni build. Para verlo con las fuentes cargadas, sírvelo localmente (por ejemplo `python3 -m http.server`) y abre `http://localhost:8000`; abriendo el archivo directo el navegador bloquea las fuentes.
