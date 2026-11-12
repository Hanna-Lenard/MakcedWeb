/**
 * Enlaces y constantes compartidas de la landing.
 *
 * Dominio de producción: https://www.makced.online
 * La URL absoluta del sitio se define en astro.config.mjs (`site`), que es la
 * fuente de verdad para canonical, Open Graph y, más adelante, el sitemap.
 *
 * TODO(registro): el alta de usuarios todavía no tiene URL pública. Será un
 * subdominio de makced.online, pero aún no está decidido, así que SIGNUP_URL
 * es un placeholder. Sustituirlo por el subdominio real (por ejemplo
 * https://app.makced.online) cuando el registro esté desplegado.
 * Referencia interna del monorepo Makced:
 *   apps/login -> http://localhost:3001/?mode=signup
 */
export const SIGNUP_URL = 'https://app.makced.online';

/** Sufijo gratuito que promete el Hero. */
export const STORE_DOMAIN_SUFFIX = '.makced.online';

/** Slug de ejemplo cuando el campo de dominio está vacío. */
export const DEFAULT_STORE_SLUG = 'tu-marca';
