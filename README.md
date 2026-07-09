# Qrati Connect — Vue Example

Embeds [Qrati Connect](https://qrati.com) into a Vue 3 + Vite app using the
framework-agnostic **web component** integration, with a host-controlled
light/dark theme. The demo org used here is configured for custom storage on
the Qrati backend — that's a server-side setting with no frontend impact, so
the embed code below is unchanged from a standard org.

## Integration method: Web component

Vue renders custom elements natively once `isCustomElement` is configured
(see `vite.config.ts`), so we load the element bundle from the CDN and drop
`<qrati-connect>` into the markup:

```vue
<qrati-connect :organization-id="orgId" :theme="theme.theme" router="hash" />
```

See `src/pages/ConnectPage.vue`.

## Run it

```bash
npm install
cp .env.example .env   # optional — sensible defaults are baked in
npm run dev
```

## Configuration

| Variable             | Description                                                |
| ---------------------| ------------------------------------------------------------|
| `VITE_ORGANIZATION_ID` | Your Qrati organization ID                                |
| `VITE_CDN_URL`         | CDN URL of the web-component bundle (`element/web.es.js`) |

## Other integration methods

- **React component** — `import { QratiConnect }` (see the React / Next / Preact examples).
- **Embed (no-code)** — single `<script>` tag with `data-*` attributes (see the Vanilla JS / Marko / Ember examples).

Docs: <https://www.npmjs.com/package/@qratilabs/qrati-connect>
