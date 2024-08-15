export const IS_DEV_ENV = import.meta.env.VITE_NODE_ENV === 'development';
export const IS_PROD_ENV = import.meta.env.VITE_NODE_ENV === 'production';

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:8000';
