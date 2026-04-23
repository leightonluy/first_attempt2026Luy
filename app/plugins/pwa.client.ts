// Capture beforeinstallprompt as early as possible — before Vue mounts.
// Store it globally so PwaInstallPrompt.vue can access it at any time.

let _deferredPrompt: any = null
let _promptListeners: Array<(e: any) => void> = []

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    _deferredPrompt = e
    // Notify any listeners that are already registered
    _promptListeners.forEach((fn) => fn(e))
    _promptListeners = []
  })
}

export function getDeferredPrompt () {
  return _deferredPrompt
}

export function onInstallPrompt (fn: (e: any) => void) {
  if (_deferredPrompt) {
    // Already captured — call immediately
    fn(_deferredPrompt)
  } else {
    // Not yet fired — queue it
    _promptListeners.push(fn)
  }
}

export function clearDeferredPrompt () {
  _deferredPrompt = null
}

export default defineNuxtPlugin(() => {
  // Register the correct service worker
  if ('serviceWorker' in navigator) {
    const isDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    const swUrl = isDev ? '/dev-sw.js' : '/sw.js'

    window.addEventListener('load', () => {
      navigator.serviceWorker.register(swUrl, { scope: '/' })
        .then((reg) => {
          console.log('[SW] Registered:', swUrl)
          if (reg.waiting) {
            reg.waiting.postMessage({ type: 'SKIP_WAITING' })
          }
        })
        .catch((err) => console.warn('[SW] Registration failed:', err))
    })
  }
})
