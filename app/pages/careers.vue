<template>
  <div class="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl space-y-8">
      <div>
        <NuxtLink to="/home" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Home
        </NuxtLink>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-semibold text-brand-950">Career Opportunities</h1>
            <p class="mt-2 text-slate-600">Discover and connect with peers</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=48&h=48&q=80" alt="Profile" class="h-12 w-12 rounded-full object-cover" />
          </div>
        </div>

        <div class="mt-6">
          <div class="relative">
            <input type="text" placeholder="Search alumni by name, year, or industry" class="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-brand-900 focus:ring-2 focus:ring-brand-100" />
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          </div>
        </div>

        <div class="mt-6 flex gap-3">
          <button class="rounded-full bg-brand-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-900">
            Job Board
          </button>
          <button class="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Mentorship
          </button>
          <button class="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Workshops
          </button>
        </div>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-brand-950">Recommended Jobs</h2>
          <NuxtLink to="#" class="text-sm font-semibold text-brand-900 hover:text-brand-800">View All</NuxtLink>
        </div>

        <div class="mt-6 space-y-4">
          <!-- Job Card 1 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                  <span class="text-xl font-bold text-blue-600">G</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-brand-950">Senior Product Designer</h3>
                    <button class="text-slate-400 hover:text-slate-600">
                      <span class="text-xl">🔖</span>
                    </button>
                  </div>
                  <p class="mt-1 text-sm text-slate-600">Google • Mountain View, CA</p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">$140k - $180k</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Full-time</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Remote</span>
                  </div>
                </div>
              </div>
            </div>
            <button class="mt-6 w-full rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
              Apply Now
            </button>
          </div>

          <!-- Job Card 2 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                  <span class="text-xl font-bold text-green-600">S</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-brand-950">UX Researcher</h3>
                    <button class="text-slate-400 hover:text-slate-600">
                      <span class="text-xl">🔖</span>
                    </button>
                  </div>
                  <p class="mt-1 text-sm text-slate-600">Spotify • New York, NY</p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">$110k - $145k</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Contract</span>
                  </div>
                </div>
              </div>
            </div>
            <button class="mt-6 w-full rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
              Apply Now
            </button>
          </div>

          <!-- Job Card 3 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                  <span class="text-xl font-bold text-purple-600">M</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-brand-950">Software Engineer</h3>
                    <button class="text-slate-400 hover:text-slate-600">
                      <span class="text-xl">🔖</span>
                    </button>
                  </div>
                  <p class="mt-1 text-sm text-slate-600">Microsoft • Seattle, WA</p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">$130k - $170k</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Full-time</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Hybrid</span>
                  </div>
                </div>
              </div>
            </div>
            <button class="mt-6 w-full rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-brand-950">Meet Alumni Mentors</h2>
          <NuxtLink to="#" class="text-sm font-semibold text-brand-900 hover:text-brand-800">View All</NuxtLink>
        </div>

        <div class="mt-6 space-y-4">
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80" alt="Mentor" class="h-16 w-16 rounded-full object-cover" />
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-brand-950">Sarah Jenkins, '15</h3>
                  <p class="text-sm text-slate-600">VP Marketing @ Adobe</p>
                  <p class="mt-3 text-sm text-slate-600">Specializing in digital strategy and brand growth. Happy to review...</p>
                </div>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <span class="text-sm font-bold">OK</span>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <p class="text-sm text-slate-600">Can help <span class="font-semibold text-brand-950">interview</span></p>
              <button class="rounded-full border border-brand-950 bg-white px-6 py-2 text-sm font-semibold text-brand-950 transition hover:bg-brand-50">
                Request Meeting
              </button>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80" alt="Mentor" class="h-16 w-16 rounded-full object-cover" />
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-brand-950">Michael Chen, '12</h3>
                  <p class="text-sm text-slate-600">Senior Engineer @ Tesla</p>
                  <p class="mt-3 text-sm text-slate-600">Passionate about mentoring new grads in tech. Available for career...</p>
                </div>
              </div>
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span class="text-sm font-bold">MC</span>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <p class="text-sm text-slate-600">Can help <span class="font-semibold text-brand-950">career advice</span></p>
              <button class="rounded-full border border-brand-950 bg-white px-6 py-2 text-sm font-semibold text-brand-950 transition hover:bg-brand-50">
                Request Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
