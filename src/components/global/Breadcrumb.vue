<script setup>
import Icon from './Icon.vue'

defineProps({
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <nav v-if="items.length" class="breadcrumb" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="item.label">
      <RouterLink v-if="item.to && index < items.length - 1" :to="item.to">{{ item.label }}</RouterLink>
      <span v-else class="breadcrumb__current" :aria-current="index === items.length - 1 ? 'page' : undefined">
        {{ item.label }}
      </span>
      <Icon v-if="index < items.length - 1" name="chevron" :size="14" />
    </template>
  </nav>
</template>
