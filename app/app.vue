<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOffline = ref(false)
const wasOffline = ref(false)
const showOnlineBanner = ref(false)
let onlineTimer: ReturnType<typeof setTimeout> | null = null

const handleOffline = () => {
  isOffline.value = true
  wasOffline.value = true
  showOnlineBanner.value = false
  if (onlineTimer) clearTimeout(onlineTimer)
}

const handleOnline = () => {
  isOffline.value = false
  if (wasOffline.value) {
    // Show "back online" banner briefly
    showOnlineBanner.value = true
    onlineTimer = setTimeout(() => {
      showOnlineBanner.value = false
    }, 3000)
  }
}

onMounted(() => {
  // Set initial state immediately — reliable on every refresh
  isOffline.value = !navigator.onLine

  window.addEventListener('offline', handleOffline)
  window.addEventListener('online', handleOnline)
})

onUnmounted(() => {
  window.removeEventListener('offline', handleOffline)
  window.removeEventListener('online', handleOnline)
  if (onlineTimer) clearTimeout(onlineTimer)
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <PwaInstallPrompt />

  <!-- Offline banner — shown when offline -->
  <Transition name="slide-down">
    <div
      v-if="isOffline"
      class="fixed top-0 left-0 right-0 z-[150] flex items-center justify-center gap-2 bg-brand-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
    >
      <span class="text-base">📶</span>
      <span>You're offline — browsing cached content</span>
    </div>
  </Transition>

  <!-- Back online banner — shown briefly when connection restored -->
  <Transition name="slide-down">
    <div
      v-if="showOnlineBanner"
      class="fixed top-0 left-0 right-0 z-[150] flex items-center justify-center gap-2 bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
    >
      <span class="text-base">✅</span>
      <span>You're back online</span>
    </div>
  </Transition>
</template>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
