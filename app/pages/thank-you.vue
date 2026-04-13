<template>
  <div class="space-y-10 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-8">
      <div>
        <NuxtLink to="/home" class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
          ← Back to Home
        </NuxtLink>
      </div>

      <section class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Thank You</p>
          <h1 class="text-4xl font-semibold text-slate-900">Thanks for donating</h1>
          <p class="text-slate-600">Your support helps students, research, and alumni initiatives move forward.</p>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div class="rounded-3xl bg-slate-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Total donated</p>
            <p class="mt-3 text-3xl font-semibold text-slate-900">$16,500</p>
          </div>
          <div class="rounded-3xl bg-slate-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Campaigns</p>
            <p class="mt-3 text-3xl font-semibold text-slate-900">6</p>
          </div>
          <div class="rounded-3xl bg-slate-50 p-6 text-center">
            <p class="text-sm uppercase tracking-[0.3em] text-slate-500">Lives touched</p>
            <p class="mt-3 text-3xl font-semibold text-slate-900">8,640</p>
          </div>
        </div>
      </section>

      <section class="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div class="space-y-6">
            <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Message</p>
            <h2 class="text-2xl font-semibold text-slate-900">A note of appreciation</h2>
            <p class="text-slate-600">Thank you for supporting student innovation, emergency relief, and alumni success. Your donation makes a meaningful difference.</p>
          </div>
        </div>

        <div class="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <p class="text-sm uppercase tracking-[0.35em] text-slate-300">Share the impact</p>
          <div class="mt-6 space-y-4">
            <button class="w-full rounded-3xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Share on Facebook</button>
            <button class="w-full rounded-3xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">Share on Twitter</button>
            <button class="w-full rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">Copy share link</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
