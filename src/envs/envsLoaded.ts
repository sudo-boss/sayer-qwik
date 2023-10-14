import dev from './profiles/dev';
import prod from './profiles/prod';

/** código para asegurar tipado de literals */
const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// Cambia dev si quieres probar otro perfil de envs
const currentDev = dev;

/**
 * Constante donde debes importar y asignar el PERFIL de envs que quieres para el ambiente de "Development"
 */
export const envs = { ...(process.env.NODE_ENV === 'production' ? prod : currentDev), NODE_ENV };
