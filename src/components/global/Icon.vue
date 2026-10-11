<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
  label: { type: String, default: '' },
})

const paths = {
  arrow: ['M4 12h16', 'm13 5 7 7-7 7'],
  chevron: ['m7 10 5 5 5-5'],
  close: ['m18 6-12 12', 'm6 6 12 12'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  plus: ['M12 5v14', 'M5 12h14'],
}

const iconPaths = computed(() => paths[props.name] || [])
</script>

<template>
  <svg
    class="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    :role="label ? 'img' : undefined"
    :aria-hidden="label ? undefined : 'true'"
    :aria-label="label || undefined"
  >
    <path v-for="path in iconPaths" :key="path" :d="path" />
  </svg>
</template>
