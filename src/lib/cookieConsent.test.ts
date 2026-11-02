// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { initGtm } from './cookieConsent';

afterEach(() => {
  document.head.innerHTML = '';
  window.dataLayer = undefined;
  window.gtag = undefined;
  delete (window as Window & { google_tag_manager?: unknown }).google_tag_manager;
  vi.unstubAllEnvs();
});

describe('initGtm consent defaults', () => {
  it('sets every consent signal to denied before injecting GTM', () => {
    vi.stubEnv('VITE_GTM_ID', 'GTM-TEST');
    initGtm();

    const consentCalls = (window.dataLayer ?? []).filter(
      (entry): entry is unknown[] => Array.isArray(entry) && entry[0] === 'consent',
    );
    const defaults = consentCalls.filter((entry) => entry[1] === 'default');

    expect(defaults).toHaveLength(1);
    expect(defaults[0][2]).toMatchObject({
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    expect(document.getElementById('gtm-script')).not.toBeNull();
  });
});
