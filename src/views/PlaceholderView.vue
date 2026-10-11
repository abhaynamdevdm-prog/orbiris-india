<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Container from '../components/global/Container.vue'
import SectionHeading from '../components/global/SectionHeading.vue'
import Badge from '../components/global/Badge.vue'
import Breadcrumb from '../components/global/Breadcrumb.vue'

const route = useRoute()
const title = computed(() => route.meta.title || 'Page not found')
const breadcrumbs = computed(() => {
  const items = [{ label: 'Home', to: '/' }]
  if (route.path !== '/') items.push({ label: route.meta.breadcrumb || title.value })
  return items
})
</script>

<template>
  <section class="page-placeholder">
    <Container class="page-placeholder__content">
      <Breadcrumb :items="breadcrumbs" />
      <SectionHeading as="h1" :title="title" />
      <p class="page-placeholder__message"><Badge tone="teal">Page under development</Badge></p>
    </Container>
  </section>
</template>
