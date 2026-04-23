<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// Hide the top nav on the login page
const showNav = computed(() => route.path !== '/')
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <header v-if="showNav" class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3">
          <img src="/ADDU.jpg" alt="Ateneo logo" class="h-9 w-9 rounded-xl bg-white p-1 shadow-sm" />
          <NuxtLink to="/home" class="text-base font-semibold text-brand-950">Ateneo de Davao</NuxtLink>
        </div>
        <nav class="hidden items-center gap-1 text-sm sm:flex">
          <NuxtLink to="/home" class="rounded-full px-3 py-2 text-brand-900 transition hover:bg-brand-100">Home</NuxtLink>
          <NuxtLink to="/alumni-network" class="rounded-full px-3 py-2 text-brand-900 transition hover:bg-brand-100">Network</NuxtLink>
          <NuxtLink to="/donation-hub" class="rounded-full px-3 py-2 text-brand-900 transition hover:bg-brand-100">Donate</NuxtLink>
          <NuxtLink to="/careers" class="rounded-full px-3 py-2 text-brand-900 transition hover:bg-brand-100">Careers</NuxtLink>
          <NuxtLink to="/records" class="rounded-full px-3 py-2 text-brand-900 transition hover:bg-brand-100">Records</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Page content injected here by NuxtLayout in app.vue -->
    <slot />
  </div>
</template>
