<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onInstallPrompt, clearDeferredPrompt, getDeferredPrompt } from '~/plugins/pwa.client'

const showInstall = ref(false)
const showUpdate = ref(false)
const deferredPrompt = ref<any>(null)

// Check if already installed (standalone mode)
const isInstalled = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (window.navigator as any).standalone === true

onMounted(() => {
  // Don't show if already installed
  if (isInstalled()) return

  // Check if we already have a stored prompt (captured before mount)
  const existing = getDeferredPrompt()
  if (existing) {
    deferredPrompt.value = existing
    showInstall.value = true
    return
  }

  // Otherwise wait for it
  onInstallPrompt((e) => {
    deferredPrompt.value = e
    showInstall.value = true
  })

  // Hide once installed
  window.addEventListener('appinstalled', () => {
    showInstall.value = false
    clearDeferredPrompt()
    deferredPrompt.value = null
  })

  // Listen for SW update
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.addEventListener('updatefound', () => {
        const worker = reg.installing
        if (!worker) return
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdate.value = true
          }
        })
      })
    })
  }
})

const install = async () => {
  if (!deferredPrompt.value) return
  deferredPrompt.value.prompt()
  const { outcome } = await deferredPrompt.value.userChoice
  if (outcome === 'accepted') {
    showInstall.value = false
    clearDeferredPrompt()
  }
  deferredPrompt.value = null
}

const dismissInstall = () => {
  showInstall.value = false
}

const reloadForUpdate = () => {
  showUpdate.value = false
  window.location.reload()
}
</script>

<template>
  <!-- Install Banner -->
  <Transition name="slide-up">
    <div
      v-if="showInstall"
      class="fixed bottom-6 left-1/2 z-[200] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-[1.5rem] bg-brand-950 p-5 shadow-2xl ring-1 ring-white/10"
    >
      <div class="flex items-start gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-800 text-2xl font-bold text-white shadow">
          A
        </div>
        <div class="flex-1">
          <p class="font-semibold text-white">Install ADDU Alumni</p>
          <p class="mt-1 text-sm text-brand-300">Add to your home screen — works fully offline.</p>
        </div>
        <button @click="dismissInstall" class="text-brand-400 hover:text-white text-xl leading-none">✕</button>
      </div>
      <div class="mt-4 flex gap-3">
        <button
          @click="install"
          class="flex-1 rounded-full bg-white py-2.5 text-sm font-semibold text-brand-950 transition hover:bg-brand-100"
        >
          Install App
        </button>
        <button
          @click="dismissInstall"
          class="flex-1 rounded-full border border-white/20 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Not now
        </button>
      </div>
    </div>
  </Transition>

  <!-- Update Banner -->
  <Transition name="slide-up">
    <div
      v-if="showUpdate"
      class="fixed bottom-6 left-1/2 z-[200] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-[1.5rem] bg-brand-800 p-5 shadow-2xl ring-1 ring-white/10"
    >
      <div class="flex items-start gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-900 text-xl text-white">
          🔄
        </div>
        <div class="flex-1">
          <p class="font-semibold text-white">Update available</p>
          <p class="mt-1 text-sm text-brand-300">A new version is ready. Reload to apply.</p>
        </div>
        <button @click="showUpdate = false" class="text-brand-400 hover:text-white text-xl leading-none">✕</button>
      </div>
      <div class="mt-4">
        <button
          @click="reloadForUpdate"
          class="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-brand-950 transition hover:bg-brand-100"
        >
          Reload & Update
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(1.5rem);
}
</style>
