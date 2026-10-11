<script setup>
defineProps({
  tone: { type: String, default: 'blue' },
})
</script>

<template>
  <span class="badge" :class="`badge--${tone}`"><slot /></span>
</template>
