<template>
  <div class="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl space-y-8">
      <div>
        <NuxtLink to="/home" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Home
        </NuxtLink>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-semibold text-brand-950">Academic Records</h1>
            <p class="mt-2 text-slate-600">Manage your credentials</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=48&h=48&q=80" alt="Profile" class="h-12 w-12 rounded-full object-cover" />
          </div>
        </div>

        <div class="mt-8 rounded-[2rem] bg-brand-950 p-8 text-white shadow-xl">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900">
                <span class="text-2xl">🎓</span>
              </div>
              <span class="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-brand-950">✓ VERIFIED</span>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm uppercase tracking-wider text-brand-300">Digital Academic Passport</p>
            <h2 class="mt-2 text-2xl font-bold">Bachelor of Science in Information Technology</h2>
            <div class="mt-4 flex gap-4">
              <span class="rounded-full bg-brand-900 px-4 py-1 text-sm">Magna Cum Laude</span>
              <span class="rounded-full bg-brand-900 px-4 py-1 text-sm">Class of 2023</span>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p class="text-sm uppercase tracking-wider text-brand-300">Student ID</p>
              <p class="mt-2 text-xl font-semibold">2020-10485</p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-wider text-brand-300">GPA</p>
              <p class="mt-2 text-xl font-semibold">3.85</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h2 class="text-2xl font-semibold text-brand-950">Document Services</h2>
        <div class="mt-6 space-y-4">
          <div class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                <span class="text-2xl">📄</span>
              </div>
              <div>
                <p class="font-semibold text-brand-950">Official Transcript</p>
                <p class="text-sm text-slate-600">Sealed & Certified Copy</p>
              </div>
            </div>
            <button class="rounded-full bg-brand-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-900">
              Request
            </button>
          </div>

          <div class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                <span class="text-2xl">🎓</span>
              </div>
              <div>
                <p class="font-semibold text-brand-950">e-Diploma</p>
                <p class="text-sm text-slate-600">Digital Certificate</p>
              </div>
            </div>
            <button class="rounded-full bg-brand-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-900">
              Download
            </button>
          </div>

          <div class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <span class="text-2xl">📋</span>
              </div>
              <div>
                <p class="font-semibold text-brand-950">Degree Verification</p>
                <p class="text-sm text-slate-600">For HR & Employers</p>
              </div>
            </div>
            <button class="rounded-full bg-brand-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-900">
              Request
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-brand-950">Request History</h2>
          <NuxtLink to="#" class="text-sm font-semibold text-brand-900 hover:text-brand-800">View All</NuxtLink>
        </div>
        <div class="mt-6 space-y-4">
          <div class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div class="flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200">
                <span class="text-xl">📄</span>
              </div>
              <div>
                <p class="font-semibold text-brand-950">Official Transcript</p>
                <p class="text-sm text-slate-600">Req #TR-2024-892 • Oct 12</p>
              </div>
            </div>
            <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">Processing</span>
          </div>

          <div class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div class="flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200">
                <span class="text-xl">🎓</span>
              </div>
              <div>
                <p class="font-semibold text-brand-950">Certificate of Good Moral</p>
                <p class="text-sm text-slate-600">Req #GM-2024-110 • Sep 18</p>
              </div>
            </div>
            <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">Ready</span>
          </div>

          <div class="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div class="flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200">
                <span class="text-xl">📋</span>
              </div>
              <div>
                <p class="font-semibold text-brand-950">Student ID Replacement</p>
                <p class="text-sm text-slate-600">Req #ID-2024-086 • May 10</p>
              </div>
            </div>
            <span class="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">Completed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
