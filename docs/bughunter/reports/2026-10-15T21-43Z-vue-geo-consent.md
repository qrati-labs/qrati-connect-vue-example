# Geo-aware cookie consent and GTM startup — Vue example

- **Audit time:** 2026-10-15 21:43 UTC
- **Repository/base:** `qrati-connect-vue-example` at `c44c3dac59ae9b05b5433f0a89e7704016a4b8fa`
- **Workflow:** Vue app mount → `CookieConsentBanner` → `initGtm` → geolocation requirement check → consent initialization / preference callbacks → `gtag` consent updates.
- **Bounded cone included:** `src/App.vue` mount/caller, `src/components/CookieConsentBanner.vue` lifecycle and async geo decision, `src/lib/cookieConsent.ts` GTM/consent/storage/callback logic, `src/pages/ConnectPage.vue` preference entry point, and Vite/Cloudflare deployment build contract. The geo endpoint is cross-origin on non-qrati.com hosts; no endpoint implementation was present in this example repo. Excluded unrelated theme, widget, and routing behavior.
- **CodeGraph:** initialized only in the already-fetched checkout (12 files indexed) and used to trace the consent entry points/callers. Generated `.codegraph/` files are ignored and not part of the feature worktree.

## Finding

**Medium — consent defaults momentarily contradict the geo-aware opt-in decision.** `initGtm` registered a globally granted consent default and then immediately registered a denied default for a regional list with a 500 ms wait. Since GTM is appended immediately afterward and before the asynchronous geo lookup/consent UI decision, the initial global default falsely signals permission for visitors outside the listed regions while the application has not yet established their status. Google advises setting consent defaults before tags use consent and demonstrates denied defaults followed by updates after the user decision.[1][2]

**Fix:** remove the globally granted default. The initial default is denied, including the existing regional override and `wait_for_update`; the existing non-required visitor grant path remains in `ensureCookieConsentInitialized` after geo resolution. User consent callbacks still update the four consent categories.

## Test quality and verification

- The repo had no test script, test framework, or tests at audit start. Added Vitest + happy-dom, a focused behavior test, an isolated Vitest config (avoids the Cloudflare worker environment in `vite.config`), and `pnpm test`.
- **TDD evidence:** the new test first failed because two default consent calls were emitted; after removing the global granted default, the test passed.
- **Unit:** `pnpm test` — 1 test passed. happy-dom logs a benign `NotSupportedError` when it sees the external GTM script URL; the assertion still verifies consent defaults and script insertion.
- **Integration:** not present/not run. **E2E:** not present/not run. **Coverage:** not measured. Performance: not measured.
- **Build:** TypeScript checking passed; full Vite build then failed on a pre-existing invalid CSS selector `+ .answer-section` in generated stylesheet (reported by Lightning CSS as `Invalid empty selector`, source mapping in `src/style.css`). The first build attempt also exposed missing `VITE_CDN_URL`; rerunning with ignored `.env.local` populated from public `.env.example` got past environment resolution and reproduced the CSS failure. The temporary file contains only public config and is ignored.
- Cookie preference initialization is guarded against unmount for async geo resolution. Its global singleton `initPromise` persists for the page lifetime, consistent with one app-wide banner; no route teardown/reinitialization path was found in the inspected callers. Geo failure defaults to required consent; session storage failure is caught and also defaults to required. There is no geo timeout or explicit request cancellation; those are resilience improvements rather than a demonstrated defect for this change.

## Research

Google's guidance supports denied consent defaults and updating them when the visitor's choice is available; consent defaults need to precede tag use.[1][2] Vue documents `onUnmounted` for cleanup of manually created side effects; the banner cancels its pending geo callback after teardown.[3]

## Commands/results

- `gh auth status` — authenticated as `qratilabsagent`.
- `gh pr list --repo qrati-labs/qrati-connect-vue-example --state open` — no open PRs at audit start.
- `git ls-remote origin refs/heads/main` — `c44c3dac59ae9b05b5433f0a89e7704016a4b8fa`.
- `corepack pnpm install --frozen-lockfile` — passed.
- `pnpm test` — passed (1 test; external script loading warning noted above).
- `pnpm build` — blocked only by unset `VITE_CDN_URL`; rerun with `.env.example` value.
- Diff checks and PR state will be recorded in final tracker/receipt after publication.

## Recommendations

Keep denial as the only global default and grant solely from the resolved consent policy. Add browser-level coverage for opt-in and opt-out outcomes, geo-fetch failure, and consent callback updates when an E2E harness is adopted. Consider a bounded geo lookup timeout and explicit asynchronous initialization failure handling in a separate change.

## Pull request

[PR #2](https://github.com/qrati-labs/qrati-connect-vue-example/pull/2) is open at head `ec94d9bedc1e40977d944ceaea10f81acd229693`, based on `c44c3dac59ae9b05b5433f0a89e7704016a4b8fa`. GitGuardian passed; Cloudflare Workers build was pending at the latest check read. The PR is mergeable. No merge or deploy performed.

## Sources

[1] https://developers.google.com/tag-platform/security/guides/consent — Google Tag Platform: Set up consent mode on websites
[2] https://developers.google.com/tag-platform/security/guides/consent-debugging — Google Tag Assistant: Consent mode debugging
[3] https://vuejs.org/api/composition-api-lifecycle — Vue.js Composition API lifecycle hooks
