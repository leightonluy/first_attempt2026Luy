<script setup lang="ts">
import { ref } from 'vue'

const currentStep = ref(1)
const totalSteps = 4

const wizard = ref({
  title: '',
  category: '',
  description: '',
  coverImage: '',
  target: 0,
  deadline: '',
  impactTag: '',
  documents: [] as File[],
  trustSafety: false,
  realTimeAlerts: false,
  thankYouVideo: '',
  thankYouMessage: ''
})

const categories = [
  { name: 'Education', icon: '📚', color: 'bg-blue-100 text-blue-600' },
  { name: 'Health', icon: '🏥', color: 'bg-orange-100 text-orange-600' },
  { name: 'Community', icon: '🤝', color: 'bg-purple-100 text-purple-600' },
  { name: 'Emergency', icon: '🚨', color: 'bg-red-100 text-red-600' }
]

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitCampaign = () => {
  navigateTo('/thank-you')
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl space-y-8">
      <div>
        <NuxtLink to="/donation-hub" class="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
          ← Back to Donation Hub
        </NuxtLink>
      </div>

      <div class="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div class="space-y-2">
          <h1 class="text-3xl font-semibold text-brand-950">Create Campaign</h1>
        </div>

        <div class="mt-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div v-for="step in totalSteps" :key="step" :class="['flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold', step === currentStep ? 'bg-brand-950 text-white' : step < currentStep ? 'bg-brand-900 text-white' : 'bg-slate-200 text-slate-600']">
                {{ step }}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <!-- Step 1: Purpose & Details -->
          <div v-if="currentStep === 1" class="space-y-6">
            <h2 class="text-xl font-semibold text-brand-950">Purpose & Details</h2>
            
            <div>
              <label class="block text-sm font-medium text-slate-700">Campaign Title</label>
              <input v-model="wizard.title" type="text" placeholder="e.g. Annual Charity Gala" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-900 focus:ring-2 focus:ring-brand-100" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Select Category</label>
              <div class="mt-3 grid grid-cols-2 gap-3">
                <button
                  v-for="category in categories"
                  :key="category.name"
                  @click="wizard.category = category.name"
                  :class="['flex flex-col items-center gap-2 rounded-2xl border-2 p-4 transition', wizard.category === category.name ? 'border-brand-950 bg-brand-50' : 'border-slate-200 bg-white hover:border-slate-300']"
                >
                  <div :class="['flex h-12 w-12 items-center justify-center rounded-xl text-2xl', category.color]">
                    {{ category.icon }}
                  </div>
                  <span class="text-sm font-semibold text-slate-900">{{ category.name }}</span>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Purpose & Description</label>
              <textarea v-model="wizard.description" rows="4" placeholder="Describe what this campaign is about and why it matters..." class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-900 focus:ring-2 focus:ring-brand-100"></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Cover Image</label>
              <div class="mt-2 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div>
                  <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-900">
                    <span class="text-3xl">📷</span>
                  </div>
                  <p class="mt-3 text-sm font-medium text-slate-900">Upload Cover</p>
                  <p class="mt-1 text-xs text-slate-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Set Goal -->
          <div v-if="currentStep === 2" class="space-y-6">
            <h2 class="text-xl font-semibold text-brand-950">Set Your Goal</h2>
            
            <div>
              <label class="block text-sm font-medium text-slate-700">Target Amount (₱)</label>
              <div class="mt-2 flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span class="text-slate-600">₱</span>
                <input v-model.number="wizard.target" type="number" min="100" placeholder="0.00" class="ml-2 w-full border-none bg-transparent text-sm text-slate-900 outline-none" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Campaign Deadline</label>
              <input v-model="wizard.deadline" type="text" placeholder="mm/dd/yyyy" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-900 focus:ring-2 focus:ring-brand-100" />
            </div>
          </div>

          <!-- Step 3: Verification Documents -->
          <div v-if="currentStep === 3" class="space-y-6">
            <h2 class="text-xl font-semibold text-brand-950">Verification Documents</h2>
            
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div class="flex items-start gap-3">
                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-brand-950 text-white">
                  <span class="text-xs">✓</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-slate-700">To ensure trust within the alumni network, please submit a valid ID or certificate related to your cause.</p>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Upload ID / Certificates</label>
              <div class="mt-2 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div>
                  <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-900">
                    <span class="text-3xl">📎</span>
                  </div>
                  <p class="mt-3 text-sm font-medium text-slate-900">Upload ID / Certificates</p>
                  <p class="mt-1 text-xs text-slate-500">Attach valid files</p>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <input v-model="wizard.trustSafety" type="checkbox" class="h-5 w-5 rounded border-slate-300 text-brand-950" />
              <label class="text-sm text-slate-700">I agree to the trust and safety guidelines</label>
            </div>
          </div>

          <!-- Step 4: Engagement & Appreciation -->
          <div v-if="currentStep === 4" class="space-y-6">
            <h2 class="text-xl font-semibold text-brand-950">Engagement & Appreciation</h2>
            
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div class="flex items-center gap-3">
                <input v-model="wizard.realTimeAlerts" type="checkbox" class="h-5 w-5 rounded border-slate-300 text-brand-950" />
                <div class="flex-1">
                  <p class="text-sm font-semibold text-slate-900">Real-time Alerts</p>
                  <p class="text-sm text-slate-600">Get notified when alumni donate</p>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Thank You Message</label>
              <textarea v-model="wizard.thankYouMessage" rows="3" placeholder="Write a message to be sent to donors automatically..." class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-900 focus:ring-2 focus:ring-brand-100"></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700">Appreciation Video (Optional)</label>
              <div class="mt-2 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div>
                  <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                    <span class="text-3xl">🎥</span>
                  </div>
                  <p class="mt-3 text-sm font-medium text-slate-900">Upload Thank You Video</p>
                  <p class="mt-1 text-xs text-slate-500">Optional video message</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-between">
          <button v-if="currentStep > 1" @click="prevStep" class="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Previous</button>
          <div v-else></div>
          <button v-if="currentStep < totalSteps" @click="nextStep" class="rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">Next</button>
          <button v-if="currentStep === totalSteps" @click="submitCampaign" class="rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">Send for Verification ✓</button>
        </div>
      </div>
    </div>
  </div>
</template>
