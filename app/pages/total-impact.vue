<template>
  <div class="min-h-screen bg-brand-100 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-8">
      <div>
        <NuxtLink to="/donation-hub" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Donation Hub
        </NuxtLink>
      </div>

      <section class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Total Impact</p>
          <h1 class="text-4xl font-semibold text-brand-900">Your Complete Giving Journey</h1>
          <p class="text-slate-600">See all your contributions across categories, track your impact over time, and discover how your donations are making a difference.</p>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div class="rounded-3xl bg-brand-50 p-5 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Total Donated</p>
            <p class="mt-3 text-3xl font-semibold text-brand-900">$7,800</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-5 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Campaigns Supported</p>
            <p class="mt-3 text-3xl font-semibold text-brand-900">12</p>
          </div>
          <div class="rounded-3xl bg-brand-50 p-5 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Lives Impacted</p>
            <p class="mt-3 text-3xl font-semibold text-brand-900">2,450</p>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-brand-900">Impact by Category</h2>
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                <p class="text-lg font-semibold text-brand-900">Education</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">$3,200</p>
              <p class="mt-1 text-sm text-slate-600">Scholarships & programs</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-blue-600"></div>
                <p class="text-lg font-semibold text-brand-900">Health</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">$2,100</p>
              <p class="mt-1 text-sm text-slate-600">Medical aid & wellness</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-blue-400"></div>
                <p class="text-lg font-semibold text-brand-900">Community</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">$1,500</p>
              <p class="mt-1 text-sm text-slate-600">Local initiatives</p>
            </div>
            <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="flex items-center gap-3">
                <div class="h-4 w-4 rounded-full bg-blue-300"></div>
                <p class="text-lg font-semibold text-brand-900">Environment</p>
              </div>
              <p class="mt-3 text-3xl font-semibold text-brand-900">$900</p>
              <p class="mt-1 text-sm text-slate-600">Conservation efforts</p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-brand-900">Recent Donations</h2>
          <div class="mt-6 space-y-4">
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-lg font-semibold text-brand-900">Scholarship Fund</p>
                  <p class="text-sm text-slate-600">Education • March 15, 2026</p>
                </div>
                <p class="text-lg font-semibold text-brand-900">$500</p>
              </div>
            </div>
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-lg font-semibold text-brand-900">Health Clinic Support</p>
                  <p class="text-sm text-slate-600">Health • February 28, 2026</p>
                </div>
                <p class="text-lg font-semibold text-brand-900">$300</p>
              </div>
            </div>
            <div class="rounded-3xl bg-brand-50 p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-lg font-semibold text-brand-900">Community Garden</p>
                  <p class="text-sm text-slate-600">Environment • January 10, 2026</p>
                </div>
                <p class="text-lg font-semibold text-brand-900">$200</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
