import { env } from 'process';

export const NODE_ENV = env.NODE_ENV;

export const IS_PROD = NODE_ENV !== 'development';
