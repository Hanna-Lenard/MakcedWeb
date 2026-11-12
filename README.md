# Makced — Landing

Landing page de **Makced**, una plataforma de e-commerce sin código: crea tu
tienda online sin programar, sin comisiones por venta y con los pagos directos
a tu cuenta bancaria (Stripe Connect).

> Este repositorio es **solo la landing**. La aplicación (registro, panel y
> tiendas) vive en otro proyecto del monorepo Makced.

## Stack

- [Astro](https://astro.build) 7 — sitio estático, sin framework de UI
- [Tailwind CSS](https://tailwindcss.com) 4 vía `@tailwindcss/vite`
- TypeScript en modo estricto
- Fuentes autoalojadas: *Familjen Grotesk* y *Azeret Mono* (licencia OFL)

Requiere **Node >= 22.23.4**.

## Puesta en marcha

```sh
npm install
astro dev --background   # arranca el servidor en segundo plano
astro dev status         # ver si está corriendo
astro dev logs           # ver los logs
astro dev stop           # detenerlo
```

El sitio queda disponible en `http://localhost:4321`.

Otros comandos:

| Comando             | Acción                                  |
| :------------------ | :-------------------------------------- |
| `npm run build`     | Genera el sitio estático en `./dist/`   |
| `npm run preview`   | Sirve localmente el resultado del build |

## Estructura

```text
src/
├── pages/index.astro          # única página: <head>, metadatos y orden de secciones
├── config/site.ts             # SIGNUP_URL, sufijo de dominio y slug por defecto
├── styles/global.css          # design system: tokens y clases mk-*
└── components/
    ├── StarRating.astro
    └── sections/              # una sección por archivo, en el orden de la página
public/                        # logos, favicons, fuentes y og-cover.png
```

- El **dominio de producción** (`https://www.makced.online`) se define en
  `astro.config.mjs` (`site`) y se usa para `canonical` y Open Graph.
- Los **enlaces de registro** se centralizan en `src/config/site.ts`. No
  escribas URLs de registro a mano dentro de los componentes.

## Estado actual

- El dominio ya está comprado; el despliegue todavía no es definitivo.
- **No existe URL pública de registro**: `SIGNUP_URL` es un placeholder
  (`https://app.makced.online`). Hay que sustituirlo por el subdominio real
  cuando el registro esté desplegado.
- El campo de dominio del Hero y del CTA final es **solo una vista previa**: no
  comprueba disponibilidad ni envía el slug.
- Los botones de precios **aún no llevan el plan seleccionado**.
- La sección de testimonios está **retirada** hasta tener casos reales
  (`Testimonials.astro` se conserva en el repositorio).
- Pendiente: páginas legales (aviso legal, privacidad, cookies), analítica y
  `sitemap.xml` / `robots.txt`.

## Convenciones

- Ramas `feature/...`, `fix/...` o `chore/...` creadas desde `develop`; los
  cambios llegan a `develop` mediante Pull Request.
- Todo el texto de la interfaz está en español.
