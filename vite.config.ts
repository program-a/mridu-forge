// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable Cloudflare Workers build target so we get a portable static output
  // suitable for Netlify (and any static host).
  cloudflare: false,
  tanstackStart: {
    // Build a static SPA shell (dist/client/index.html) + prerender all
    // component routes. Netlify serves the static files and falls back to
    // index.html for client-side routing via netlify.toml.
    spa: {
      enabled: true,
    },
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
    },
  },
});
