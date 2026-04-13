<template>
  <section class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-brand-800">Campaign Creation</p>
        <h2 class="mt-2 text-2xl font-semibold text-slate-900">4-Step Verified Campaign Wizard</h2>
      </div>
      <div class="rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">Step {{ currentStep }} of 4</div>
    </div>

    <div class="mb-6 grid gap-3 sm:grid-cols-4">
      <template v-for="step in steps" :key="step.id">
        <div :class="['rounded-3xl border p-4 text-center text-sm', currentStep === step.id ? 'border-brand-800 bg-brand-50 text-brand-900' : 'border-slate-200 bg-slate-50 text-slate-500']">
          <p class="font-semibold">Step {{ step.id }}</p>
          <p class="mt-2">{{ step.label }}</p>
        </div>
      </template>
    </div>

    <div class="space-y-6">
      <div v-if="currentStep === 1" class="space-y-4">
        <div>
          <label class="text-sm font-medium text-slate-700">Campaign title</label>
          <input v-model="wizard.title" type="text" placeholder="e.g. Fund the student hackathon" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100" />
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700">Category</label>
          <select v-model="wizard.category" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-100">
            <option>Alumni</option>
            <option>Student Projects</option>
            <option>Business</option>
            <option>Emergency</option>
          </select>
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700">Campaign description</label>
          <textarea v-model="wizard.description" rows="4" placeholder="Share your campaign purpose and impact" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100"></textarea>
        </div>
      </div>

      <div v-if="currentStep === 2" class="space-y-4">
        <div>
          <label class="text-sm font-medium text-slate-700">Target amount</label>
          <input v-model.number="wizard.target" type="number" min="100" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100" />
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700">Deadline</label>
          <input v-model="wizard.deadline" type="date" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100" />
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700">Impact tagline</label>
          <input v-model="wizard.impactTag" type="text" placeholder="e.g. Lives touched through student innovation" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100" />
        </div>
      </div>

      <div v-if="currentStep === 3" class="space-y-4">
        <p class="text-sm font-medium text-slate-700">Verification Documents</p>
        <div>
          <label class="text-sm text-slate-600">Government ID</label>
          <input @change="handleFiles($event, 'verificationId')" type="file" accept="image/*,.pdf" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none" />
          <p v-if="wizard.verificationId?.length" class="mt-2 text-xs text-slate-500">Uploaded: {{ wizard.verificationId?.[0]?.name }}</p>
        </div>
        <div>
          <label class="text-sm text-slate-600">Certificate or approval letter</label>
          <input @change="handleFiles($event, 'verificationDoc')" type="file" accept="image/*,.pdf" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none" />
          <p v-if="wizard.verificationDoc?.length" class="mt-2 text-xs text-slate-500">Uploaded: {{ wizard.verificationDoc?.[0]?.name }}</p>
        </div>
        <label class="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <input type="checkbox" v-model="wizard.trustSafety" class="h-5 w-5 rounded border-slate-300 text-brand-800" />
          <span>I agree to the Trust & Safety guidelines</span>
        </label>
      </div>

      <div v-if="currentStep === 4" class="space-y-4">
        <div>
          <label class="text-sm font-medium text-slate-700">Thank-you video</label>
          <input v-model="wizard.thankYouVideo" type="url" placeholder="Paste a video URL for donor follow-up" class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-100" />
        </div>
        <div class="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm font-medium text-slate-700">Real-time alerts</p>
            <p class="text-xs text-slate-500">Receive live campaign updates when supporters donate.</p>
          </div>
          <label class="inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
            <input type="checkbox" v-model="wizard.realTimeAlerts" class="h-5 w-5 rounded border-slate-300 text-brand-800" />
            <span class="text-sm font-medium text-slate-700">Enabled</span>
          </label>
        </div>
      </div>

      <div v-if="errors.length" class="rounded-3xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700">
        <p class="font-semibold">Please fix the following</p>
        <ul class="mt-2 list-disc space-y-1 pl-5">
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <button @click="prevStep" :disabled="currentStep === 1" class="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50">
        Back
      </button>
      <div class="flex flex-col gap-3 sm:flex-row">
        <button v-if="currentStep < 4" @click="nextStep" class="inline-flex items-center justify-center rounded-3xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
          Continue
        </button>
        <button v-else @click="submitForm" class="inline-flex items-center justify-center rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
          Submit Campaign
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { z } from 'zod'

const emit = defineEmits<{
  (e: 'submitted', payload: Record<string, unknown>): void
}>()

const currentStep = ref(1)
const errors = ref<string[]>([])
const wizard = reactive({
  title: '',
  category: 'Student Projects',
  description: '',
  target: 10000,
  deadline: '',
  impactTag: '',
  verificationId: null as FileList | null,
  verificationDoc: null as FileList | null,
  trustSafety: false,
  thankYouVideo: '',
  realTimeAlerts: true,
})

const steps = [
  { id: 1, label: 'Purpose & Details' },
  { id: 2, label: 'Set Goal' },
  { id: 3, label: 'Verification' },
  { id: 4, label: 'Engagement' },
]

const stepSchema = computed(() => {
  switch (currentStep.value) {
    case 1:
      return z.object({
        title: z.string().min(10, 'Campaign title must be at least 10 characters'),
        description: z.string().min(20, 'Please describe the campaign purpose in more detail'),
      })
    case 2:
      return z.object({
        target: z.number().min(100, 'Target amount must be at least $100'),
        deadline: z.string().min(10, 'Please select your campaign deadline'),
        impactTag: z.string().min(10, 'Add an impact tagline to motivate donors'),
      })
    case 3:
      return z.object({
        verificationId: z.any().refine((files) => files && files.length > 0, 'Please upload a government ID'),
        verificationDoc: z.any().refine((files) => files && files.length > 0, 'Please upload a verification certificate'),
        trustSafety: z.literal(true, { errorMap: () => ({ message: 'Please agree to Trust & Safety terms' }) }),
      })
    case 4:
      return z.object({
        thankYouVideo: z.string().url('Please enter a valid video URL'),
      })
    default:
      return z.object({})
  }
})

function validateStep() {
  errors.value = []
  const payload = {
    title: wizard.title,
    description: wizard.description,
    target: wizard.target,
    impactTag: wizard.impactTag,
    verificationId: wizard.verificationId,
    verificationDoc: wizard.verificationDoc,
    thankYouVideo: wizard.thankYouVideo,
  }

  const result = stepSchema.value.safeParse(payload)
  if (!result.success) {
    errors.value = result.error.errors.map((issue) => issue.message)
    return false
  }

  return true
}

function nextStep() {
  if (validateStep()) {
    currentStep.value = Math.min(4, currentStep.value + 1)
    errors.value = []
  }
}

function prevStep() {
  currentStep.value = Math.max(1, currentStep.value - 1)
  errors.value = []
}

function submitForm() {
  if (validateStep()) {
    emit('submitted', { ...wizard })
    currentStep.value = 1
    errors.value = []
  }
}

function handleFiles(event: Event, field: 'verificationId' | 'verificationDoc') {
  const input = event.target as HTMLInputElement
  wizard[field] = input.files
}
</script>
