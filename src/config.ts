export const ORGANIZATION_ID =
  (import.meta.env.VITE_ORGANIZATION_ID as string) || '69ad9c7876d8bf6f864b3a65';

export const QRATI_SCRIPT_URL =
  (import.meta.env.VITE_CDN_URL as string) ||
  'https://cdn.jsdelivr.net/npm/@qratilabs/qrati-connect/element/web.es.js';

// Demo-login endpoint for orgs with custom auth. Leave empty to skip the call.
export const API_ENDPOINT = (import.meta.env.VITE_API_ENDPOINT as string) || '';

export const GITHUB_ORG = 'qrati-labs';
export const REPO = 'qrati-connect-vue-example';
