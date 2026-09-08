export const ORGANIZATION_ID =
  (import.meta.env.VITE_ORGANIZATION_ID as string) || '';

export const QRATI_SCRIPT_URL =
  (import.meta.env.VITE_CDN_URL as string) ||
  'https://cdn.jsdelivr.net/npm/@qratilabs/qrati-connect/element/web.es.js';

export const GITHUB_ORG = 'qrati-labs';
export const REPO = 'qrati-connect-vue-example';
