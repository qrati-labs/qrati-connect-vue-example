<script setup lang="ts">
import { useTheme } from '../composables/useTheme';
import { ORGANIZATION_ID, GITHUB_ORG, REPO } from '../config';
import { showCookiePreferences } from '../lib/cookieConsent';

const { theme, toggleTheme } = useTheme();

const currentYear = new Date().getFullYear();
const repoUrl = `https://github.com/${GITHUB_ORG}/${REPO}`;
const vscodeUrl = `https://vscode.dev/github/${GITHUB_ORG}/${REPO}`;
const npmUrl = 'https://www.npmjs.com/package/@qratilabs/qrati-connect';

const handleCookiePreferences = () => {
  if (typeof window !== 'undefined' && window.showCookiePreferences) {
    window.showCookiePreferences();
  } else {
    void showCookiePreferences();
  }
};
</script>

<template>
  <div class="app">
    <button
      class="theme-toggle"
      @click="toggleTheme"
      :aria-label="theme.theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
    >
      {{ theme.theme === 'light' ? '🌙 Dark' : '☀️ Light' }}
    </button>

    <div class="page-shell">
      <div class="page-frame">
        <header class="hero">
          <p class="hero-kicker">Embeddable Vue Gallery Component</p>
          <h1>
            <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">Qrati</a>
            Connect inside a Vue host site
          </h1>
          <p class="hero-copy">
            A framework-agnostic web component for Vue to embed live event photo galleries with guest
            uploads, full-screen lightbox, emoji reactions, and contest leaderboards. This example
            showcases <strong>custom cloud storage</strong> (direct browser-to-bucket S3/R2 uploads with bucket CORS).
          </p>

          <div class="action-pills" aria-label="Example links">
            <a :href="repoUrl" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
              <span>View on GitHub</span>
            </a>
            <a :href="vscodeUrl" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M10.863 13.919a.8.8 0 0 1-.644.025a.8.8 0 0 1-.279-.183L4.816 9.063l-2.232 1.703a.54.54 0 0 1-.691-.031l-.716-.655a.546.546 0 0 1 0-.805L3.112 7.5L1.177 5.725a.546.546 0 0 1 0-.805l.716-.655a.54.54 0 0 1 .691-.031l2.232 1.703L9.94 1.239a.805.805 0 0 1 .923-.159l2.677 1.295c.281.136.46.422.46.736V8h-3.248V4.534L6.864 7.5l3.888 2.966V8H14v3.889c0 .314-.179.6-.46.736z"
                />
              </svg>
              <span>Open in VS Code</span>
            </a>
            <a :href="npmUrl" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M1.5 0h21v24h-10.5v-19.5h-5.25v19.5h-5.25z" />
              </svg>
              <span>npm package</span>
            </a>
          </div>
        </header>

        <main class="content-shell">
          <section class="widget-frame" aria-label="Interactive Vue Event Gallery">
            <h2 class="sr-only">Live Event Photo Gallery Component</h2>
            <qrati-connect
              id="qrati-connect-main"
              :organization-id="ORGANIZATION_ID"
              :theme="theme.theme"
              router="hash"
            />
          </section>

          <!-- SEO Features Section -->
          <section class="seo-section" aria-labelledby="features-heading">
            <div class="seo-section-header">
              <span class="seo-kicker">Event Gallery Features</span>
              <h2 id="features-heading">Why Developers Choose Qrati Connect</h2>
              <p>
                Deliver an engaging live event photo wall and user-generated content (UGC)
                experience embedded directly into your Vue application with zero backend overhead.
              </p>
            </div>

            <div class="seo-features-grid">
              <article class="seo-feature-card">
                <div class="seo-feature-icon" aria-hidden="true">
                  🖼️
                </div>
                <h3>Live Event Photo Wall</h3>
                <p>
                  Responsive masonry grid layout, blurhash loading placeholders, and full-screen
                  lightbox with keyboard navigation for stunning visual presentation.
                </p>
              </article>

              <article class="seo-feature-card">
                <div class="seo-feature-icon" aria-hidden="true">
                  ☁️
                </div>
                <h3>Custom Cloud Storage</h3>
                <p>
                  Connect your own AWS S3 or Cloudflare R2 bucket. Guest uploads stream directly from the browser to your bucket via presigned PUT URLs with configured CORS.
                </p>
              </article>

              <article class="seo-feature-card">
                <div class="seo-feature-icon" aria-hidden="true">
                  📸
                </div>
                <h3>Guest Media Uploads</h3>
                <p>
                  Frictionless guest uploads via QR code or direct upload with client-side image
                  compression and automatic HEIC to JPEG conversion.
                </p>
              </article>

              <article class="seo-feature-card">
                <div class="seo-feature-icon" aria-hidden="true">
                  ⭐
                </div>
                <h3>Reactions & Contests</h3>
                <p>
                  Boost attendee engagement with interactive emoji reactions, community star ratings,
                  and real-time contest leaderboard rankings.
                </p>
              </article>

              <article class="seo-feature-card">
                <div class="seo-feature-icon" aria-hidden="true">
                  ⚡
                </div>
                <h3>Framework-Agnostic Web Component</h3>
                <p>
                  Standard Custom Element with typed attributes, reactive theme synchronization, and
                  seamless hash or memory routing.
                </p>
              </article>
            </div>
          </section>

          <!-- SEO Quickstart Section -->
          <section class="seo-section" aria-labelledby="quickstart-heading">
            <div class="seo-section-header">
              <span class="seo-kicker">Developer Integration</span>
              <h2 id="quickstart-heading">Embed in 3 Simple Steps</h2>
              <p>
                Load the script bundle, configure compiler options, and render the custom element.
              </p>
            </div>

            <div class="seo-quickstart-card">
              <div class="code-header">
                <div class="code-dots">
                  <span class="code-dot"></span>
                  <span class="code-dot"></span>
                  <span class="code-dot"></span>
                </div>
                <span>ConnectPage.vue</span>
              </div>
              <pre><code>&lt;script setup lang="ts"&gt;
// 1. Vite config: isCustomElement: (tag) =&gt; tag.startsWith('qrati-')
// 2. Load web component: &lt;script type="module" src="https://cdn.jsdelivr.net/npm/@qratilabs/qrati-connect/element/web.es.js"&gt;&lt;/script&gt;
const orgId = 'your-organization-id';
const theme = 'light'; // 'light' | 'dark'
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- 3. Render the custom element --&gt;
  &lt;qrati-connect
    :organization-id="orgId"
    :theme="theme"
    router="hash"
  /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </section>

          <!-- SEO FAQ Section -->
          <section class="seo-section" aria-labelledby="faq-heading">
            <div class="seo-section-header">
              <span class="seo-kicker">Common Questions</span>
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>
                Everything you need to know about embedding an event photo gallery in Vue.
              </p>
            </div>

            <div class="faq-list">
              <details class="faq-item" open>
                <summary class="faq-question">
                  <span>How do I embed an event photo gallery in Vue?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="faq-answer">
                  Include the Qrati Connect element script in your HTML and register <code style="color: var(--brand-accent)">isCustomElement: (tag) => tag.startsWith('qrati-')</code> in your <code style="color: var(--brand-accent)">vite.config.ts</code>. Then drop <code style="color: var(--brand-accent)">&lt;qrati-connect :organization-id="orgId" :theme="theme" router="hash" /&gt;</code> into any Vue template.
                </div>
              </details>

              <details class="faq-item">
                <summary class="faq-question">
                  <span>How does Custom Cloud Storage work with Qrati Connect?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="faq-answer">
                  Organizations can connect their own AWS S3 or Cloudflare R2 bucket on the Qrati backend. Uploads are negotiated with presigned PUT URLs, so attendees upload photos directly to your cloud bucket without proxying through your Vue host server or consuming host bandwidth.
                </div>
              </details>

              <details class="faq-item">
                <summary class="faq-question">
                  <span>Can event attendees upload photos directly through the Vue gallery?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="faq-answer">
                  Yes. When media uploads are enabled in your Qrati organization settings, attendees can upload photos and videos directly from mobile or desktop devices with client-side image compression and automatic HEIC conversion.
                </div>
              </details>

              <details class="faq-item">
                <summary class="faq-question">
                  <span>Does the Qrati Connect Vue component support dark mode?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="faq-answer">
                  Yes. Bind the <code style="color: var(--brand-accent)">:theme</code> attribute to <code style="color: var(--brand-accent)">'light'</code> or <code style="color: var(--brand-accent)">'dark'</code>. The component dynamically updates all background, text, card, and modal styles to match your host site's color scheme.
                </div>
              </details>

              <details class="faq-item">
                <summary class="faq-question">
                  <span>Is Qrati Connect compatible with Vue 3 and Vite?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="faq-answer">
                  Yes. The package provides a standard Custom Element (Web Component) that works natively in Vue 3, Vite, Nuxt, and any other frontend framework or vanilla JavaScript project.
                </div>
              </details>
            </div>
          </section>
        </main>

        <footer class="footer">
          <p>
            Powered by
            <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">Qrati</a>
            · Embeddable live event photo galleries for Vue applications.
          </p>
          <div class="footer-links">
            <a href="https://qrati.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <span class="footer-sep" aria-hidden="true">·</span>
            <a href="https://qrati.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <span class="footer-sep" aria-hidden="true">·</span>
            <button
              type="button"
              class="footer-cookie-btn"
              @click="handleCookiePreferences"
            >
              Cookie Preferences
            </button>
          </div>
          <p class="footer-copyright">
            © {{ currentYear }} Qrati Labs. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>
