<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { theme } = useTheme()

const currentYear = new Date().getFullYear()

const orgId = import.meta.env.VITE_ORGANIZATION_ID as string

const GITHUB_ORG = 'qrati-labs'
const REPO = 'qrati-connect-vue-example'
const repoUrl = `https://github.com/${GITHUB_ORG}/${REPO}`
const vscodeUrl = `https://vscode.dev/github/${GITHUB_ORG}/${REPO}`
</script>


<template>
<div class="page-shell">
  <div class="page-frame">
    <header class="hero">
      <p class="hero-kicker">Qrati Connect Demo</p>
      <h1>
        <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">Qrati</a>
        Connect inside a Vue host site
      </h1>
      <p class="hero-copy">
        This example shows how to drop
        <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">Qrati</a>
        Connect into a Vue application using the framework-agnostic web component, with a
        host-controlled theme and a polished wrapper around the widget.
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
      </div>
    </header>

    <main class="content-shell">
      <div class="widget-frame">
        <qrati-connect
          id="qrati-connect-main"
          :organization-id="orgId"
          :theme="theme.theme"
          router="hash"
        />
      </div>
    </main>

    <footer class="footer">
      <div class="footer-brand">
        <img
          src="https://assets.qrati.com/images/qrati-connect-logo-square.png"
          alt="Qrati Connect logo"
          referrerpolicy="no-referrer"
        />
        <div>
          <span class="footer-title"><span>Qrati</span> Connect</span>
          <p>Elevate your event experience.</p>
        </div>
      </div>

      <div class="footer-meta">
        <nav aria-label="Footer navigation">
          <a href="https://qrati.com" target="_blank" rel="noopener noreferrer">qrati.com</a>
          <a
            href="https://www.npmjs.com/package/@qratilabs/qrati-connect"
            target="_blank"
            rel="noopener noreferrer"
            >npm</a
          >
          <a href="https://github.com/qrati-labs" target="_blank" rel="noopener noreferrer"
            >GitHub</a
          >
          <a href="https://qrati.com/pricing" target="_blank" rel="noopener noreferrer">Pricing</a>
        </nav>
        <p class="footer-note">© {{ currentYear }} Qrati Labs. All rights reserved.</p>
      </div>
    </footer>
  </div>
</div>
</template>

<style scoped>
:host {
  display: block;
  color: var(--page-text);
}

.page-shell {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.page-frame {
  max-width: 72rem;
  min-height: calc(100vh - 3.75rem);
  margin: 0 auto;
  padding: 2.5rem 1rem 2rem;
}

.hero {
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  padding: 0.4rem 0.95rem;
  border: 1px solid rgba(255, 93, 1, 0.22);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: #e14f00;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

.hero h1 {
  margin: 0;
  color: var(--page-heading);
  font-family: 'Sora', sans-serif;
  font-size: clamp(2.25rem, 3vw, 3.6rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.hero h1 a,
.hero-copy a,
.footer-title span {
  color: var(--brand-accent);
}

.hero a,
.footer a {
  text-decoration: none;
}

.hero-copy {
  max-width: 44rem;
  margin: 1.25rem auto 0;
  color: var(--page-muted);
  font-size: 1rem;
  line-height: 1.75;
}

.action-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
  margin-top: 1.7rem;
}

.action-pills a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.7rem 1rem;
  border: 1px solid var(--pill-border);
  border-radius: 999px;
  background: var(--pill-bg);
  color: var(--pill-text);
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition:
    transform 160ms ease,
    background-color 160ms ease,
    color 160ms ease,
    border-color 160ms ease;
}

.action-pills svg {
  flex: none;
}

.action-pills a:hover {
  transform: translateY(-1px);
  border-color: var(--pill-border-hover);
  background: var(--pill-bg-hover);
  color: var(--pill-text-hover);
}

.content-shell {
  margin-top: 2rem;
}

.widget-frame {
  position: relative;
  overflow: hidden;
  padding: 0.75rem;
  border: 2px solid rgba(255, 72, 0, 0.28);
  border-radius: 2rem;
  background: var(--widget-shell-bg);
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.75rem;
  padding-bottom: 0.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.footer-brand img {
  width: auto;
  height: 2.25rem;
}

.footer-brand div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer-title {
  color: var(--footer-heading);
  font-size: 0.95rem;
  font-weight: 700;
}

.footer-brand p,
.footer-note,
.footer a {
  color: var(--footer-muted);
}

.footer-brand p,
.footer-note {
  margin: 0;
  font-size: 0.78rem;
}

.footer-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
}

.footer nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.15rem;
}

.footer a {
  font-size: 0.78rem;
  font-weight: 500;
  transition: color 160ms ease;
}

.footer a:hover {
  color: var(--footer-link-hover);
}

@media (min-width: 640px) {
  .page-frame {
    padding: 2.75rem 1.5rem 2rem;
  }

  .widget-frame {
    padding: 1.5rem;
  }

  .footer {
    flex-direction: row;
    align-items: flex-start;
  }

  .footer-meta {
    align-items: flex-end;
  }
}

</style>
