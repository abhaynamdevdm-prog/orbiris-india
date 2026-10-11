<script setup>
defineProps({
  as: { type: String, default: 'h2' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <header class="section-heading" :class="{ 'section-heading--center': align === 'center' }">
    <span v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</span>
    <component :is="as" class="section-heading__title">{{ title }}</component>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </header>
</template>
