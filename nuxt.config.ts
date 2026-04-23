// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // SPA mode — single HTML shell, Vue Router handles ALL navigation client-side.
  // Required for offline navigation to work in both dev and production.
  ssr: false,

  nitro: {
    prerender: {
      routes: [
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
      ],
      crawlLinks: true,
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],

  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  pwa: {
    registerType: 'autoUpdate',
    // We register the SW manually in app.vue so we can pick dev-sw.js vs sw.js
    injectRegister: null,

    manifest: {
      name: 'Ateneo Alumni Network',
      short_name: 'ADDU Alumni',
      description: 'Ateneo de Davao University Alumni Portal.',
      theme_color: '#001845',
      background_color: '#001845',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192x192.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
          purpose: 'any maskable',
        },
        {
          src: '/pwa-512x512.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable',
        },
      ],
      shortcuts: [
        { name: 'Home', url: '/home' },
        { name: 'Donate', url: '/donation-hub' },
        { name: 'Network', url: '/alumni-network' },
        { name: 'Careers', url: '/careers' },
        { name: 'Records', url: '/records' },
      ],
    },

    workbox: {
      // SPA shell fallback for every route
      navigateFallback: '/',
      navigateFallbackDenylist: [/^\/api\//, /^\/__nuxt_content\//, /^\/dev-sw\.js$/],

      // Precache ALL build output
      globPatterns: [
        '**/*.html',
        '_nuxt/**/*.{js,mjs,css,wasm}',
        '**/*.{svg,png,jpg,jpeg,ico,webp,gif}',
        '_nuxt/**/*.json',
      ],
      globIgnores: [
        '**/node_modules/**',
        'sw.js',
        'workbox-*.js',
        'dev-sw.js',
        '**/_payload.json',
      ],

      runtimeCaching: [
        // Page navigations — network first, offline falls back to cached shell
        {
          urlPattern: ({ request }: { request: Request }) => request.mode === 'navigate',
          handler: 'NetworkFirst' as const,
          options: {
            cacheName: 'pages-cache',
            networkTimeoutSeconds: 4,
            expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        // Nuxt JS/CSS chunks — hashed filenames, safe to cache forever
        {
          urlPattern: /\/_nuxt\/.*/i,
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'nuxt-chunks',
            expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        // Local images and icons
        {
          urlPattern: /\.(png|jpg|jpeg|svg|gif|webp|ico)(\?.*)?$/i,
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'static-assets',
            expiration: { maxEntries: 150, maxAgeSeconds: 60 * 60 * 24 * 30 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        // Unsplash images used in alumni/career pages
        {
          urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'unsplash-images',
            expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        // Google Fonts
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'StaleWhileRevalidate' as const,
          options: {
            cacheName: 'google-fonts-stylesheets',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'google-fonts-webfonts',
            expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],

      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,
    },

    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },

    devOptions: {
      enabled: false, // We use our own dev-sw.js instead
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/.*$/],
      type: 'module',
    },
  },

  app: {
    head: {
      title: 'Ateneo Alumni Network',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Ateneo de Davao University Alumni Portal' },
        { name: 'theme-color', content: '#001845' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'ADDU Alumni' },
        { name: 'msapplication-TileColor', content: '#001845' },
      ],
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'apple-touch-icon', href: '/pwa-192x192.svg' },
        { rel: 'icon', type: 'image/svg+xml', href: '/pwa-192x192.svg' },
      ],
    },
  },
})
