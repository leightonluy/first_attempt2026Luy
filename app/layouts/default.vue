<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = route.path !== '/'
</script>

<template>
  <div class="min-h-screen bg-brand-900 text-white">
    <header v-if="showNav" class="border-b border-brand-100 bg-white/95 text-brand-900 shadow-sm">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3">
          <img src="/ADDU.jpg" alt="Ateneo logo" class="h-10 w-10 rounded-2xl bg-white p-1 shadow-sm" />
          <NuxtLink to="/" class="text-lg font-semibold">Ateneo de Davao</NuxtLink>
        </div>
        <nav class="flex flex-wrap items-center gap-3 text-sm">
          <NuxtLink to="/donation-hub" class="rounded-full px-4 py-2 text-brand-900 hover:bg-brand-100">Donation</NuxtLink>
          <NuxtLink to="/transaction-history" class="rounded-full px-4 py-2 text-brand-900 hover:bg-brand-100">Transaction History</NuxtLink>
          <NuxtLink to="/campaign-creation" class="rounded-full px-4 py-2 text-brand-900 hover:bg-brand-100">Campaign Hub</NuxtLink>
          <NuxtLink to="/alumni-network" class="rounded-full px-4 py-2 text-brand-900 hover:bg-brand-100">Alumni Network</NuxtLink>
          <NuxtLink to="/careers" class="rounded-full px-4 py-2 text-brand-900 hover:bg-brand-100">Career</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
  </div>
</template>
