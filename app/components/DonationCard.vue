<template>
  <div class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div class="relative h-48 overflow-hidden rounded-t-3xl bg-slate-100">
      <img v-if="image" :src="image" alt="Campaign image" class="h-full w-full object-cover" />
      <div v-else class="flex h-full items-center justify-center text-slate-500">No image</div>
      <span class="absolute left-4 top-4 inline-flex items-center rounded-full bg-brand-800 px-3 py-1 text-xs font-semibold text-white">
        {{ category }}
      </span>
    </div>

    <div class="space-y-4 p-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
          <p class="mt-1 text-sm text-slate-500">{{ description }}</p>
        </div>
        <span v-if="verified" class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
          Verified
        </span>
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between text-sm font-medium text-slate-600">
          <span>{{ currency(raised) }}</span>
          <span>{{ progress }}%</span>
        </div>
        <div class="h-2 overflow-hidden rounded-full bg-slate-100">
          <div class="h-full rounded-full bg-brand-800" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="flex items-center justify-between text-xs text-slate-400">
          <span>Goal: {{ currency(goal) }}</span>
          <span v-if="daysLeft !== undefined" class="inline-flex items-center gap-1">
            <Clock3 class="h-3.5 w-3.5 text-brand-800" />
            {{ daysLeft }} days left
          </span>
        </div>
      </div>

      <button class="w-full rounded-2xl bg-brand-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
        Donate Now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock3 } from 'lucide-vue-next'

const props = defineProps({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false, default: '' },
  progress: { type: Number, required: true },
  raised: { type: Number, required: true },
  goal: { type: Number, required: true },
  verified: { type: Boolean, default: false },
  daysLeft: { type: Number, required: false },
})

const currency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}
</script>
