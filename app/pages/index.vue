<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

// Use navigateTo — pure client-side Vue Router navigation, no server request
const goToHome = () => {
  navigateTo('/home', { replace: true })
}
</script>

<template>
  <div class="min-h-screen bg-brand-900 px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="w-full max-w-md">
      <section class="rounded-[2rem] bg-white p-10 shadow-2xl ring-1 ring-slate-200">
        <div class="flex items-center gap-4">
          <img src="/ADDU.jpg" alt="Ateneo logo" class="h-14 w-14 rounded-3xl bg-brand-100 p-2 shadow" />
          <div>
            <p class="text-sm uppercase tracking-[0.4em] text-brand-800">Ateneo Alumni</p>
            <h1 class="text-2xl font-semibold text-brand-950">Welcome back</h1>
          </div>
        </div>
        <p class="mt-4 text-slate-600">Sign in to access your verified alumni dashboard.</p>

        <div class="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-brand-950">University ID / Email</h3>
            <span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase text-brand-800">Secure</span>
          </div>

          <form @submit.prevent="goToHome" class="mt-6 space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700">University ID or Email</label>
              <input
                v-model="username"
                type="text"
                placeholder="you@addu.edu.ph"
                class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700">Password</label>
              <input
                v-model="password"
                type="password"
                placeholder="Enter your password"
                class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              class="w-full rounded-3xl bg-brand-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
            >
              Log in
            </button>
          </form>

          <p class="mt-4 text-sm text-slate-500">Forgot your credentials? Contact Registrar support for help.</p>
        </div>
      </section>
    </div>
  </div>
</template>
