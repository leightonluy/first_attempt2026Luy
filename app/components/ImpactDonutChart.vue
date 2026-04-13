<template>
  <div class="rounded-3xl bg-white p-6 shadow-sm">
    <div class="mb-4 flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold text-slate-900">Contribution Breakdown</h2>
        <p class="text-sm text-slate-500">Visual summary of your giving across categories.</p>
      </div>
    </div>
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const chartData = computed(() => ({
  labels: Object.keys(props.data),
  datasets: [
    {
      label: 'Contributions',
      backgroundColor: ['#003366', '#1E40AF', '#0EA5E9', '#2563EB'],
      borderColor: '#fff',
      borderWidth: 2,
      data: Object.values(props.data),
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#334155',
        boxWidth: 14,
        padding: 16,
      },
    },
  },
}
</script>
