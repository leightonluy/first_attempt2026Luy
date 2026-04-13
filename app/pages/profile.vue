<template>
  <div class="min-h-screen bg-brand-100 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-8">
      <!-- Navigation -->
      <div>
        <NuxtLink to="/home" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Home
        </NuxtLink>
      </div>

      <section class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="flex items-center gap-5">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=120&h=120&q=80" alt="Profile photo" class="h-24 w-24 rounded-full object-cover shadow-md" />
              <div class="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-800 text-white ring-2 ring-white">
                ✓
              </div>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Verified alumni</p>
              <h1 class="text-3xl font-semibold text-brand-900">Dr. Santiago Reyes</h1>
              <p class="mt-2 text-sm text-slate-600">Synced with Registrar • trusted identity verified</p>
            </div>
          </div>
          <button class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50">
            Settings
          </button>
        </div>
      </section>

      <section class="grid gap-6 xl:grid-cols-[1.3fr_0.95fr]">
        <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Academic Passport</p>
              <h2 class="mt-2 text-2xl font-semibold text-brand-900">Official digital credential</h2>
            </div>
            <span class="rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">Registrar synced</span>
          </div>

          <div class="mt-8 rounded-[2rem] bg-brand-900 p-8 text-white shadow-xl ring-1 ring-brand-800">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-brand-100">Ateneo de Davao University</p>
                <h3 class="mt-3 text-3xl font-semibold">Verified Academic Passport</h3>
              </div>
              <div class="grid gap-2 rounded-3xl bg-brand-800 px-4 py-3 text-sm">
                <span class="font-semibold">GRADUATION</span>
                <span>Batch 2005</span>
              </div>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p class="text-xs uppercase tracking-[0.35em] text-brand-200">Degree</p>
                <p class="mt-2 text-lg font-semibold">Bachelor of Science in Management</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.35em] text-brand-200">Passport ID</p>
                <p class="mt-2 text-lg font-semibold">ADDU-2026-XY9Z</p>
              </div>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-[auto_1fr] items-center">
              <div class="grid h-28 w-28 place-items-center rounded-3xl bg-white text-brand-900">
                <div class="text-sm font-semibold">QR</div>
              </div>
              <div>
                <p class="text-sm text-brand-100">Share a secure verification link with employers or staff without exposing your full transcript.</p>
                <button class="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-100">
                  Share Verification Link
                </button>
              </div>
            </div>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div class="rounded-3xl bg-brand-50 p-5">
              <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Status</p>
              <p class="mt-3 text-xl font-semibold text-brand-900">Verified</p>
            </div>
            <div class="rounded-3xl bg-brand-50 p-5">
              <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Record</p>
              <p class="mt-3 text-xl font-semibold text-brand-900">Registrar synced</p>
            </div>
            <div class="rounded-3xl bg-brand-50 p-5">
              <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Privacy</p>
              <p class="mt-3 text-xl font-semibold text-brand-900">Controlled</p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-brand-800">External credentials</p>
                <h3 class="mt-2 text-2xl font-semibold text-brand-900">Badges & certifications</h3>
              </div>
              <button class="rounded-full bg-brand-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Add External Badge</button>
            </div>

            <div class="mt-6 space-y-4">
              <div class="rounded-3xl border border-slate-200 bg-brand-50 p-5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-brand-900">Leadership Excellence Badge</p>
                    <p class="mt-1 text-sm text-slate-600">Verified by alumni council</p>
                  </div>
                  <span class="rounded-full bg-brand-800 px-3 py-1 text-xs font-semibold text-white">Verified</span>
                </div>
              </div>
              <div class="rounded-3xl border border-slate-200 bg-white p-5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-brand-900">Continuing Education Badge</p>
                    <p class="mt-1 text-sm text-slate-600">Awaiting verification</p>
                  </div>
                  <span class="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">Pending</span>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-brand-800">Privacy filters</p>
                <h3 class="mt-2 text-2xl font-semibold text-brand-900">Control who can see each part of your profile</h3>
              </div>
            </div>
            <div class="mt-6 space-y-4 text-sm text-slate-600">
              <label class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span>
                  <span class="font-semibold text-slate-900">Employers only</span>
                  <p class="mt-1 text-slate-600">Share academic passport and graduation details.</p>
                </span>
                <input type="checkbox" class="h-5 w-5 rounded border-slate-300 text-brand-800" checked />
              </label>
              <label class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span>
                  <span class="font-semibold text-slate-900">Alumni only</span>
                  <p class="mt-1 text-slate-600">Show community achievements and network info.</p>
                </span>
                <input type="checkbox" class="h-5 w-5 rounded border-slate-300 text-brand-800" />
              </label>
              <label class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span>
                  <span class="font-semibold text-slate-900">Staff verification only</span>
                  <p class="mt-1 text-slate-600">Reveal official registrar confirmation to authorized staff.</p>
                </span>
                <input type="checkbox" class="h-5 w-5 rounded border-slate-300 text-brand-800" checked />
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
