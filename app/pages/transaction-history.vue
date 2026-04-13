<template>
  <div class="min-h-screen bg-brand-100 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-8">
      <!-- Navigation -->
      <div>
        <NuxtLink to="/donation-hub" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Donation Hub
        </NuxtLink>
      </div>

      <section class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Transaction History</p>
          <h1 class="text-4xl font-semibold text-brand-900">Your Complete Donation Record</h1>
          <p class="text-slate-600">Track all your contributions, view payment methods used, and monitor your giving history over time.</p>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div class="rounded-3xl bg-brand-50 p-5 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Total Donated</p>
            <p class="mt-3 text-3xl font-semibold text-brand-900">₱45,230</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-5 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Transactions</p>
            <p class="mt-3 text-3xl font-semibold text-brand-900">24</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-5 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Active Recurring</p>
            <p class="mt-3 text-3xl font-semibold text-brand-900">3</p>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-brand-900">Donations by Category</h2>
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                <p class="text-lg font-semibold text-brand-900">Education</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">₱18,500</p>
              <p class="mt-1 text-sm text-slate-600">Scholarships & programs</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-red-500"></div>
                <p class="text-lg font-semibold text-brand-900">Disaster Relief</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">₱12,000</p>
              <p class="mt-1 text-sm text-slate-600">Emergency aid & recovery</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-green-500"></div>
                <p class="text-lg font-semibold text-brand-900">Community</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">₱8,500</p>
              <p class="mt-1 text-sm text-slate-600">Local initiatives</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-purple-500"></div>
                <p class="text-lg font-semibold text-brand-900">Alumni Center</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">₱6,230</p>
              <p class="mt-1 text-sm text-slate-600">Facility construction</p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold text-brand-900">Recent Transactions</h2>
            <div class="flex space-x-2">
              <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Filter</button>
              <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Export</button>
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-brand-900">Monthly Education Fund</p>
                    <p class="text-sm text-slate-600">Education • Dec 15, 2023 • Credit Card ****1234</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold text-brand-900">₱2,500</p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-brand-900">Disaster Relief Fund</p>
                    <p class="text-sm text-slate-600">Emergency Aid • Nov 28, 2023 • Bank Transfer</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold text-brand-900">₱5,000</p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-brand-900">Alumni Center Campaign</p>
                    <p class="text-sm text-slate-600">Facility Construction • Oct 15, 2023 • PayPal</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold text-brand-900">₱10,000</p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-brand-900">Community Health Program</p>
                    <p class="text-sm text-slate-600">Health • Sep 20, 2023 • GCash</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold text-brand-900">₱3,200</p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-brand-900">Environmental Conservation</p>
                    <p class="text-sm text-slate-600">Environment • Aug 12, 2023 • Credit Card ****5678</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold text-brand-900">₱1,800</p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Load More Button -->
          <div class="text-center pt-4">
            <button class="px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-medium">Load More Transactions</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'Transaction History - Ateneo Alumni App'
})

// Static example data - not functional, just for display
const transactions = [
  {
    id: 1,
    title: 'Monthly Education Fund',
    description: 'Recurring donation to support student scholarships and educational programs.',
    date: 'Dec 15, 2023',
    amount: '₱2,500',
    method: 'Credit Card ****1234',
    status: 'Completed',
    type: 'recurring',
    category: 'Education'
  },
  {
    id: 2,
    title: 'Disaster Relief Fund',
    description: 'Emergency support for typhoon victims in affected communities.',
    date: 'Nov 28, 2023',
    amount: '₱5,000',
    method: 'Bank Transfer',
    status: 'Completed',
    type: 'one-time',
    category: 'Disaster Relief'
  },
  {
    id: 3,
    title: 'Alumni Center Campaign',
    description: 'Supporting the construction of the new alumni center facility.',
    date: 'Oct 15, 2023',
    amount: '₱10,000',
    method: 'PayPal',
    status: 'Completed',
    type: 'campaign',
    category: 'Alumni Center'
  },
  {
    id: 4,
    title: 'Community Health Program',
    description: 'Medical aid and wellness programs for local communities.',
    date: 'Sep 20, 2023',
    amount: '₱3,200',
    method: 'GCash',
    status: 'Completed',
    type: 'one-time',
    category: 'Community'
  },
  {
    id: 5,
    title: 'Environmental Conservation',
    description: 'Conservation efforts and environmental protection initiatives.',
    date: 'Aug 12, 2023',
    amount: '₱1,800',
    method: 'Credit Card ****5678',
    status: 'Completed',
    type: 'one-time',
    category: 'Environment'
  }
]
</script>