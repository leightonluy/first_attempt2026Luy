<script setup lang="ts">
import DonationCard from '~/components/DonationCard.vue'
import { useDonationStore } from '~/stores/donation'
import { computed, ref } from 'vue'

const donationStore = useDonationStore()

const totalRaised = computed(() => donationStore.totalImpact)
const campaignCount = computed(() => donationStore.campaigns.length)
const livesTouched = computed(() => 8500)

const categories = [
  { name: 'Education', amount: 3200, color: '#2563EB' },
  { name: 'Health', amount: 2100, color: '#1D4ED8' },
  { name: 'Community', amount: 1500, color: '#0EA5E9' },
  { name: 'Environment', amount: 900, color: '#38BDF8' },
]

const totalImpact = computed(() => categories.reduce((sum, category) => sum + category.amount, 0))
const selectedMode = ref('Recurring')
const selectedFrequency = ref('Bi-weekly')
const amount = ref(1500)
const paymentMethod = ref('GCash')
const pinnedCause = ref('Scholarship Fund')
const confirmationMessage = ref('')

const frequencyOptions = ['Weekly', 'Bi-weekly', 'Monthly']
const paymentOptions = ['GCash', 'Bank Transfer', 'Credit Card']
const causeOptions = ['Scholarship Fund', 'Health Relief', 'Community Building', 'Environment Support']

const circumference = 2 * Math.PI * 70
const donutSegments = computed(() => {
  let offset = 0
  return categories.map(category => {
    const dash = (category.amount / totalImpact.value) * circumference
    const segment = {
      ...category,
      dash: `${dash} ${circumference}`,
      offset,
    }
    offset -= dash
    return segment
  })
})

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

const confirmPledge = () => {
  confirmationMessage.value = `Your ${selectedMode.value.toLowerCase()} pledge of ${formatCurrency(amount.value)} via ${paymentMethod.value} has been pinned to ${pinnedCause.value}.`
}
</script>

<template>
  <div class="bg-brand-100 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-8">
      <div>
        <NuxtLink to="/home" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Home
        </NuxtLink>
      </div>

      <section class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div class="space-y-4">
            <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Donation Hub</p>
            <h1 class="text-4xl font-semibold text-brand-900">Pledge & Automate Your Giving</h1>
            <p class="text-slate-600">Set up recurring donations to the causes you care most about, and watch your total impact grow without having to remember every payday.</p>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="rounded-3xl bg-brand-50 p-5">
                <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Total Impact</p>
                <p class="mt-3 text-3xl font-semibold text-brand-900">{{ formatCurrency(totalImpact) }}</p>
              </div>
              <div class="rounded-3xl bg-brand-50 p-5">
                <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Pinned Cause</p>
                <p class="mt-3 text-3xl font-semibold text-brand-900">{{ pinnedCause }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <NuxtLink href="#pledge" class="inline-flex items-center justify-center rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Your Total Impact</NuxtLink>
              <NuxtLink to="/total-impact" class="inline-flex items-center justify-center rounded-full border border-brand-800 bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50">View Full Impact</NuxtLink>
              <NuxtLink to="/transaction-history" class="inline-flex items-center justify-center rounded-full border border-brand-800 bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50">Transaction History</NuxtLink>
            </div>
          </div>

          <div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <div class="relative mx-auto h-56 w-56">
              <svg viewBox="0 0 180 180" class="h-full w-full">
                <circle cx="90" cy="90" r="70" fill="none" stroke="#E2E8F0" stroke-width="28" />
                <circle
                  v-for="segment in donutSegments"
                  :key="segment.name"
                  cx="90"
                  cy="90"
                  r="70"
                  fill="none"
                  :stroke="segment.color"
                  stroke-width="28"
                  stroke-linecap="round"
                  :stroke-dasharray="segment.dash"
                  :stroke-dashoffset="segment.offset"
                  transform="rotate(-90 90 90)"
                />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <p class="text-sm uppercase tracking-[0.35em] text-slate-500">Impact</p>
                <p class="text-3xl font-semibold text-slate-900">{{ formatCurrency(totalImpact) }}</p>
              </div>
            </div>
            <div class="mt-6 space-y-3">
              <div v-for="category in categories" :key="category.name" class="flex items-center gap-3 rounded-3xl bg-white px-4 py-3 shadow-sm">
                <span :style="{ backgroundColor: category.color }" class="h-3.5 w-3.5 rounded-full"></span>
                <div class="flex-1">
                  <p class="text-sm font-semibold text-slate-900">{{ category.name }}</p>
                  <p class="text-sm text-slate-500">{{ formatCurrency(category.amount) }}</p>
                </div>
                <span class="text-sm font-semibold text-slate-700">{{ Math.round((category.amount / totalImpact) * 100) }}%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Discover & Create</p>
            <h2 class="text-2xl font-semibold text-brand-900">Fundraisers & Campaigns</h2>
            <p class="text-slate-600">Find verified urgent appeals or start your own campaign to support causes you care about.</p>
          </div>
          <div class="flex gap-4">
            <input type="text" placeholder="Search campaigns..." class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-100" />
            <NuxtLink to="/campaign-creation" class="inline-flex items-center justify-center rounded-full bg-brand-800 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">+ Start a Campaign</NuxtLink>
          </div>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-3xl bg-brand-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Education</p>
            <p class="mt-3 text-2xl font-semibold text-brand-900">8</p>
            <p class="text-sm text-slate-600">Active campaigns</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Health</p>
            <p class="mt-3 text-2xl font-semibold text-brand-900">5</p>
            <p class="text-sm text-slate-600">Active campaigns</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Community</p>
            <p class="mt-3 text-2xl font-semibold text-brand-900">6</p>
            <p class="text-sm text-slate-600">Active campaigns</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Environment</p>
            <p class="mt-3 text-2xl font-semibold text-brand-900">4</p>
            <p class="text-sm text-slate-600">Active campaigns</p>
          </div>
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-semibold text-brand-900">Verified Urgent Appeals</h3>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80" alt="Campaign" class="h-16 w-16 rounded-2xl object-cover" />
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <span class="rounded-full bg-brand-800 px-2 py-1 text-xs font-semibold text-white">Verified</span>
                    <p class="text-sm text-slate-500">Education</p>
                  </div>
                  <h4 class="mt-2 text-lg font-semibold text-brand-900">Scholarship Fund for Underprivileged Students</h4>
                  <p class="mt-1 text-sm text-slate-600">Help provide education opportunities for deserving students.</p>
                  <div class="mt-4">
                    <div class="h-2 rounded-full bg-slate-200">
                      <div class="h-2 rounded-full bg-brand-800" style="width: 75%"></div>
                    </div>
                    <p class="mt-2 text-sm text-slate-600">$7,500 raised of $10,000 goal</p>
                  </div>
                  <button class="mt-4 w-full rounded-3xl bg-brand-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">Donate Now</button>
                </div>
              </div>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=80&h=80&q=80" alt="Campaign" class="h-16 w-16 rounded-2xl object-cover" />
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <span class="rounded-full bg-brand-800 px-2 py-1 text-xs font-semibold text-white">Verified</span>
                    <p class="text-sm text-slate-500">Health</p>
                  </div>
                  <h4 class="mt-2 text-lg font-semibold text-brand-900">Medical Aid for Rural Communities</h4>
                  <p class="mt-1 text-sm text-slate-600">Support healthcare access in underserved areas.</p>
                  <div class="mt-4">
                    <div class="h-2 rounded-full bg-slate-200">
                      <div class="h-2 rounded-full bg-brand-800" style="width: 60%"></div>
                    </div>
                    <p class="mt-2 text-sm text-slate-600">$6,000 raised of $10,000 goal</p>
                  </div>
                  <button class="mt-4 w-full rounded-3xl bg-brand-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">Donate Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pledge" class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Your Impact Details</p>
            <h2 class="text-3xl font-semibold text-slate-900">Pledge & Automate</h2>
            <p class="text-slate-600">Choose your frequency, payment method, and pin the pledge to a cause so giving becomes effortless.</p>
          </div>
          <div class="rounded-3xl bg-brand-50 px-6 py-4 text-sm text-slate-700">
            Donating regularly helps keep your commitment active even when life gets busy.
          </div>
        </div>

        <div class="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-6 rounded-[2rem] border border-slate-200 bg-brand-50 p-6">
            <div class="flex flex-wrap items-center gap-4">
              <button
                @click="selectedMode = 'One-time'"
                :class="selectedMode === 'One-time' ? 'bg-brand-800 text-white' : 'bg-white text-slate-700'"
                class="rounded-full px-5 py-2 text-sm font-semibold transition"
              >
                One-time
              </button>
              <button
                @click="selectedMode = 'Recurring'"
                :class="selectedMode === 'Recurring' ? 'bg-brand-800 text-white' : 'bg-white text-slate-700'"
                class="rounded-full px-5 py-2 text-sm font-semibold transition"
              >
                Recurring
              </button>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-slate-700">Frequency</label>
                <select v-model="selectedFrequency" class="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-100">
                  <option v-for="option in frequencyOptions" :key="option">{{ option }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700">Amount</label>
                <div class="mt-2 flex items-center rounded-3xl border border-slate-200 bg-white px-4 py-3">
                  <span class="text-slate-600">₱</span>
                  <input v-model.number="amount" type="number" min="100" class="ml-3 w-full border-none bg-transparent text-sm text-slate-900 outline-none" />
                </div>
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-slate-700">Payment method</label>
                <select v-model="paymentMethod" class="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-100">
                  <option v-for="option in paymentOptions" :key="option">{{ option }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700">Pin to cause</label>
                <select v-model="pinnedCause" class="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-100">
                  <option v-for="option in causeOptions" :key="option">{{ option }}</option>
                </select>
              </div>
            </div>

            <button @click="confirmPledge" class="w-full rounded-3xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Confirm Pledge</button>

            <p v-if="confirmationMessage" class="rounded-3xl bg-white p-4 text-sm text-brand-900 shadow-sm">{{ confirmationMessage }}</p>
          </div>

          <div class="space-y-4 rounded-[2rem] bg-white p-6 shadow-sm">
            <div class="rounded-3xl bg-brand-50 p-5">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Your pledge summary</p>
              <p class="mt-3 text-xl font-semibold text-slate-900">{{ selectedMode }} donation</p>
              <p class="mt-2 text-slate-600">{{ selectedFrequency }} • {{ formatCurrency(amount) }} • {{ paymentMethod }}</p>
            </div>

            <div class="rounded-3xl bg-brand-50 p-5">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Pinned cause</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">{{ pinnedCause }}</p>
            </div>

            <div class="rounded-3xl bg-brand-50 p-5">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Monthly projection</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">{{ formatCurrency(amount * (selectedFrequency === 'Weekly' ? 4 : selectedFrequency === 'Bi-weekly' ? 2 : 1)) }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-4 sm:grid-cols-2">
        <NuxtLink to="/careers" class="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:bg-brand-50">
          <h2 class="text-2xl font-semibold text-brand-900">Career Opportunities</h2>
          <p class="mt-3 text-slate-600">Explore available roles, internships, and campus opportunities.</p>
        </NuxtLink>
        <NuxtLink to="/alumni-network" class="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:bg-brand-50">
          <h2 class="text-2xl font-semibold text-brand-900">Alumni Network</h2>
          <p class="mt-3 text-slate-600">Connect with Ateneo alumni and community initiatives.</p>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

