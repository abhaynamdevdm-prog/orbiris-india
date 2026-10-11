<script setup>
defineProps({
  to: { type: String, default: '' },
  href: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
  ariaLabel: { type: String, default: '' },
})
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="button"
    :class="`button--${variant}`"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    class="button"
    :class="`button--${variant}`"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    class="button"
    :class="`button--${variant}`"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </button>
</template>
