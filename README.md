# Qrati Connect — Vue Example

[![Qrati Connect — embeddable event photo galleries](public/qrati-connect-og.png)](https://qrati.com/connect)

Build live event photo galleries into Vue applications with guest uploads, full-screen lightbox, emoji reactions, and photo-contest leaderboards. [Explore Qrati Connect](https://qrati.com/connect) or [view the live Vue example](https://qrati.com/connect/vue-example).

Embeds [Qrati Connect](https://qrati.com) into a Vue 3 + Vite app using the
framework-agnostic **web component** integration, with a host-controlled
light/dark theme and a showcase of **custom cloud storage**.

## Integration method: Web component

Vue renders custom elements natively once `isCustomElement` is configured
(see `vite.config.ts`), so we load the element bundle from the CDN and drop
`<qrati-connect>` into the template:

```vue
<qrati-connect
  :organization-id="orgId"
  :theme="theme.theme"
  router="hash"
/>
```

See `src/pages/ConnectPage.vue`.

## Custom Cloud Storage

The demo organization used here is configured for **Custom Storage** (AWS S3 / Cloudflare R2) on the Qrati backend. Uploads from attendees stream directly from the browser to the customer's cloud storage bucket via presigned `PUT` URLs—bypassing your Vue host server entirely and eliminating host bandwidth bottlenecks.

## Run it

```bash
pnpm install
cp .env.example .env   # optional — sensible defaults are baked in
pnpm dev
```

## Other integration methods

- **React component** — `import { QratiConnect }` (see the React / Next / Preact examples).
- **Embed (no-code)** — single `<script>` tag with `data-*` attributes (see the Vanilla JS / Marko / Ember examples).

Docs: <https://www.npmjs.com/package/@qratilabs/qrati-connect>
