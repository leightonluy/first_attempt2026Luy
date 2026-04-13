<template>
  <div class="min-h-screen bg-white">
    <div class="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10">
      <aside class="rounded-[2rem] bg-brand-950 p-6 text-white shadow-2xl ring-1 ring-brand-900/40">
        <div class="mb-10 flex items-center gap-3">
          <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-800 text-2xl font-bold text-white shadow-lg">A</div>
          <div>
            <p class="text-xs uppercase tracking-[0.35em] text-brand-300">Ateneo Admin</p>
            <h2 class="mt-2 text-xl font-semibold">Admin Dashboard</h2>
          </div>
        </div>

        <nav class="space-y-2 text-sm font-medium text-brand-300">
          <NuxtLink to="/home" class="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-brand-900 hover:text-white">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white">🏠</span>
            Home
          </NuxtLink>
          <NuxtLink to="/alumni-network" class="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-brand-900 hover:text-white">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white">🌐</span>
            Network
          </NuxtLink>
          <NuxtLink to="/donation-hub" class="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-brand-900 hover:text-white">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white">💙</span>
            Donate
          </NuxtLink>
          <NuxtLink to="/careers" class="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-brand-900 hover:text-white">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white">🎓</span>
            Career
          </NuxtLink>
          <NuxtLink to="/records" class="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-brand-900 hover:text-white">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white">📄</span>
            Records
          </NuxtLink>
          <NuxtLink to="/" class="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-brand-900 hover:text-white">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-900 text-white">🔍</span>
            Search
          </NuxtLink>
        </nav>

        <div class="mt-12 rounded-[2rem] bg-brand-900/80 p-5 text-sm text-brand-300 shadow-inner">
          <p class="uppercase tracking-[0.35em] text-brand-300">Your Daily Snapshot</p>
          <div class="mt-5 space-y-4">
            <div class="rounded-3xl bg-brand-900/90 p-4">
              <p class="text-xs uppercase tracking-[0.35em] text-brand-300">Jobs for You</p>
              <p class="mt-2 text-3xl font-semibold text-white">5</p>
              <p class="mt-1 text-sm text-brand-300">new matches</p>
            </div>
            <div class="rounded-3xl bg-brand-900/90 p-4">
              <p class="text-xs uppercase tracking-[0.35em] text-brand-300">Verified Status</p>
              <div class="mt-3 w-full overflow-hidden rounded-full bg-brand-800/60">
                <div class="h-3 w-3/4 rounded-full bg-white"></div>
              </div>
              <p class="mt-2 text-sm text-brand-300">Profile 95%</p>
            </div>
          </div>
        </div>
      </aside>

      <main class="space-y-6">
        <section class="rounded-[2rem] bg-brand-900 p-8 text-white shadow-2xl ring-1 ring-brand-800/40">
          <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-2xl">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Welcome</p>
              <h1 class="mt-3 text-5xl font-semibold leading-tight text-white">Hello, Admin</h1>
              <p class="mt-4 max-w-xl text-base text-brand-300">Manage alumni connections, donations, career opportunities, and documents from one verified dashboard.</p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:w-[380px]">
              <div class="rounded-[1.75rem] bg-white/15 p-6">
                <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Total Impact</p>
                <p class="mt-4 text-3xl font-semibold">₱45,230</p>
              </div>
              <div class="rounded-[1.75rem] bg-white/15 p-6">
                <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Recent Activity</p>
                <p class="mt-4 text-3xl font-semibold">3 updates</p>
              </div>
            </div>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <NuxtLink to="/alumni-network" class="group rounded-[1.75rem] bg-white/15 p-6 transition hover:bg-white/25">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Network</p>
              <p class="mt-3 text-xl font-semibold text-white">Alumni</p>
            </NuxtLink>
            <NuxtLink to="/donation-hub" class="group rounded-[1.75rem] bg-white/15 p-6 transition hover:bg-white/25">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Donate</p>
              <p class="mt-3 text-xl font-semibold text-white">Giving Hub</p>
            </NuxtLink>
            <NuxtLink to="/careers" class="group rounded-[1.75rem] bg-white/15 p-6 transition hover:bg-white/25">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Career</p>
              <p class="mt-3 text-xl font-semibold text-white">Jobs</p>
            </NuxtLink>
            <NuxtLink to="/records" class="group rounded-[1.75rem] bg-white/15 p-6 transition hover:bg-white/25">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-300">Records</p>
              <p class="mt-3 text-xl font-semibold text-white">Academic</p>
            </NuxtLink>
          </div>
        </section>

        <section class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-brand-900">Your Recent Activity</p>
                <h2 class="mt-2 text-2xl font-semibold text-brand-950">Latest updates</h2>
              </div>
              <NuxtLink to="/transaction-history" class="text-sm font-semibold text-brand-900 hover:text-brand-800">View All</NuxtLink>
            </div>

            <div class="mt-8 space-y-4">
              <div class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-brand-950">New Mentor Message</p>
                    <p class="mt-2 text-sm text-slate-600">Dr. Reyes replied to your inquiry about mentoring.</p>
                  </div>
                  <span class="text-sm text-slate-500">15m ago</span>
                </div>
              </div>
              <div class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-brand-950">Donation Receipt Ready</p>
                    <p class="mt-2 text-sm text-slate-600">Thank you for your contribution to the scholarship fund.</p>
                  </div>
                  <span class="text-sm text-slate-500">2h ago</span>
                </div>
              </div>
              <div class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-brand-950">Job Application Update</p>
                    <p class="mt-2 text-sm text-slate-600">Your application for "Project Manager" was moved to review.</p>
                  </div>
                  <span class="text-sm text-slate-500">1d ago</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-900">Your Daily Snapshot</p>
              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="rounded-[1.75rem] bg-slate-50 p-5">
                  <p class="text-sm uppercase tracking-[0.3em] text-brand-900">Jobs for You</p>
                  <p class="mt-3 text-3xl font-semibold text-brand-950">5</p>
                </div>
                <div class="rounded-[1.75rem] bg-slate-50 p-5">
                  <p class="text-sm uppercase tracking-[0.3em] text-brand-900">Verified Status</p>
                  <p class="mt-3 text-3xl font-semibold text-brand-950">95%</p>
                </div>
              </div>
            </div>
            <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p class="text-sm uppercase tracking-[0.35em] text-brand-900">Quick Actions</p>
              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <NuxtLink to="/donation-hub" class="rounded-[1.75rem] bg-slate-50 p-5 text-left transition hover:bg-slate-100">
                  <p class="text-sm text-brand-900">Open Donation Hub</p>
                  <p class="mt-2 text-lg font-semibold text-brand-950">Donate now</p>
                </NuxtLink>
                <NuxtLink to="/profile" class="rounded-[1.75rem] bg-slate-50 p-5 text-left transition hover:bg-slate-100">
                  <p class="text-sm text-brand-900">View Profile</p>
                  <p class="mt-2 text-lg font-semibold text-brand-950">Academic Passport</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
