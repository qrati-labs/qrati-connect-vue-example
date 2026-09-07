# Qrati Connect — Vue Example

Embeds [Qrati Connect](https://qrati.com) into a Vue 3 + Vite app using the
framework-agnostic **web component** integration, with a host-controlled
light/dark theme, a thin login layer for **custom auth**, and a showcase of **custom cloud storage**.

## Integration method: Web component

Vue renders custom elements natively once `isCustomElement` is configured
(see `vite.config.ts`), so we load the element bundle from the CDN and drop
`<qrati-connect>` into the template:

```vue
<qrati-connect
  :organization-id="orgId"
  :uid="user?.userId"
  :fname="user?.fname"
  :lname="user?.lname"
  :theme="theme.theme"
  router="hash"
/>
```

See `src/pages/ConnectPage.vue`.

## Custom Auth

Organizations configured for Custom Auth on the Qrati dashboard expect the host application to identify the attendee. The demo login form (`src/lib/auth.ts`) derives a stable `uid` from the attendee's email, optionally POSTs to `VITE_API_ENDPOINT`, and passes `uid`, `fname`, and `lname` to `<qrati-connect>`:

| Prop | Required in Custom Auth | Description |
| ---- | ----------------------- | ----------- |
| `uid` | Yes | Unique identifier for the authenticated user |
| `fname` | Yes | Attendee's first name |
| `lname` | Yes | Attendee's last name |

## Custom Cloud Storage

The demo organization used here is configured for **Custom Storage** (AWS S3 / Cloudflare R2) on the Qrati backend. Uploads from attendees stream directly from the browser to the customer's cloud storage bucket via presigned `PUT` URLs—bypassing your Vue host server entirely and eliminating host bandwidth bottlenecks.

## Run it

```bash
pnpm install
cp .env.example .env   # optional — sensible defaults are baked in
pnpm dev
```

## Configuration

| Variable               | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `VITE_ORGANIZATION_ID` | Your Qrati organization ID                                        |
| `VITE_CDN_URL`         | CDN URL of the web-component bundle (`element/web.es.js`)          |
| `VITE_API_ENDPOINT`    | Demo-login endpoint for custom-auth orgs. Leave empty to skip it. |
| `VITE_GTM_ID`          | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`)              |
| `VITE_BASE_PATH`       | Base deployment path (defaults to `/connect/vue-example/`)         |

## Other integration methods

- **React component** — `import { QratiConnect }` (see the React / Next / Preact examples).
- **Embed (no-code)** — single `<script>` tag with `data-*` attributes (see the Vanilla JS / Marko / Ember examples).

Docs: <https://www.npmjs.com/package/@qratilabs/qrati-connect>
