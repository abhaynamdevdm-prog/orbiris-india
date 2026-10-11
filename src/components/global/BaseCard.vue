<script setup>
defineProps({
  as: { type: String, default: 'article' },
  padded: { type: Boolean, default: true },
})
</script>

<template>
  <component :is="as" class="base-card" :class="{ 'base-card--padded': padded }">
    <slot />
  </component>
</template>
