# Tipografías del sitio

Las tres familias están bajo **SIL Open Font License 1.1**, que permite usarlas,
autoalojarlas y redistribuirlas sin costo. El texto completo de la licencia está
en [`OFL.txt`](OFL.txt); es el mismo para las tres y solo cambia la línea de
copyright, que se lista abajo.

| Familia | Uso en el sitio | Copyright |
|---|---|---|
| **Jost** | Titulares y wordmark | Copyright 2020 The Jost Project Authors (https://github.com/indestructible-type) |
| **Figtree** | Cuerpo de texto, botones, etiquetas | Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree) |
| **IBM Plex Mono** | Cifras y etiquetas de dato | Copyright © 2017 IBM Corp. with Reserved Font Name "Plex" |

## Archivos

Jost y Figtree son **fuentes variables**: un solo archivo cubre todo el rango de
pesos, así que pesan menos que varios cortes estáticos sueltos.

| Archivo | Pesos | Tamaño |
|---|---|---|
| `jost-latin.woff2` | 500–700 | 26 KB |
| `jost-latin-ext.woff2` | 500–700 | 17 KB |
| `figtree-latin.woff2` | 400–800 | 20 KB |
| `figtree-latin-ext.woff2` | 400–800 | 10 KB |
| `plexmono-600-latin.woff2` | 600 | 15 KB |
| `plexmono-600-latin-ext.woff2` | 600 | 14 KB |

Los subconjuntos `latin-ext` solo se descargan si la página usa un carácter que
no está en `latin`; el navegador lo decide con `unicode-range`. Para español
basta `latin`, así que en la práctica se bajan unos 61 KB.

## Por qué autoalojadas y no desde Google Fonts

- No hay conexión a un tercero, así que la página no depende de que el DNS del
  visitante resuelva `fonts.googleapis.com`.
- Se elimina la hoja de estilos externa que bloqueaba el renderizado.
- Menos viajes de red: antes eran dos orígenes más (DNS + TLS en cada uno).

## Nota sobre Gotham

La marca usa **Gotham** (Hoefler&Co), que es comercial y **no** está en este
repo: los archivos de escritorio quedan ignorados por `.gitignore`. Usarla en el
sitio exigiría comprar una licencia de webfont, distinta de la de escritorio.
Jost cumple aquí el papel de tipografía de titular con un carácter geométrico
parecido.
