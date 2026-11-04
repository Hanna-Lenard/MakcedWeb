/**
 * Enlaces y constantes compartidas de la landing.
 *
 * TODO(registro): todavía no existe una URL pública de registro.
 * Se conserva el valor que ya usaba la landing para no introducir
 * placeholders nuevos. Cuando el registro esté desplegado, sustituir
 * SIGNUP_URL por la URL pública definitiva y migrar las secciones
 * pendientes (Pricing, FinalCTA, Footer) a esta constante.
 *
 * Ruta real implementada hoy, solo en el entorno local del monorepo Makced:
 *   apps/login -> http://localhost:3001/?mode=signup
 * Variables relacionadas: NEXT_PUBLIC_LOGIN_URL y NEXT_PUBLIC_DASHBOARD_URL
 * (definidas únicamente para localhost en .env.example).
 */
export const SIGNUP_URL = 'https://tu-tienda.makced.com';

/** Sufijo gratuito que promete el Hero. */
export const STORE_DOMAIN_SUFFIX = '.makced.online';

/** Slug de ejemplo cuando el campo de dominio está vacío. */
export const DEFAULT_STORE_SLUG = 'tu-marca';
