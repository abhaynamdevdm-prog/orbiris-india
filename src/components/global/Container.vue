<script setup>
defineProps({
  as: { type: String, default: 'div' },
  narrow: { type: Boolean, default: false },
})
</script>

<template>
  <component :is="as" class="container" :class="{ 'container--narrow': narrow }">
    <slot />
  </component>
</template>
