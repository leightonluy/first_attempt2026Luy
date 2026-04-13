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
            <h1 class="text-3xl font-semibold text-brand-950">Alumni Network</h1>
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
            <button class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <span class="text-xl">⚙️</span>
            </button>
          </div>
        </div>

        <div class="mt-6 flex gap-3">
          <button class="flex items-center gap-2 rounded-full bg-brand-950 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-900">
            <span>📍</span>
            Near Me
          </button>
          <button class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            <span>💼</span>
            Industry Experts
          </button>
        </div>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-brand-950">Featured Alumni</h2>
          <NuxtLink to="#" class="text-sm font-semibold text-brand-900 hover:text-brand-800">View all</NuxtLink>
        </div>

        <div class="mt-6 space-y-6">
          <!-- Alumni Card 1 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div class="flex justify-end">
              <span class="flex items-center gap-1 rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold text-white">
                <span>✓</span>
                VERIFIED
              </span>
            </div>
            <div class="mt-4 flex justify-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80" alt="Sarah Chen" class="h-24 w-24 rounded-full object-cover shadow-md" />
            </div>
            <h3 class="mt-4 text-xl font-semibold text-brand-950">Sarah Chen</h3>
            <p class="mt-2 text-sm text-slate-600">Senior Product Designer at TechFlow</p>
            <p class="mt-1 text-sm font-semibold text-brand-900">BS Computer Science '18</p>
            <div class="mt-6 flex gap-3">
              <button class="flex-1 rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
                Connect
              </button>
              <button class="flex-1 rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Message
              </button>
            </div>
          </div>

          <!-- Alumni Card 2 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div class="flex justify-end">
              <span class="flex items-center gap-1 rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold text-white">
                <span>✓</span>
                VERIFIED
              </span>
            </div>
            <div class="mt-4 flex justify-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80" alt="Marcus Johnson" class="h-24 w-24 rounded-full object-cover shadow-md" />
            </div>
            <h3 class="mt-4 text-xl font-semibold text-brand-950">Marcus Johnson</h3>
            <p class="mt-2 text-sm text-slate-600">Head of Marketing at Global Corp</p>
            <p class="mt-1 text-sm font-semibold text-brand-900">BA Communications '15</p>
            <div class="mt-6 flex gap-3">
              <button class="flex-1 rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
                Connect
              </button>
              <button class="flex-1 rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Message
              </button>
            </div>
          </div>

          <!-- Alumni Card 3 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div class="flex justify-end">
              <span class="flex items-center gap-1 rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold text-white">
                <span>✓</span>
                VERIFIED
              </span>
            </div>
            <div class="mt-4 flex justify-center">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80" alt="Elena Rodriguez" class="h-24 w-24 rounded-full object-cover shadow-md" />
            </div>
            <h3 class="mt-4 text-xl font-semibold text-brand-950">Elena Rodriguez</h3>
            <p class="mt-2 text-sm text-slate-600">Civil Engineer at BuildRight Inc.</p>
            <p class="mt-1 text-sm font-semibold text-brand-900">BS Civil Engineering '19</p>
            <div class="mt-6 flex gap-3">
              <button class="flex-1 rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
                Connect
              </button>
              <button class="flex-1 rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Message
              </button>
            </div>
          </div>

          <!-- Alumni Card 4 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div class="flex justify-end">
              <span class="flex items-center gap-1 rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold text-white">
                <span>✓</span>
                VERIFIED
              </span>
            </div>
            <div class="mt-4 flex justify-center">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80" alt="David Kim" class="h-24 w-24 rounded-full object-cover shadow-md" />
            </div>
            <h3 class="mt-4 text-xl font-semibold text-brand-950">David Kim</h3>
            <p class="mt-2 text-sm text-slate-600">Data Scientist at Analytics Pro</p>
            <p class="mt-1 text-sm font-semibold text-brand-900">BS Mathematics '17</p>
            <div class="mt-6 flex gap-3">
              <button class="flex-1 rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
                Connect
              </button>
              <button class="flex-1 rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Message
              </button>
            </div>
          </div>

          <!-- Alumni Card 5 -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div class="flex justify-end">
              <span class="flex items-center gap-1 rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold text-white">
                <span>✓</span>
                VERIFIED
              </span>
            </div>
            <div class="mt-4 flex justify-center">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80" alt="Jessica Martinez" class="h-24 w-24 rounded-full object-cover shadow-md" />
            </div>
            <h3 class="mt-4 text-xl font-semibold text-brand-950">Jessica Martinez</h3>
            <p class="mt-2 text-sm text-slate-600">Financial Analyst at InvestCorp</p>
            <p class="mt-1 text-sm font-semibold text-brand-900">BS Business Admin '16</p>
            <div class="mt-6 flex gap-3">
              <button class="flex-1 rounded-full bg-brand-950 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
                Connect
              </button>
              <button class="flex-1 rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
