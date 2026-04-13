<script setup lang="ts">
import { computed } from 'vue'
import { useDonationStore } from '~/stores/donation'

const donationStore = useDonationStore()
const filteredProjects = computed(() => donationStore.filteredProjects)

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
</script>

<template>
  <div class="space-y-8">
    <div>
      <NuxtLink to="/home" class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
        ← Back to Home
      </NuxtLink>
    </div>

    <section class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div class="space-y-4">
        <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Student Discovery</p>
        <h1 class="text-3xl font-semibold text-slate-900">Simple Project Explorer</h1>
        <p class="text-slate-600">Browse a concise list of student projects and review their progress in a clean layout.</p>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <div v-for="project in filteredProjects" :key="project.id" class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm uppercase tracking-[0.3em] text-brand-800">{{ project.status }}</p>
        <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ project.title }}</h2>
        <p class="mt-3 text-slate-600">{{ project.description }}</p>
        <div class="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>{{ project.progress }}% funded</span>
          <span>{{ formatCurrency(project.raised) }} raised</span>
        </div>
        <div class="mt-6 flex flex-wrap gap-2">
          <span v-for="member in project.team" :key="member.name" class="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-700">{{ member.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>
