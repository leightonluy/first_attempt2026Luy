// ============================================================
// ADDU Alumni — Dev Service Worker
// Caches EVERYTHING so the full app works offline in npm run dev
// ============================================================

const CACHE_NAME = 'addu-dev-v2'

// All app routes to pre-cache on install
const APP_ROUTES = [
  '/',
  '/home',
  '/alumni-network',
  '/donation-hub',
  '/careers',
  '/records',
  '/profile',
  '/campaign-creation',
  '/total-impact',
  '/transaction-history',
  '/thank-you',
  '/student-discovery',
]

// Static assets always needed
const STATIC_ASSETS = [
  '/ADDU.jpg',
  '/ateneo-logo.jpg',
  '/ateneo-logo.svg',
  '/favicon.ico',
  '/pwa-192x192.svg',
  '/pwa-512x512.svg',
  '/manifest.webmanifest',
]

// ── Install: cache all routes + static assets ──────────────
self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache static assets first (these always exist)
      await Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          fetch(url, { cache: 'reload' })
            .then((res) => { if (res.ok) cache.put(url, res) })
            .catch(() => {})
        )
      )
      // Cache all app routes
      await Promise.allSettled(
        APP_ROUTES.map((route) =>
          fetch(route, { cache: 'reload' })
            .then((res) => { if (res.ok) cache.put(route, res) })
            .catch(() => {})
        )
      )
    })
  )
})

// ── Activate: wipe old caches ──────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
})

// ── Fetch: serve everything offline ───────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET
  if (request.method !== 'GET') return

  // Skip Vite HMR / internal dev requests
  if (
    url.pathname.startsWith('/@') ||
    url.pathname.startsWith('/__vite') ||
    url.pathname.startsWith('/__nuxt') ||
    url.pathname.includes('hot-update') ||
    request.headers.get('accept')?.includes('text/event-stream')
  ) return

  // ── Cross-origin (Unsplash images etc) — cache-first ──
  if (url.origin !== self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request)
          .then((res) => {
            if (res && res.status === 200) {
              caches.open(CACHE_NAME).then((c) => c.put(request, res.clone()))
            }
            return res
          })
          .catch(() => new Response('', { status: 408, statusText: 'Offline' }))
      })
    )
    return
  }

  // ── Navigation (page loads) — network-first, fallback to cache ──
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone()
            caches.open(CACHE_NAME).then((c) => {
              c.put(request, clone)
              // Always keep '/' fresh as the SPA shell fallback
              c.put('/', res.clone())
            })
          }
          return res
        })
        .catch(() =>
          // Offline: try exact route, then SPA shell '/'
          caches.match(request)
            .then((cached) => cached || caches.match('/'))
            .then((fallback) => fallback || offlinePage())
        )
    )
    return
  }

  // ── All other requests (JS, CSS, images, fonts) — stale-while-revalidate ──
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((res) => {
            if (res && res.status === 200) {
              cache.put(request, res.clone())
            }
            return res
          })
          .catch(() => cached || new Response('', { status: 408 }))

        // Return cached immediately if available, update in background
        return cached || networkFetch
      })
    )
  )
})

// ── Minimal offline fallback page ─────────────────────────
function offlinePage () {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>ADDU Alumni — Offline</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:system-ui,sans-serif;background:#001845;color:#fff;
         display:flex;align-items:center;justify-content:center;
         min-height:100vh;padding:2rem;text-align:center}
    .card{background:#002D72;border-radius:2rem;padding:3rem 2rem;max-width:400px;width:100%}
    h1{font-size:1.75rem;font-weight:700;margin-bottom:1rem}
    p{color:#90CAF9;margin-bottom:2rem;line-height:1.6}
    button{background:#fff;color:#001845;border:none;padding:.875rem 2.5rem;
           border-radius:9999px;font-weight:700;font-size:1rem;cursor:pointer}
    button:hover{background:#BBDEFB}
  </style>
</head>
<body>
  <div class="card">
    <div style="font-size:3rem;margin-bottom:1rem">📶</div>
    <h1>You're Offline</h1>
    <p>The app hasn't been cached yet. Connect to the internet, reload once, then you can use it offline.</p>
    <button onclick="location.reload()">Try Again</button>
  </div>
</body>
</html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}
