import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export interface CampaignItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  progress: number
  raised: number
  goal: number
  verified: boolean
  daysLeft?: number
}

export interface ProjectTeamMember {
  name: string
  role: string
  avatar: string
}

export interface StudentProject {
  id: string
  title: string
  status: 'Funded' | 'Ongoing'
  description: string
  team: ProjectTeamMember[]
  raised: number
  goal: number
  progress: number
  contactEmail: string
  image: string
  verified: boolean
}

export interface DonationRecord {
  category: string
  amount: number
  date: string
}

export const useDonationStore = defineStore('donation', () => {
  const searchQuery = ref('')
  const selectedCategory = ref('All')

  const campaigns = ref<CampaignItem[]>([
    {
      id: 'c1',
      title: 'Alumni Scholarship Fund',
      category: 'Alumni',
      description: 'Support deserving alumni and fuel leadership development.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
      progress: 72,
      raised: 72000,
      goal: 100000,
      verified: true,
      daysLeft: 22,
    },
    {
      id: 'c2',
      title: 'Student Startup Sprint',
      category: 'Student Projects',
      description: 'Fund promising student founders working on impactful solutions.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      progress: 48,
      raised: 24000,
      goal: 50000,
      verified: true,
      daysLeft: 18,
    },
    {
      id: 'c3',
      title: 'Business Incubator Boost',
      category: 'Business',
      description: 'Accelerate new ventures with mentoring and seed financing.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      progress: 65,
      raised: 65000,
      goal: 100000,
      verified: false,
      daysLeft: 26,
    },
    {
      id: 'c4',
      title: 'Emergency Relief Response',
      category: 'Emergency',
      description: 'Rapid support for students and communities in urgent need.',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=900&q=80',
      progress: 85,
      raised: 85000,
      goal: 100000,
      verified: true,
      daysLeft: 14,
    },
  ])

  const donationHistory = ref<DonationRecord[]>([
    { category: 'Alumni', amount: 820, date: '2026-02-14' },
    { category: 'Student Projects', amount: 560, date: '2026-03-02' },
    { category: 'Business', amount: 430, date: '2026-03-18' },
    { category: 'Emergency', amount: 710, date: '2026-04-05' },
  ])

  const projectSearchQuery = ref('')
  const projectStatusFilter = ref<'All' | 'Funded' | 'Ongoing'>('All')
  const studentProjects = ref<StudentProject[]>([
    {
      id: 'p1',
      title: 'BlueSky Education Lab',
      status: 'Ongoing',
      description: 'A student-led app that delivers adaptive learning for remote communities.',
      team: [
        { name: 'Elaine Wu', role: 'Project Lead', avatar: 'https://i.pravatar.cc/100?img=32' },
        { name: 'Hector Cruz', role: 'Product Designer', avatar: 'https://i.pravatar.cc/100?img=58' },
        { name: 'Priya Rao', role: 'Software Engineer', avatar: 'https://i.pravatar.cc/100?img=12' },
      ],
      raised: 32800,
      goal: 50000,
      progress: 66,
      contactEmail: 'team@bluesky.edu',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      verified: true,
    },
    {
      id: 'p2',
      title: 'SustainLab Circular Fund',
      status: 'Funded',
      description: 'Circular solutions for campus waste with student-led research funding.',
      team: [
        { name: 'Amina Patel', role: 'Research Lead', avatar: 'https://i.pravatar.cc/100?img=45' },
        { name: 'Jonas Reed', role: 'Communications', avatar: 'https://i.pravatar.cc/100?img=3' },
      ],
      raised: 52000,
      goal: 52000,
      progress: 100,
      contactEmail: 'connect@sustainlab.org',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
      verified: true,
    },
  ])

  const pledge = reactive({
    frequency: 'Monthly 15th',
    amount: 150,
    paymentMethod: 'GCash',
    note: 'Pinned to Student Projects cause',
    active: true,
  })

  const wizardData = reactive({
    title: '',
    category: 'Student Projects',
    description: '',
    target: 10000,
    impactTag: '',
    verificationId: null as FileList | null,
    verificationDoc: null as FileList | null,
    thankYouVideo: '',
    realTimeAlerts: true,
  })

  const totalImpact = computed(() => donationHistory.value.reduce((sum, item) => sum + item.amount, 0))

  const categoryTotals = computed(() => {
    const result: { [key: string]: number } = { Alumni: 0, 'Student Projects': 0, Business: 0, Emergency: 0 }
    donationHistory.value.forEach((item) => {
      const category = item.category as keyof typeof result
      if (result[category] !== undefined) {
        result[category] += item.amount
      }
    })
    return result
  })

  const filteredCampaigns = computed(() => {
    return campaigns.value.filter((campaign) => {
      const matchesCategory = selectedCategory.value === 'All' || campaign.category === selectedCategory.value
      const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      return matchesCategory && matchesSearch
    })
  })

  const filteredProjects = computed(() => {
    return studentProjects.value.filter((project) => {
      const matchesStatus = projectStatusFilter.value === 'All' || project.status === projectStatusFilter.value
      const matchesSearch = project.title.toLowerCase().includes(projectSearchQuery.value.toLowerCase())
      return matchesStatus && matchesSearch
    })
  })

  function updateSearch(query: string) {
    searchQuery.value = query
  }

  function updateProjectSearch(query: string) {
    projectSearchQuery.value = query
  }

  function setProjectStatusFilter(status: 'All' | 'Funded' | 'Ongoing') {
    projectStatusFilter.value = status
  }

  function setCategory(category: string) {
    selectedCategory.value = category
  }

  function attachVerificationFile(field: 'verificationId' | 'verificationDoc', files: FileList | null) {
    wizardData[field] = files
  }

  return {
    searchQuery,
    selectedCategory,
    campaigns,
    donationHistory,
    projectSearchQuery,
    projectStatusFilter,
    studentProjects,
    pledge,
    wizardData,
    totalImpact,
    categoryTotals,
    filteredCampaigns,
    filteredProjects,
    updateSearch,
    updateProjectSearch,
    setCategory,
    setProjectStatusFilter,
    attachVerificationFile,
  }
})
