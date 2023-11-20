/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import dev from './profiles/dev';
import prod from './profiles/prod';

/** código para asegurar tipado de literals */
const IS_PROD = import.meta.env.PROD;

const NODE_ENV = IS_PROD ? 'production' : ('development' as const);

// Cambia dev si quieres probar otro perfil de envs
const currentDev = dev;

/**
 * Constante donde debes importar y asignar el PERFIL de envs que quieres para el ambiente de "Development"
 */
export const envs = {
  ...(NODE_ENV === 'production' ? prod : currentDev),
  NODE_ENV: NODE_ENV as 'production' | 'development',
  IS_PROD,
};
